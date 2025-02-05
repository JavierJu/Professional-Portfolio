const express = require("express");
const path = require("path");

const app = express();
const PORT = 80;

// 리디렉션 설정
app.use((req, res, next) => {
    if (req.hostname === "javierju.com") {
        return res.redirect(301, "https://www.javierju.com" + req.originalUrl);
    }
    next();
});

// 브라우저에서 자동으로 HTTPS 사용.
app.use((req, res, next) => {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    next();
});


// 현재 디렉토리에서 정적 파일 제공
app.use(express.static(__dirname));

// 루트 URL 접근 시 index.html 제공
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 서버 실행
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running at http://127.0.0.1:${PORT}/`);
});
