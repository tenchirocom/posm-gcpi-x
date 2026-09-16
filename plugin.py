import os, gettext as py_gettext
from app.plugins import PluginBase, Menu, MountPoint
from app.models import Plugin as PluginModel
from threading import local
from django.conf import settings
from django.shortcuts import render
from django.utils.translation import gettext as _, trans_real
from django.contrib.auth.decorators import login_required

class Plugin(PluginBase):

    def __init__(self, *args, **kwargs):
        """
        When the plugin initializes, if it is enabled the patches need to be
        installed.
        """
        super().__init__(*args, **kwargs)

        add_locale = self.is_enabled()
        if add_locale:
            self._add_locale()
        else:
            pass

    def is_enabled(self):
        """
        Check if the plugin is enabled.
        """
        try:
            plugin_name = self.get_name() if hasattr(self, 'get_name') else "coreplugins.posm-gcpi-x.plugin"
            return PluginModel.objects.filter(name=plugin_name, enabled=True).exists()
        except Exception:
            # Safe fallback if tables are missing during early migrations or bootstrap phases
            return False

    def main_menu(self):
        return [Menu(_("GCP Interface"), self.public_url(""), "fa fa-map-marker-alt fa-fw")]

    def app_mount_points(self):
        @login_required
        def gcpi(request):
            return render(
                request,
                self.template_path("app.html"),
                {   'title': 'GCP Editor',
                    'plugin_url': self.public_url("/"),
                    'gcpi_url': self.public_url("/gcpi/index.html")
                }
            )

        return [
            MountPoint('$', gcpi)
        ]

    def _locale_path(self):
        return self.get_path("locale")

    def register(self):
        super().register()

    def enable(self):
        self._add_locale()

    def disable(self):
        self._remove_locale()

    def requires_restart(self):
        # Locale path + catalog live per process.
        # Other gunicorn/celery workers will not see enable()/disable()
        # until they restart and register() runs.
        return True

    def _add_locale(self):
        locale_path = self._locale_path()
        paths = list(settings.LOCALE_PATHS)

        if locale_path not in paths:
            settings.LOCALE_PATHS = [locale_path] + paths

        self._reset_translation_caches()

    def _remove_locale(self):
        locale_path = self._locale_path()
        settings.LOCALE_PATHS = [
            p for p in settings.LOCALE_PATHS if p != locale_path
        ]
        self._reset_translation_caches()

    @staticmethod
    def _reset_translation_caches():
        trans_real._translations = {}
        trans_real._default = None
        trans_real._active = local()
