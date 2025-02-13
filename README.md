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

추가 AWS 작업완료

1. 리팩토링

- public 폴더 생성 및 정적파일 이동
  폴더: css, favicon_io, img, js, projects
  파일: favicon.ico, index.html, robnots.txt, site.webmanifest, sitemap.xml, text.md
- index.html, style.css 리팩터링 (코드 개선: 불필요한 주석 제거, 중복된 스타일 제거, CSS 속성 순서 정리, 중복된 meta 태그 제거거)
- project(YelpCamp/Portfolio) 페이지 리팩터링 (코드 개선: 테크 스택 개선, 불필요한 내용 삭제제)

2. Express.js 적용

- server.js 생성
  정적 파일 제공 (public 폴더만)
  HTTP → HTTPS 리디렉션
  도메인 리디렉션 (javierju.com → www.javierju.com)
  모든 경로에서 index.html 제공 (SPA 대응)
  테스트 서버 실행

3. S3 에 버킷 생성, CloudFront 연결하여 정적파일 웹사이트 구현

4. Route 53에서 도메인구입, ACM 인증, CloudFront와와 도메인(wwww.javierju.com) 연결, https 설정

5. 구글 애널리틱스등록

6. 구글콘솔서치 및 사이트맵 등록

7. 코드 품질 분석

- ESLint + Prettier 적용 (Github Action에서 npm run lint, npm run lint:fix, npm run format를 추가)

8. CI/CD

- Github Action: Github Action 에서 main push 시 S3 자동 업데이트 구현(CloudFront 캐시 무효화도 추가)

9. 크로스 브라우징 & 디바이스 테스트 완료

- Chrome DevTools로 검토 완료

10. CI/CD 자동화(github action 개선)

- sass 파일 변경 시 npm run build 자동 실행 후 style.css 커밋하고 push/배포

---

추가 예정

package.json 코드 개선 및 불필요한 npm, dependancy 삭제

1️⃣ CloudFront 캐싱 최적화
CloudFront에서 캐싱 정책을 적절히 설정했는지 확인! (Cache-Control 헤더 활용)
정적 파일 (이미지, CSS, JS 등)은 max-age를 길게 설정해서 성능 최적화 가능.
개발 중일 땐 CloudFront 캐시 무효화(Invalidations) 필요할 수도 있음.

Performance, Security, Accessibility, and SEO optimization with Lighthouse
performance 75
Accessibility 98
Best practices 96
SEO 92

콘솔에러 해결
Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies.

깃허브 액션(Github Action) ↔︎ AWS 인증 OpenID Connect 구성
