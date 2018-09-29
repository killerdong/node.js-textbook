# 3.1 REPL 사용하기

* 자바스크립트 스크립트언어로 즉석에서 코드를 실행할 수 있다.
* REPL: Read Eval Print Loop 의 줄임말
* 콘솔을 통해서 직접 실행 가능한 것을 말하는 것

# 3.2 JS 파일 실행하기

* js 파일로 생성해서 node 를 통해서 실행이 가능
* `hellowWorld.js` 파일을 생성해서 node 를 통해 `node helloWorld`를 하면 js 파일이 실행된다.

# 3.3 모듈로 만들기

* 노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와 틀리다..(ES2015+ 에서는 import, export가 지원하지만 아직 브라우저에서는 지원이 안됨, 크롬 60버전부터 지원가능)
* 코드 재사용에 용이
* 모듈이 많이지고 모듈 간의 관계가 얽히게 도미녀 구조를 파악하기 어렵다는 단점도 있다.
* es2015+ 에서 지원하는 import, export도 node 9 부터는 사용가능하지만 여러 제약 사항이 있다. 아직까지는 그냥 require, module.exports 를 이용하는 것이 좋다.

# 3.4 노드 내장 객체 알아보기

* 노드에서는 기본적인 내장 객체와 내장 모듈을 제공
* 따로 설치 하지 않아도 바로 사용 가능

## 3.4.1 global

* 전역 객체 이기 떄문에 모든 파일에서 접근 가능
* global.require 매서드에서 global 생략이 가능
* 전역 객체 이기 떄문에 파일 간의 데이터 공유를 쉽게 사용 가능
* 하지만 위와 같이 사용할 경우 나중에 유지 보수 하기 어렵기 때문에 그렇게 하지 않는 것을 추천

## 3.4.2 console

* 보통 디버깅을 위해 사용
* console.time(레이블): console.timeEnd(레이블) 과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정
* console.log(...내용): 평범한 로그를 콘솔에 표시
* console.error(에러내용): 에러를 콘솔에 표시
* console.dir(객체, 옵션): 객체를 콘솔에 표시할 떄 사용
* console.trace(레이블): 에러가 어디서 발생했는지 추적할 수 있게 해줌.
* 위 메서드 말고 더 많은 메서드가 있음(https://developer.mozilla.org/ko/docs/Web/API/Console)

## 3.4.3 타이머

* setTimeout(콜백함수, 밀리초): 주어진 시간 이후에 콜백 함수를 실행
* setInterval(콜백함수, 밀리초): 주어진 시간마다 콜백 함수 실행
* setImmediate(콜백함수): 콜백 함수를 즉시 실행
* clearTimeout(아이디): setTimeout 을 취소
* clearIneterval(아이디): setInterval 을 취소
* clearImmediate(아이디): setImmediate 를 취소
* setImmedaite 와 setTimeout(.., 0) 은 어느 것이 먼저 실행하지 상황마다 다르기 때문에 햇깔릴 소지가 있어서 setTimeout 0은 될 수 있으면 쓰지 말자.

## 3.4.4 __filenane, __dirname

* __filename: 현재 파일 경로 + 파일 명
* __dirname: 현재 파일 경로

## 3.4.5 module, exports

* module.exports 와 exports를 같은 객체를 사용
* exports는 사용하는데 제약 사양이 있기 떄문에 그냥 module.exports를 사용하자.

## 3.4.6 process

* 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.

### 3.4.6.1 process.env

* 시스템 환경 변수

### 3.4.6.2 process.nextTick(콜백)

* 다른 콜백 함수보다 nextTick의 콜백 함수를 우선으로 처리하도록 만듬
* promise 또한 다른 콜백 함수도 우선 처리하도록 되어 있어서 이 2개를 합쳐서 마이크로테스트라고 따로 구분지어 부름

### 3.4.6.3 process.exit(코드)

* 실행 중인 node 프로세스를 종료
* 코드가 0이면 정상 종료, 코드가 1이면 비정상 종료

# 3.5 노드 내장 모듈 사용하기

## 3.5.1 os

* OS 정보를 가져올 때 사용
* os.arch(): process.arch 와 동일
* os.platform(): process.platform 와 동일
* os.type(): 운영체제의 종류
* os.uptime(): 운영 체제 부팅 후 흐른 시간
* os.hostname(): 컴퓨터 이름
* os.release(): 운영체제의 버전 정보
* os.homedir(): 홈 디렉토리 경로
* os.tmpdir(): 임시 파일 저장 경로
* os.cpus(): 컴퓨터의 코어 정보
* os.freemem(): 사용 가능한 메모리
* os.totalmem(): 전체 메모리 용량

## 3.5.2 path

* 폴더와 피일의 경로를 쉽게 조작하도록 도와주는 모듈
* OS에 따라 맞는 경로 구분자로 표현
* path.sep: 경로의 구분자
* path.delimiter: 환경 변수의 구분자
* path.dirname: 파일이 위치한 폴더 경로
* path.extname: 파일의 확장자
* path.basename: 파일 이름, 파일의 이름만 표시하고 싶다면 두 번째 인자로 파일의 확장자를 넣어주면 됨
* path.parse: 파일 경로를 root, dir, base, ext, name으로 분리
* path.format: path.parse 한 객체를 파일 경로로 만듬
* path.normalize: /나 \ 를 실수로 여러번 사용하거나 혼용해서 사용할 경우 정상적인 경로로 수정
* path.isAbsolute: 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줌
* path.relative: 경로를 두 개 넣으면 첫 번째 경로를 기준으로 두 번째 경로까지 가는 상대 경로를 보여줌
* path.join: 여러 인자를 넣으면 하나의 경로로 합쳐줌
* path.resolve: resolve은 /를 만나면 절대 경로로 인식하지만, join은 상대 경로로 처리, 이 차이점만 빼고 join과 같음

## 3.5.3 url

* 인터넷 주소를 쉽게 조작하도록 도와주는 모듈
* url을 처리하는 방식이 2가지인데 whatwg 방식과 node 기존 방식
* 둘 중에 취향에 따라 사용하면 되지만 몇몇 경우에서는 특정 방식을 사용해야함.
* pathname의 경우 WHATWG 방식에서는 지원하지 않음
* WHATWG에서는 searhparams 를 사용하여 parameter 값을 특수한 객체로 지원함

## 3.5.4 querystring

* 기존 노드의 url을 사용할 때 search 부분을 사용하기 쉽게 객체로 만드는 모듈

## 3.5.5 crypto

* 다양한 방식의 암호화를 도와주는 모듈

### 3.5.5.1 단방향 암호화

* 비밀번호를 암호화할 떄 사용
* 보통 SHA512를 사용

### 3.5.5.2 양방향 암호화

* 대칭형 암호화
* key를 활용해서 암호화 복호화가 가능한 암호화

## 3.5.6 util

* 각종 편의 기능을 모아둔 모듈

# 3.6 파일 시스템 접근하기
# 3.7 이벤트 이해하기
# 3.8 예외 처리하기

파일로 대체