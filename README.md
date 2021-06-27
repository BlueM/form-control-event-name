# Overview

This library is a helper library extracted from [@bluem/form-change-tracker](https://www.npmjs.com/package/@bluem/form-change-tracker) to be reused in other contexts. It merely serves for getting the name of the event emitted by an HTML form element when changed (for example: “click” for a checkbox, “change” for a `<select>` element).

## Browser support

This library will work (at least) on:

* Google Chrome Desktop and Android (any version)
* Firefox Desktop and Android (any version)
* Safari Desktop and iOS (any version)
* Microsoft Edge (any version)
* Microsoft IE11 (older versions untested)


# Usage
The library is an ES6 class, so the way to use it depends on your tooling and the browsers you want to support. But basic usage is:

```javascript
// If using native ES6 module in browser:
import formControlEvenName from './node_modules/@bluem/form-control-event-name/index.js';

// OR:
// If using Webpack or Parcel for bundling:
// import formControlEventName from '@bluem/form-control-event-name/index.js';

formControlEventName(myFormElement); // Will return the name of the event (string)
```

# Tests
Install npm depencencies, then run `npm run test` or `npm run test-coverage`.

# License
MIT License

# Version History

## 1.0.5 (2021-06-27)
- Updated npm dependencies to fix vulnerabilites dev dependencies

## 1.0.4 (2020-09-29)
- Fix IE11 compatibility, for cases where ES6 is not transpiled to ES5.
- Updated npm dependencies to fix some vulnerabilites in 3rd-party code

## 1.0.3 (2020-01-26)
- Updated npm dependencies to fix vulnerabilites in 3rd-party code. No changes in the module itself.

## 1.0.1 (2019-08-14)
- Updated npm dependencies to fix vulnerabilites in 3rd-party code. No changes in the module itself.

## 1.0 (2018-12-02)
- Initial release

