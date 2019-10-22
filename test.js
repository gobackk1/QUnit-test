QUnit.test("hello test", function (assert) {
  assert.ok(1 == "1", "Passed!");
});

console.log(parseName('first middle last'));

test('parseName', function () {
  var result1 = parseName('Kazuhito Hokamura');
  equal(result1.firstName, 'Kazuhito', 'firstName is Kazuhito');
  equal(result1.lastName, 'Hokamura', 'lastName is Hokamura');

  var result2 = parseName('first middle last');
  equal(result2.firstName, 'first', 'firstName is first');
  equal(result2.middleName, 'middle', 'middleName is middle');
  equal(result2.lastName, 'last', 'lastName is last');
});

test('.attr()', function () {
  var $div = $('<div>');
  $div.attr('id', 'foo');
  equal($div.get(0).id, 'foo', 'idにfooが設定されている');
  equal($div.attr('id'), 'foo', 'fooが取得できる');
});

test('foo', function () {
  // == での比較
  equal(foo, 'bar');
  // === での比較
  strictEqual(foo, 'bar');
  // オブジェクトや配列を再帰的に比較
  deepEqual(foo, { foo: 'bar' });
  deepEqual(foo, ['foo', 'bar']);
  // fooが真かどうか
  ok(foo);
});
