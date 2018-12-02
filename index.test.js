import formControlEventName from './index';

describe('formControlEventName', function () {
    it('should return “input” for type “text”', function () {
        expect(formControlEventName({type: 'text'})).toEqual('input');
    });

    it('should return “click” for type “radio”', function () {
        expect(formControlEventName({type: 'radio'})).toEqual('click');
    });

    it('should return “click” for type “button”', function () {
        expect(formControlEventName({type: 'button'})).toEqual('click');
    });

    it('should return “change” for type “file”', function () {
        expect(formControlEventName({type: 'file'})).toEqual('change');
    });

    it('should return “change” for type “select”', function () {
        expect(formControlEventName({type: 'select'})).toEqual('change');
    });

    it('should return null for types “hidden”, “reset” and “submit”', function () {
        expect(formControlEventName({type: 'hidden'})).toBeNull();
        expect(formControlEventName({type: 'reset'})).toBeNull();
        expect(formControlEventName({type: 'submit'})).toBeNull();
    });

    it('should return “input” for type “range”', function () {
        expect(formControlEventName({type: 'range'})).toEqual('input');
    });

    it('should return “change” for type “range”, if MSIE', function () {
        window.navigator.__defineGetter__('userAgent', function () {
            return 'Some MSIE version';
        });
        expect(formControlEventName({type: 'range'})).toEqual('change');
    });

    it('should return null for an unknown type', function () {
        jest.spyOn(global.console, 'warn');
        expect(formControlEventName({type: 'foobar'})).toBeNull();
        expect(console.warn).toHaveBeenCalledTimes(1);
    });
});
