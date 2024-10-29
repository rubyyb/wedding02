document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in"); // .fade-in 클래스의 모든 요소 선택
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // 화면에 요소가 나타날 때 show 클래스 추가
            }
        });
    });
    
    elements.forEach((el) => observer.observe(el)); // 각 요소에 Observer 적용
});