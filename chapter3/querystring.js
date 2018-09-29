const url = require('url');
const queryString = require('querystring');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

const query = queryString.parse(parseUrl.query);
console.log(query);
console.log(queryString.stringify(query));