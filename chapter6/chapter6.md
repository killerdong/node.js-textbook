# 6장 익스프레스 웹 서버 만들기

## 6.1 Express-generator 로 빠르게 설치하기

* express에 필요한 각종 패키지를 쉽게 설치할 수 있도록 해주는 boilerplate
* 소스 코드가 es5 기준으로 작성
* 기본 view template 를 jade로 사용하지만 jade가 오래전에 pug로 변경되었기 때문에, pug 엔진을 위해 수정

## 6.2 익스프레스 구조 이해하기

* `bin/www` 파일은 http 모듈에 express 모듈을 연결하고, 포트를 지정하는 부분
* debug 모듈: https://www.npmjs.com/package/debug

## 6.3 미들웨어

* express 의 핵심 역할
* 요청과 응답의 중간에 위치하여 요청과 응답을 조작하여 기능을 추가하고, 나쁜 요청을 걸러내는 역할
* `app.use`와 함께 사용, `app.use` 메서드의 인자로 들어오는 함수가 미들웨어이고, app에 장착시켜주는 역할

### 6.3.1 커스텀 미들웨어 만들기

* 파라미터로 `(req, res, next())` 를 가지는 함수를 생성
* 미들웨어 안에서 `next()` 함수를 호출해야 다음으로 넘어감. 사용하지 않을 경우 요청의 흐름이 끊김
* `next` 함수의 경우 인자에 값을 넣지 않는 경우 다음 단계로 넘어가고, route 외에 다른 값을 넣으면 바로 에러 핸들러로 이동
* `next` 함수의 인자가 route가 등록되면 그 쪽 route로 이동

### 6.3.2 morgan

* 로그 미들웨어
* 요청에 대한 정보를 콘솔에 기록
* dev, short, common, combined 등의 설정 값을 줄 수 있음
* https://www.npmjs.com/package/morgan

### 6.3.3 body-parser

* 요청 본분을 해석해주는 미들웨어
* 익스프레스 4.16.0 버전부터 body-parser의 일부 기능이 express에 내장되어 모듈을 추가하지 않아도 사용가능
* Raw, Text 형식의 본문을 추가 해석하고 싶으면 모듈 추가
* Multipart/form-data 같은 폼을 통해서 전송된 데이터는 해석하지 못함(이거 사용법은 뒤에)

### 6.3.4 cookie-parser

* 동봉된 쿠키를 해석
* `cookieParser('secret code')` 형식으로 문자 열을 넣을 경우, 서명된 쿠키가 되고 클라이언트에서 쿠키 수정 시 에러가 발생

### 6.3.5 static

* 정적인 파일을 제공
* 정적 파일 라우터의 경우 최대한 위쪽으로 배치

### 6.3.6 express-session

* 세션 관리용 미들웨어
* 1.5 버전 이후부터 cookie-parser와 연관성이 없어졌음
* store 옵션을 활용해서 데이터베이스나 redis 같은 것을 활용해서 세션 값 저장 가능 - 새션 공유 등등을 떄문에

### 6.3.7 connect-flash

* 일회성 메시지들을 웹 브라우저에 나타낼 떄 사용
* 로그인 에러나 회원 가입 에러 같은 일회성 경고 메세지에 사용

### 6.4 Router 객체로 라우팅 분리하기

* 익스프레스를 사용하는 이유 중 하나가 라우팅을 깔끔하게 관리할 수 있다는 점
* response 함수로 send, sendFile, json, redirect, render 사용 가능(http://expressjs.com/ko/api.html#res)
* request: http://expressjs.com/ko/api.html#req

### 6.5 template 엔진 사용하기

* pug: https://pugjs.org/api/getting-started.html
* ejs: http://ejs.co/
* pug는 테그를 간소화해서 사용하기 편하고, ejs는 기존에 알고 있는 html 방식을 사용(둘 다 호불호가 있음)
* 이 책에서는 기본적으로 pug를 사용



