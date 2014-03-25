# is-nan

Lo-Dash's `isNaN` function as a component.

[![browser support](https://ci.testling.com/KenanY/is-nan.png)](https://ci.testling.com/$KenanY/is-nan)

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