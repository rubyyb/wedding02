document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function () {
      // 드롭다운 토글
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

        // 드롭다운 외부 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown-button")) {
            dropdownContent.style.display = "none";
        }
    });
});