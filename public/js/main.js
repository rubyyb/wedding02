// 입력 이벤트 리스너 함수
export function setupInputListeners() {
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const messageInput = document.getElementById("message");

  const nameCharCount = document.getElementById("name-char-count");
  const passwordCharCount = document.getElementById("password-char-count");
  const messageCharCount = document.getElementById("message-char-count");

  // 이름 입력 이벤트
  nameInput.addEventListener("input", () => {
    const length = nameInput.value.length;
    nameCharCount.textContent = `${length}/10`;
  });

  // 비밀번호 입력 이벤트
  passwordInput.addEventListener("input", () => {
    const length = passwordInput.value.length;
    passwordCharCount.textContent = `${length}/20`;
  });

  // 메시지 입력 이벤트
  messageInput.addEventListener("input", () => {
    const length = messageInput.value.length;
    messageCharCount.textContent = `${length}/200`;
  });
}
