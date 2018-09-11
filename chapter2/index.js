// const, let

// if (true) {
//     var x = 3;
// }

// console.log(x);

// if (true) {
//     const y = 3;
// }

// console.log(y); // y is not defined

// const a = 10;
// a =1;           //Assignment to constant variable. 에러
// let b = 20;
// b=30;

// const c;        //  Missing initializer in const declaration

// 템플릿 문자열

// const num1 = 1;
// const num2 = 2;
// const result = 3;

// const string1 = num1 + ' 더하기 ' + num2 + '는 "' + result + '"';
// const string2 = `${num1} 더하기 ${num2}는 "${result}"`;

// console.log(string1);
// console.log(string2);

// function template(strings, ...keys) {
// return (function(...values) {
//     const dict = values[values.length - 1] || {};
//     const result = [strings[0]];
//     keys.forEach(function(key, i) {
//     const value = Number.isInteger(key) ? values[key] : dict[key];
//     result.push(value, strings[i + 1]);
//     });
//     return result.join('');
// });
// }

// const t1Closure = template`${0}${1}${0}!`;
// console.log(t1Closure('Y', 'A'));  // "YAY!"
// const t2Closure = template`${0} ${'foo'}!`;
// console.log(t2Closure('Hello', {foo: 'World'}));  // "Hello World!"

// const handler = {a:100}
// const obj = {
//     // __proto__
//     //__proto__: theProtoObj,
//     // Shorthand for ‘handler: handler’
//     handler,
//     // Methods
//     toString() {
//      // Super calls
//      return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
// };


// console.log(obj);
// console.log(obj.toString());

// // Expression bodies
// const evens = [2,4,6,8,10];
// const fives = [];

// const odds = evens.map(v => v + 1);
// const nums = evens.map((v, i) => v + i);
// const pairs = evens.map(v => ({even : v, odd: v + 1}));

// // Statement bodies
// nums.forEach(v => {
//   if (v % 5 === 0)
//     fives.push(v);
// });

// // Lexical this
// var bob = {
//   _name: "Bob",
//   _friends: [],
//   printFriends() {
//     this._friends.forEach(f =>
//       console.log(this._name + " knows " + f));
//   }
// }

// console.log(bob);
// console.log(fives);
// console.log(odds);

// list matching
// const [a, , b] = [1,2,3];

// function getASTNode() {
//     return {op:10, lhs: {op: 100}, rhs: 20};
// }

// // object matching
// const { op: a, lhs: { op: b }, rhs: c }
//        = getASTNode();

// console.log(a,b,c);

// // object matching shorthand
// // binds `op`, `lhs` and `rhs` in scope
// var {op, lhs, rhs} = getASTNode()

// console.log(op, lhs, rhs);

// // Can be used in parameter position
// function g({name: x}) {
//   console.log(x);
// }
// console.log(g({name: 5}));

// // Fail-soft destructuring
// var [a] = [];
// console.log(a === undefined);

// // Fail-soft destructuring with defaults
// var [a = 1] = [];
// console.log(a === 1);


// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공');
//     } else {
//         reject('실패');
//     }
// });


//promise.then(result => console.log(result), err => console.log(err));         // 이건 곧 deprecated 될 예정이니 이렇게는 쓰지 말자
//promise.then(result => console.log(result)).catch(err => console.log(err));

// promise.then(result => {
//     throw new Error('test');
// }, err => console.log(err));

// promise.then(result => {
//     throw new Error('test');
// }).catch(err => console.log(err));

const p1 = Promise.resolve('1차');
const p2 = Promise.resolve('2차');
const p3 = Promise.resolve('3차');
const p4 = Promise.resolve('4차');
const p5 = Promise.resolve('5차');
//const p6 = Promise.reject('error');
// const p7 = () => new Promise((resolve, reject) => {
//     throw new Error('test2');
//     resolve('test');
// });

// p1.then(result => {
//     console.log(result);
//     return p2;
// }).then(result => {
//     console.log(result);
//     return p3;
// }).then(result => {
//     console.log(result);
//     return p4;
// }).then(result => {
//     console.log(result);
//     return p5;
// }).then(result => {
//     console.log(result);
// }).catch(err => console.log(err));


//Promise.all([p1,p2,p3,p4,p5]).then(results => results.forEach(result => console.log(result)));


// p1.then(result => {
//     console.log(result);
//     return p2;
// }).then(result => {
//     console.log(result);
//     return p6;
// }).then(result => {
//     console.log(result);
//     throw new Error('1111');
// }).then(result => {
//     console.log(result);
//     return p5;
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

// (async function test() {
    
//     try {
//         console.log(await p1);
//         console.log(await p2);
//         console.log(await p6);
//     } catch (ex) {
//         console.log(ex);
//     }
    
// })();

// 이터러블한 객체
// 기본적으로 Arrays, String, Map, Set, DOM 데이터

// const aaa = {
//     data: [1,2,3,4,5,6,7,8],
//     [Symbol.iterator]: function() {
//         return {
//             next: () => ({
//                 done: !(this.data.length > 0),
//                 value: this.data.pop()
//             })
//         };
//     }
// };

// // for(const v of aaa) {
// //     console.log(v);
// // }

// console.log([...aaa]);

// 제너레이터
// 이터러블한 객체를 더 쉽게 만들기 위해서 사용
// async, await 는 내부적으로 제너레이터를 사용하여 구현
// 
// function* bbb() {
//     const data = [1,2,3,4,5,6,7,8];

//     while(data.length > 0) {
//         yield data.pop();
//     }
// }

// console.log([...bbb()]);

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
}


const genObjWithReturn = genFuncWithReturn();

console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());       //여기서는 리턴 값이 나오지만

console.log([...genFuncWithReturn()]);      //여기서는 안나온다. 왜냐 하면 done이 true일 때 나오는 값을 무시하기 떄문에.


function* foo() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    yield 'e';
}

function* bar() {
    yield 'x';
    foo(); // does nothing!
    yield 'y';
}

console.log([...bar()]);

function* bar2() {
    yield 'x';
    yield* foo();       //제너레이터를 제귀함수로 돌려서 결과값 전부를 소진하게 처리
    yield 'y';
}

console.log([...bar2()]);


function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`); // (A)
    console.log(`2. ${yield}`);
    return 'result';
}

const genObj1 = dataConsumer();

genObj1.next();
genObj1.next('a');
genObj1.next('b');
genObj1.next('c');

function* gen() {
    // (A)
    while (true) {
        const input = yield; // (B)
        console.log(input);
    }
}

const obj = gen();
obj.next('a');
obj.next('b');

