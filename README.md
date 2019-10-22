# 単体テスト
## 概要
- 自分が書いたコードが正しく仕様を満たしているか、バグが生まれていないか、などを検証するために行う。
- 機能を修正するたびに、これまで動いてた動作を毎回手動で行い、目視ですべての結果を確認するの手間がかかるし、非効率的。
- そこで期待する動作をプログラムのコードで書いておいて、何度でも自動で動作の確認を実行しようというのがソフトウェア開発におけるテスト。

## メリット
- テストがあれば安心して改良に取り組むことができる。
- テストを書くことはソフトウェアの品質を保つために重要。

## テストを書くタイミング
### 機能を実装した直後
機能を実装した後に、期待する動作のテストケースを書く。すでに実装があって、どのような動作をするかがはっきりわかるので書きやすい。

### 機能を実装する前
プログラムを実装する前にテストを書くという開発手法をテスト駆動開発、またはTDD（Test Driven Development）と呼ばれています。

#### TDD
テストは最初に書き、そのテストを満たすような最低限の実装をし、テストが通ったらリファクタリングを行うということを繰り返しながら開発を進めることにより、動くコードとクリーンなコードの両立を目指すという開発手法。

### バグを発見したとき
バグを発見したタイミングでテストを書くのは非常に重要です。まずバグを発見したらそのバグが再現するかどうかのテストを書きます。あとはそのテストが通るようにコードを修正すれば、テストがある限りそのバグが再発することはありません。

## Qunit
[QUnit](http://qunitjs.com/)
- 多くのプロジェクトで採用されており、実績や安定性は抜群のフレームワーク
- jQueryに依存
- QUnitは長く使われており、実績も豊富なため、情報が多く、機能が安定している

### 基本的な記述例
1. test関数でテストの対象を指定。
2. equal関数で値を比較し、検証を行う。
```
test('.attr()', function() {
  var $div = $('<div>');
  $div.attr('id', 'foo');
 
  equal($div.get(0).id, 'foo', 'idにfooが設定されている');
  equal($div.attr('id'), 'foo', 'fooが取得できる');
});
```

### アサーション
値が正しいかどうか検証する機能のこと。それぞれのアサーション関数の引数の最後にはメッセージを指定することができ、必要に応じてわかりやすいメッセージを書いておく。
```
test('foo', function() {
  // == での比較
  equal(foo, 'bar');
  // === での比較
  strictEqual(foo, 'bar');
  // オブジェクトや配列を再帰的に比較
  deepEqual(foo, { foo: 'bar'});
  deepEqual(foo, ['foo', 'bar']);
  // fooが真かどうか
  ok(foo);
});
```