// --------------------------------------
// Loading Screen Logic
// --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".loader").style.display = "none";
});

// --------------------------------------
// Google Analytics
// --------------------------------------
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-6153GNV2FE');

// --------------------------------------
// Copyright Date 자동 업데이트
// --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("date").textContent = new Date().getFullYear();
});

// --------------------------------------
// 배너 페이드아웃 효과
// --------------------------------------
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let banner = document.querySelector(".banner");

    if (banner) {
        let elementHeight = banner.clientHeight;
        let opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.4) + 0.8;
        banner.style.background = `linear-gradient(to right bottom, rgba(13, 35, 55, 0.99), rgba(23, 45, 65, ${opacity}))`;
    }
});

// --------------------------------------
// 드롭다운 버튼 (슬라이드 토글)
// --------------------------------------
document.querySelectorAll(".btn--slideToggle").forEach(button => {
    button.addEventListener("click", function () {
        let nextElement = this.nextElementSibling;
        if (nextElement) {
            nextElement.style.display = nextElement.style.display === "grid" ? "none" : "grid";
        }
    });
});

// --------------------------------------
// Skill SVGs fade-in 효과
// --------------------------------------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: "-50px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
