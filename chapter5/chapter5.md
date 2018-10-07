# 5장 패키지 메니저

## 5.1 npm 알아보기

* node package manager 약자
* 60만 개에 달하는 패키지가 등록
* 패키지 : npm에 업로드된 노드 모듈
* 의존 관계 : 모듈에서 모듈을 사용하는 것 처럼 패키지에서 패키지를 사용하는 것
* yarn: npm4 버전이 너무 느려서 속도를 개선하기 위해서 나온 패키지 메니저, facebook에서 나왔음. 현재 npm5 부터 속도가 많이 개선되었지만 아직까지는 yarn이 좀더 빠름

## 5.2 package.json 으로 패키지 관리하기

*  `npm init`를 이용해서 package.json 파일 생성 가능
* name, version, entry point, test command, git repositry, ketwords, licence 등을 넣어 줄 수 있다.
* `npm` 명령어를 통해서 여러가지 명령 수행이 가능
* `npm run` 명령을 활용해서 script에 설정된 것을 실행 가능, start 등은 run 생략이 가능
* `npm install {패키지명}` 을 활용해서 패키지 설치 가능. 예전에는 --save 옵션을 줘야 dependencies에 등록이 되었는데, 5부터는 --save 옵션이 기본 값으로 변경
* `mpm install {패키지명} --save-dev`  를 활용하면, 개발자용 패키지를 설치할 수 있다.   devDepencies에 등록
* `mpm install {패키지명} --global` 을 활용하면, 전역으로 사용하는 패키지 설치. 실제 운영에 필요한 패키지는 전역으로 사용하지 않을 것을 권장

## 5.3 패키지 버전 이해하기

* 노드 패키지 버전은 세 자리로 구성(X.Y.Z)
* SemVer 방식의 버전 넘버링 사용(https://semver.org/lang/ko/)
* ^: minor 버전까지만 설치 또는 업데이트
* ~: patch 버전까지만 설치 또는 업데이트
* \>,<,>=,<=,= 초과, 미만, 이상, 이하, 동일을 의미
* @latest 는 최신 버전의 패키지를 설치

## 5.4 기타 npm 명령어

* `outdated`: 업데이트 할 수 있는 패키지가 있는 확인
* `uninstall`: 해당 패키지 제거
* `search`: 패키지 검색, 공식 사이트에서 검색하는게 더 좋다.
* `adduser`: npm 로그인을 위한 명령어
* `whoami`: 로그인 한 계정이 무엇인지 알려줌
* `logout`: 로그인한 계정을 로그 아웃
* `version`: 버전 정보를 알려줌
* `deprecate`: 해당 패키지를 설치할 때 경고 메시지를 띄우게 하는 명령어, 자신의 패키지에만 이 명령어 적용 가능
* `publish`: 배포
* `unpublish`: 배포한 패키지를 제거, 배포 후 24시간 내에만 실행 가능
* 그 외 명령어는 공식 홈페이지(https://doc.npmjs.com)을 참고

## 5.5 패키지 배포하기

* npm 공식 사이트에 계정을 생성
* publish 명령을 사용해서 배포 가능
* 똑같은 이름이 있을 경우 배포 불가






