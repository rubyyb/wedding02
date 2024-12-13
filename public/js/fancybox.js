document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind('[data-fancybox="gallery"]', {
    zoom: false,
    dragToClose: false,
    doubleClick: false,
    wheel: false,
    on: {
      click: function (fancybox, event) {
        event.preventDefault();
      },
      wheel: function (fancybox, event) {
        event.preventDefault();
      },
      dblclick: function (fancybox, event) {
        event.preventDefault();
      },
    },
    Toolbar: {
      display: {
        left: [],
        middle: ["prev", "infobar", "next"],
        right: ["close"],
      },
    },
    Image: {
      click: false, // 클릭 시 확대 비활성화
      wheel: false, // 마우스 휠 확대 비활성화
    },
  });
});
