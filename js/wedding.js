document.addEventListener('DOMContentLoaded', function () {
    const remainTime = document.querySelector('#remain-time');

    function diffDay() {
        const masTime = new Date("2025-03-08");
        const todayTime = new Date();

        const diff = masTime - todayTime;

        const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
        const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const diffMin = Math.floor((diff / (1000 * 60)) % 60);
        const diffSec = Math.floor((diff / 1000) % 60);

        // 템플릿 리터럴을 사용하여 남은 시간을 표시
        remainTime.innerText = `${diffDay}일  ${diffHour}시간  ${diffMin}분  ${diffSec}초`;
    }

    diffDay();  // 초기 계산 실행
    setInterval(diffDay, 1000);  // 1초마다 업데이트
});
