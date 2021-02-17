# Web_NODE_JS-2-

### 웹사이트 렌더링 방식
- 과거의 웹사이트
  - 서버쪽 Disk에 저장된 html을 전달
  1) 접속요청(Client Side)
  2) Html 파일 전달받음(Server side)
  3) Html 파일 내용 전달
- Ajax 이전 시대
  - APM(Apache, PHP, MySQL)
    - AJAX가 나오기 전부터, 지금까지 쓰이고 있는 웹 개발 방식(현재 Wordpress 사용)
  1) 접속요청
  2) Html 문서 DISK로부터 전달받음(HTML, JavaScript, PHP)
  3) PHP 렌더링 요청
  4) 필요한 경우 DB로 값 R/W
  5) 렌더링 완료된 Html 문서(HTML, JavaScript)
  6) Html 파일 내용 전달
  7) JavaScript 코드 렌더링
- Ajax를 통한 JavaScript 렌더링
  - javaScript를 이용하여 일부분 동적 생성
    - 새로고침 없이, 일부 영역을 동적으로 데이터를 받아 수정 가능
    
### SEO
- Search Engine Optimization
- 검색엔진에서 검색할 때, 순위를 높이고 노출이 잘 되도록 웹페이지 검색 최적화 작업
- 하는 이유 : 사업 매출에 큰 영향
- 검색엔진에 잘 보이게 하는 방법
  - 사이트맵
  - robots.txt 생성
  - 웹페이지 마다 메타태그에 페이지 요약 설명
  - 웹 Page에 핵심 키워드가 존재해야 함
    - Ajax를 사용하여 동적 Page를 만들었따면, 검색 엔진이 크롤링을 완벽하게 하지 못함
    - Ajax 남용시 검색이 잘 되지 않음
- 웹개발자가 해야하는 작업
  - 적절한 AJAX 사용
  - 보안 프로토콜, HTTPS 사용
  - Robots.txt, 사이트맵 제작
  - 메타태그 설정
  - SEO 분석도구 세팅
  - 모바일 전용 페이지 개발
  - SEO 최적화된 URL 라우팅

### SSR과 CSR
- SSR(Server Side Rendering) : 서버 측에서 렌더링을 작업하는 방식
  - 서버에서 모든 내용을 준비한 후에, Client로 전달
  - 초기 로딩속도 빠름(CSR에 비해 다운 받는 파일이 많지 않음)
  - 서버 부담이 큼(서버와 잦은 응답을 하기 떄문에 서버에 부담)
  - SEO(HTML에 대한 정보가 처음에 포함되어 있어 데이터 수집 가능) up
- CSR(Client Side Rendering) : 클라이언트 측에서 렌더링을 작업하는 방식
  - 최초 페이지 전체를 로딩 한 후 데이터만을 변경하여 사용
  - 페이지 로드가 없음
  - React, Vue, Angular
  - 초기 로딩속도 느림(모든 JS파일을 다운받아와야 하기 떄문)
  - 서버 부담이 작음(data 요청이 있을 때만 요청)
  - SEO(맨 처음 HTML 파일이 비어 있어, 크롤러가 데이터를 수집할 수 없음) down
- SPA(Single Page Application)에 SSR 적용학
  - next : react
  - nuxt : vue
  
### EJS
- 개요
  - 템플릿 엔진
    - 템플릿, input data를 넣어 HTML 문서를 만드는 시스템
    - 사용자 요청이 들어오면, 정해진 템플릿에 내부 내용만 바꾸어 렌더링 후 사용자에게 전달
  - EJS(Embedded JavaScript templating)
    - JavaScript로 HTML을 만들어내는 템플릿 엔진
    - Node.js의 대표적인 템플릿 엔진
- 설치 및 실습
  - package.json 생성
    1) npm init -y : 초기 파일 디폴트 값으로 생성
    2) npm install express ejs nodemon
    - express : http 서버 열 떄 사용
    - nodemon : 서버를 끄지 않고도 수정이 가능하게 해줌
  - 실습1 : [index.js](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/002.ejs-study/index.js), [index.ejs](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/002.ejs-study/views/index.ejs)    
  - 실습2 : [index.js](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/003.ejs-practice/index.js), [index.ejs](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/003.ejs-practice/views/index.ejs)
### JSON Placeholder
- JSONPlaceholder
  - REST API를 테스트 할 수 있는 무료 서비스
  - Server를 구축하지 않고, JSONPlaceholder로 Front-end 개발 가능
  - 실습3 : [index.js](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/004.jsonplaceholder/index.js), [index.ejs](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/004.jsonplaceholder/views/index.ejs), [detail.ejs](https://github.com/KimUJin3359/Web_NODE_JS-2-/blob/master/004.jsonplaceholder/views/detail.ejs)
  ![캡처(1)](https://user-images.githubusercontent.com/50474972/108229663-5a071480-7183-11eb-8547-7527bb36805c.JPG)
