# International eXtended Ground Control Point Interface for OpenDroneMap (ODM)

The ground control interface as distributed with the current version of WebODM is in English, and does not support international languages. This project extends the posm-gpci plugin for WebODM to include international support.

Currently, the source to the posm-gcpi is not included in the default WebODM distribution, but distributed in a separate package. This extended version merges the plugin source together with the actual posm-gcpi app source in one directory for easier maintenance.

The original source can be found at <a href="https://github.com/OpenDroneMap/posm-gcpi">OpenDroneMap.posm-gcpi:master</a> and has been modified by Tenchiro. Modifications are licensed under the same license as ODM.

## To Use

- Install the plugin in the /<webodm dir>/coreplugins/posm-gcpi-x directory.
- Enable using the WebODM system administration plugin screen.
- Restart WebODM (required)

## Reference Locale Files

Current reference locale files include:
- ja

There is currently only one reference file. Users can use this as a reference to provide alternate languages.

**How to add new locales**

To add new locales:
1. Create a directory for the new locale in /.../posm-gcpi-x/locale/<lang>/LC_MESSAGES. Use the appropriate language code for your language.
2. Copy the django.po and djangojs.po files from locale/ja/LC_MESSAGES into this new directory.
3. Replace the msgstrs in the po files with your language text.
4. In /.../posm-gcpi-x/ directory, run ./build.sh which will recompile the React app and compile the new language.
5. Restart WebODM

## Modifying the React App

If you wish to make modifications directly to the React app, the source is found in /.../posm-gcpi-x/app/src.

You will need to install the npm application on your Linux system. Then you are ready to modify the app.
1. Make the desired source changes.
2. Go to the /.../posm-gcpi-x directory.
3. Run ./build.sh
4. Restart WebODM.

## Original Plugin Comments

### GCPi
Ground Control Point interface (GCPi) for OpenDroneMap. See [discussion](https://github.com/AmericanRedCross/posm/issues/221) and [overview](https://docs.google.com/document/d/1GbY542XnYVuwsdeZ_6izmpY0MI-gvQ0PNLaf5kpqSeI/edit)for reference.

#### Setup
Refer to [app/README.md](app/README.md) for development and deploy instructions.

## Original GCPi README
This can be found in the <a href="./app/README.md">app</a> directory.
