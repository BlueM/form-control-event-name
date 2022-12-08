/**
 * Returns the name of the event to be observed based on the control type
 *
 * @param control
 *
 * @returns {String|null}
 */
export default function (control) {
    switch (control.type) {
        case 'color':
        case 'date':
        case 'email':
        case 'month':
        case 'number':
        case 'password':
        case 'search':
        case 'tel':
        case 'text':
        case 'textarea':
        case 'time':
        case 'url':
        case 'week':
            return 'input';
        case 'button':
        case 'checkbox':
        case 'radio':
            return 'click';
        case 'file':
        case 'select':
        case 'select-multiple':
        case 'select-one':
            return 'change';
        case 'range':
            if (-1 !== window.navigator.userAgent.indexOf('MSIE')) {
                // Will trigger "change", but not "input"
                return 'change';
            }
            return 'input';
        case 'hidden':
        case 'reset':
        case 'submit':
            // Ignore
            return null;
        default:
            console.warn('Unsupported type: “' + control.type + '”');
            return null;
    }
}
