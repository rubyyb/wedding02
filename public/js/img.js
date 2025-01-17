document.querySelectorAll('[data-fancybox="gallery"]').forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); // 기본 클릭 동작 방지

      // Fancybox 수동 호출
    Fancybox.show([
        { src: "2.png", type: "image" },
        { src: "3.png", type: "image" },
        { src: "4.png", type: "image" },
        { src: "5.png", type: "image" },
        { src: "5-1.png", type: "image" },
        { src: "6.png", type: "image" },
        { src: "7.png", type: "image" },
        { src: "8.png", type: "image" },
        { src: "10.png", type: "image" },
        { src: "11.png", type: "image" },
        { src: "12.png", type: "image" },
        { src: "13.png", type: "image" },
        { src: "14.png", type: "image" },
        { src: "15.png", type: "image" },
        { src: "17.png", type: "image" },
        { src: "18.png", type: "image" },
        { src: "19.png", type: "image" },
        { src: "20.png", type: "image" },
        { src: "21.png", type: "image" },
        { src: "23.png", type: "image" },
        { src: "24.png", type: "image" },
        { src: "25.png", type: "image" },
        { src: "26.png", type: "image" },
        { src: "27.png", type: "image" },
        ], { startIndex: idx });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('[data-fancybox="gallery"]');
    const galleryContainer = document.querySelector(".gallery-container");

    // 원하는 순서대로 배열 정렬
    const sortedItems = Array.from(galleryItems).sort((a, b) => {
        return parseInt(a.getAttribute("data-index"), 10) - parseInt(b.getAttribute("data-index"), 10);
    });

    // 기존 요소 삭제 후 정렬된 요소 다시 추가
    galleryContainer.innerHTML = ""; // 기존 요소 제거
    sortedItems.forEach((item) => galleryContainer.appendChild(item)); // 정렬된 요소 추가
});

// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });