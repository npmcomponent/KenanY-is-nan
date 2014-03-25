var isNaN = require('../');
var test = require('tape');
var map = require('lodash.map');

test('returns `true` for NaNs', function(t) {
  t.plan(2);

  t.ok(isNaN(NaN));
  t.ok(isNaN(new Number(NaN)));
});

test('returns `false` for non NaNs', function(t) {
  t.plan(9);

  var falsey = [, '', 0, false, NaN, null, undefined];

  var expected = map(falsey, function(value) {
    return value !== value;
  });

  var actual = map(falsey, function(value, index) {
    return index ? isNaN(value) : isNaN();
  });

  t.ok(!isNaN(arguments));
  t.ok(!isNaN([1, 2, 3]));
  t.ok(!isNaN(true));
  t.ok(!isNaN(new Date));
  t.ok(!isNaN({'a': 1}));
  t.ok(!isNaN(0));
  t.ok(!isNaN(/x/));
  t.ok(!isNaN('a'));

  t.deepEqual(expected, actual);
});