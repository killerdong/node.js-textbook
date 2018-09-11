# 2장 알아두어야 할 자바스크립트

## 2.1 ES2015+

### const, let

* 블록 스코프
* const는 한 번 대입하면 다른 값을 대입할 수 없고, let 은 대입이 가능
* const는 우선 고려하고, 계속되는 대입이 필요한 경우에만 let을 사용하자

### 템플릿 문자열

* 백틱(`)으로 사용
* 줄바꿈 지원 : \r\n 같은 것을 사용하지 않아도 됨
* `${변수명}`를 활용해서 변수를 넣는 것이 가능


#### tagged templates

```javascript
tagFunction`Hello ${firstName} ${lastName}!`
```

* 위와 같은 형태로 tagFunction을 구현할 수 있음

```javascript
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
```

* http://exploringjs.com/es6/ch_template-literals.html 참고

### 객체 리터럴

```javascript
const obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

### 화살표 함수

```javascript
// Expression bodies
const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
const pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
```

### 비구조화 할당

```javascript
// list matching
const [a, , b] = [1,2,3];

// object matching
const { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
const {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
const [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
const [a = 1] = [];
a === 1;
```

### 프라미스

* https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
* https://programmingsummaries.tistory.com/325

### async/await

* promise 를 좀더 간결하게 만들 수 있는 방법
* await를 쓰기 위해서는 항상 함수에 async를 선언해줘야 한다.

### 이터러블, 이터레이터, 제너레이터

* http://exploringjs.com/es6/ch_iteration.html
* http://exploringjs.com/es6/ch_generators.html


## 2.2 프런트앤드 자바스크립트

### ajax

* 비동기식 웹 서비스를 개발하기 위한 기법
* 요즘은 JSON을 많이 이용
* JQuery 나 axios 를 요즘 많이 이용한다.
* XMLHttpRequest 를 이용해서 처리

### FormData

* html form 테그의 데이터를 동적으로 제어할 수 있는 기능

### encodeURLComponent, decodeURLComponent

* 영어를 제외한 문자를 인코딩 해주는 경우 : encodeRULComponent 사용
* 디코드 해주는 경우: decodeURLComponent

### data attribute와 dateset

* `data-속성명`을 이용해서 각 테그의 필요한 데이터를 넣을 때 사용
* 속성명은 - 을 이용해서 분리(예: userJob이라는 데이터를 넣을 경우 data-user-job)
* 소문자만 사용 가능
* dataset을 이용해서 데이터를 가져올 수 있다.
```javascript
console.log(document.getElementById('aaa').dataset); //{id: '0', userJob: 'wwwww' }
```
