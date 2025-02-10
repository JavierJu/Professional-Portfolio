const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (public 폴더만)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP → HTTPS 리디렉션
app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
        return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
    }
    next();
});

// 도메인 리디렉션 (javierju.com → www.javierju.com)
app.use((req, res, next) => {
    if (req.headers.host === "javierju.com") {
        return res.redirect(301, `https://www.javierju.com${req.originalUrl}`);
    }
    next();
});

// 모든 경로에서 index.html 제공 (SPA 대응)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 서버 실행
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));