const _ =
    typeof window.gettext === 'function'
        ? window.gettext.bind(window)
        : typeof window.parent.gettext === 'function'
            ? window.parent.gettext.bind(window.parent)
            : (msg) => msg;

export default _;