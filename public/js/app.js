// particlesJS.load("particles-js", "assets/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });

function copyToClipboard(elementId) {
  // 복사할 요소 선택
  const textToCopy = document.getElementById(elementId).innerText;

  // 대시 제거
  const sanitizedText = textToCopy.replace(/-/g, "");

  // 클립보드에 복사
  navigator.clipboard
    .writeText(sanitizedText)
    .then(() => {
      alert("계좌 번호가 복사되었습니다");
    })
    .catch((err) => {
      alert("복사에 실패했습니다. 다시 시도해주세요.");
      console.error("복사 실패:", err);
    });
}
