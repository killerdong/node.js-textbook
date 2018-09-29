const http = require('http');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')] )
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});


http.createServer((req, res) => {

    const cookie = parseCookies(req.headers.cookie);
    console.log(req.url, cookie);
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.end('hello cookie')
}).listen(8080, () => {
    console.log('8080 포트에서 서버 대기 중입니다.');
});