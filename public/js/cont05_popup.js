document.addEventListener("DOMContentLoaded", function () {
  const cont05 = document.getElementById("cont05");
  const cont05Btn = document.getElementById("cont05_btn");
  const close = document.getElementsByClassName("pop_close");

  if (cont05) {
    console.log();
    cont05Btn.addEventListener("click", () => {
      // close 배열이 비어있지 않도록 확인하고, 첫 번째 요소에 대해 스타일을 가져옵니다.
      if (close.length > 0 && getComputedStyle(close[0]).display === "none") {
        close[0].style.display = "block";
        console.log("Changed display to block");
      }
    });
  } else {
    console.log('Element with id "cont05" not found');
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.querySelector("#first_text button");
    const modal = document.querySelector("#guestbook-form");
    const closeModal = document.querySelector("#close-btn");

    // 모달 열기
    openButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // 모달 닫기
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

