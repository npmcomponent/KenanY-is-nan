*This repository is a mirror of the [component](http://component.io) module [kenany/is-nan](http://github.com/kenany/is-nan). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kenany-is-nan`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# is-nan

Lo-Dash's `isNaN` function as a component.

[![browser support](https://ci.testling.com/KenanY/is-nan.png)](https://ci.testling.com/KenanY/is-nan)

## Installation

``` bash
$ component install KenanY/is-nan
```

## API

``` javascript
var isNaN = require('is-nan');
```

### isNaN(value)

Checks if `value` is `NaN`.

Note that is not the same as native `isNaN` which will return `true` for
`undefined` and other non-numeric values. See <http://es5.github.io/#x15.1.2.4>.