const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/booklist.aspx?sercate1=0010101dwdw3232#anchor');

console.log(myURL);
console.log(url.format(myURL));

const parseUrl = url.parse('http://www.gilbut.co.kr/book/booklist.aspx?sercate1=0010101dwdw3232#anchor');

console.log(parseUrl);
console.log(url.format(parseUrl));