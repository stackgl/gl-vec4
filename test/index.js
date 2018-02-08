var test = require('tape')
var vec4 = require('../')
var EPSILON = 0.000001

test('add', function (t) {
  var result = vec4.add([], [0, 1, 2, 3], [4, 5, 6, 7])
  t.deepEqual(result, [4, 6, 8, 10])
  t.end()
})

test('clone', function (t) {
  var result = vec4.clone([5, 6, 7, 8])
  t.deepEqual(result, [5, 6, 7, 8])
  t.end()
})

test('copy', function (t) {
  var result = vec4.copy([], [5, 6, 7, 8])
  t.deepEqual(result, [5, 6, 7, 8])
  t.end()
})

test('create', function (t) {
  var result = vec4.create()
  t.deepEqual(result, [0, 0, 0, 0])
  t.end()
})

test('distance', function (t) {
  var result = vec4.distance([1, 2, 3, 4], [5, 6, 7, 8])
  t.equal(result, 8)
  t.end()
})

test('divide', function (t) {
  var result = vec4.divide([], [8, 4, 2, 1], [2, 1, 0.5, 0.25])
  t.deepEqual(result, [4, 4, 4, 4])
  t.end()
})

test('dot', function (t) {
  var result = vec4.dot([3, 4, 5, 6], [7, 8, 9, 10])
  t.deepEqual(result, 158)
  t.end()
})

test('fromValues', function (t) {
  var result = vec4.fromValues(2, 3, 4, 5)
  t.deepEqual(result, [2, 3, 4, 5])
  t.end()
})

test('inverse', function (t) {
  var result = vec4.inverse([], [2, 4, 8, 16])
  t.deepEqual(result, [0.5, 0.25, 0.125, 0.0625])
  t.end()
})

test('length', function (t) {
  var result = vec4.length([3, 4, 5, 6])
  t.ok(Math.abs(result - 9.273618495495704) < EPSILON)
  t.end()
})

test('lerp', function (t) {
  var result = vec4.lerp([], [3, 4, 5, 6], [7, 8, 9, 10], 0.25)
  t.deepEqual(result, [4, 5, 6, 7])
  t.end()
})

test('max', function (t) {
  var result = vec4.max([], [3, 7, 2, 1], [5, 6, 4, 4])
  t.deepEqual(result, [5, 7, 4, 4])
  t.end()
})

test('min', function (t) {
  var result = vec4.min([], [3, 7, 8, 1], [5, 6, 2, 4])
  t.deepEqual(result, [3, 6, 2, 1])
  t.end()
})

test('multiply', function (t) {
  var result = vec4.multiply([], [3, 4, 5, 6], [7, 8, 9, 10])
  t.deepEqual(result, [21, 32, 45, 60])
  t.end()
})

test('negate', function (t) {
  var result = vec4.negate([], [3, 4, 5, 6])
  t.deepEqual(result, [-3, -4, -5, -6])
  t.end()
})

test('normalize', function (t) {
  var result = vec4.normalize([], [3, 4, 5, 6])
  t.ok(Math.abs(result[0] - 0.3234983196103152) < EPSILON)
  t.ok(Math.abs(result[1] - 0.43133109281375365) < EPSILON)
  t.ok(Math.abs(result[2] - 0.539163866017192) < EPSILON)
  t.ok(Math.abs(result[3] - 0.6469966392206304) < EPSILON)
  t.end()
})

test('random', function (t) {
  var result = vec4.random([], 5)
  for (var i = 0; i < 10; i++) {
    var len = Math.sqrt(result[0] * result[0] + result[1] * result[1] + result[2] * result[2] + result[3] * result[3])
    t.ok(Math.abs(5 - len) <= EPSILON)
  }
  t.end()
})

test('scale', function (t) {
  var result = vec4.scale([], [3, 4, 5, 6], 2)
  t.deepEqual(result, [6, 8, 10, 12])
  t.end()
})

test('scaleAndAdd', function (t) {
  var result = vec4.scaleAndAdd([], [3, 4, 5, 6], [7, 8, 9, 10], 2)
  t.deepEqual(result, [17, 20, 23, 26])
  t.end()
})

test('set', function (t) {
  var result = vec4.set([], 3, 4, 5, 6)
  t.deepEqual(result, [3, 4, 5, 6])
  t.end()
})

test('squaredDistance', function (t) {
  var result = vec4.squaredDistance([3, 4, 5, 6], [7, 8, 9, 10])
  t.deepEqual(result, 64)
  t.end()
})

test('squaredLength', function (t) {
  var result = vec4.squaredLength([3, 4, 5, 6])
  t.deepEqual(result, 86)
  t.end()
})

test('subtract', function (t) {
  var result = vec4.subtract([], [3, 4, 5, 6], [7, 8, 9, 10])
  t.deepEqual(result, [-4, -4, -4, -4])
  t.end()
})

test('transformMat4', function (t) {
  var result = vec4.transformMat4([], [3, 4, 5, 6], [
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16,
    17, 18, 19, 20
  ])
  t.deepEqual(result, [218, 236, 254, 272])
  t.end()
})

test('transformQuat', function (t) {
  var result = vec4.transformQuat([], [3, 4, 5, 6], [7, 8, 9, 10])
  t.deepEqual(result, [1170, 1032, 1374, 6])
  t.end()
})
