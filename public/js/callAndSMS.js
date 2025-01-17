// 환경 감지 함수
function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // 모바일 기기 여부를 체크
  return /android|iphone|ipad|ipod|windows phone|mobile/i.test(userAgent);
}

// 전화 걸기 함수
function makeCall(phoneNumber) {
  if (isMobile()) {
    window.location.href = `tel:${phoneNumber}`;
  } else {
    alert("이 기능은 모바일 환경에서만 사용할 수 있습니다.");
  }
}

// 문자 보내기 함수
function sendSMS(phoneNumber, message) {
  if (isMobile()) {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  } else {
    alert("이 기능은 모바일 환경에서만 사용할 수 있습니다.");
  }
}

// 이벤트 바인딩
// 전화
document
  .getElementById("call_1")
  .addEventListener("click", () => makeCall("01050154379"));
document
  .getElementById("call_2")
  .addEventListener("click", () => makeCall("01053974592"));
document
  .getElementById("call_3")
  .addEventListener("click", () => makeCall("01094394379"));
document
  .getElementById("call_4")
  .addEventListener("click", () => makeCall("01049026499"));
document
  .getElementById("call_5")
  .addEventListener("click", () => makeCall("01055506867"));
document
  .getElementById("call_6")
  .addEventListener("click", () => makeCall("01057926867"));

// SMS
document
  .getElementById("sms_1")
  .addEventListener("click", () => sendSMS("01050154379", ""));
document
  .getElementById("sms_2")
  .addEventListener("click", () => sendSMS("01053974592", ""));
document
  .getElementById("sms_3")
  .addEventListener("click", () => sendSMS("01094394379", ""));
document
  .getElementById("sms_4")
  .addEventListener("click", () => sendSMS("01049026499", ""));
document
  .getElementById("sms_5")
  .addEventListener("click", () => sendSMS("01055506867", ""));
document
  .getElementById("sms_6")
  .addEventListener("click", () => sendSMS("01057926867", ""));
