## 🚀 Getting Started
To run this project locally, install dependencies using npm
```
$ npm install
```
Run node-sass in watch mode for hot reloading
```
$ npm run dev
```
Finally, copy the path for the index.html file and paste it in the browser. For example
```
/Users/username/Desktop/Professional-Portfolio/index.html
```
before pushing to production, run node-sass in production mode
```
$ npm run build
```

## 🔒 License
Copyright Notice and Statement: currently [**not** offering any license](https://choosealicense.com/no-permission/). Permission only to view.



추가 AWS 작업완료료

리팩토링
- public 폴더 생성 및 정적파일 이동 
 css, favicon_io, img, js, projects
 favicon.ico, index.html, robnots.txt, site.webmanifest, sitemap.xml, text.md

Express.js 적용
 server.js 생성, 정적파일 제공

S3 에 버킷 생성 및 정적파일 웹사이트 구현

Route 53에서 도메인구입, ACM 인증, CloudFront 생성하여 도메인(wwww.javierju.com) 연결, https 설정정

Github Action 에서 main push 시 S3 자동 업데이트 구현(CloudFront 캐시 무효화도 추가가)


추가 예정

index.html 리팩토링
sass 개선
sgv 개선선

1️⃣ CloudFront 캐싱 최적화
CloudFront에서 캐싱 정책을 적절히 설정했는지 확인! (Cache-Control 헤더 활용)
정적 파일 (이미지, CSS, JS 등)은 max-age를 길게 설정해서 성능 최적화 가능.
개발 중일 땐 CloudFront 캐시 무효화(Invalidations) 필요할 수도 있음.

구글 애널리틱스 등록, 사이트맵 등록록


깃허브 액션(Github Action) ↔︎ AWS 인증 OpenID Connect 구성


Performance, Security, Accessibility, and SEO optimization with Lighthouse. Increased Google Lighthouse performance score from 12 to 88

Decreased average DOM Content Loaded time from 10s to 2s using intersection observer and lazy loading for images and video. Further decreased first visit DOM Content Loaded time from 7s to 1s by refactoring website from using an express.js server to a static site with no web server

Increased SEO to achieve Google PageRank #1 for the search term “jacob grisham”. Used Open Graph Meta Properties (og:image, etc.) to help increase ranking

User Experience optimization with loading page SVG animation

Increased cross-browser compatibility using LambdaTest

First time using Google Analytics and first time routing website to a domain name
