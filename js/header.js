document.addEventListener('DOMContentLoaded', function() {
    const text = "Forever starts now!";
    const textContainer = document.getElementById('typing');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            const span = document.createElement('span');
            span.classList.add('char');
            
            // 공백일 경우, HTML에서 공백을 인식하도록 처리
            if (text.charAt(index) === " ") {
                span.innerHTML = "&nbsp;"; // HTML에서 공백을 의미하는 코드
            } else {
                span.textContent = text.charAt(index);
            }
            
            // 글자가 삐뚤빼뚤 적히는 효과 적용
            const randomRotation = Math.random() * 6 - 3; // -3도에서 +3도 사이의 랜덤 회전값
            span.style.transform = `rotate(${randomRotation}deg)`;
            
            textContainer.appendChild(span);
            index++;
            setTimeout(typeWriter, 200); // 200ms마다 한 글자씩 나타남
        }
    }

    typeWriter(); // 함수 실행
});
