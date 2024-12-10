document.addEventListener('DOMContentLoaded', () => {

    // 모든 드롭다운 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.dropdown-button').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;

            // 현재 상태 확인
            const isVisible = dropdownContent.classList.contains('show');

            // 다른 모든 드롭다운 닫기
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });

            // 현재 버튼의 드롭다운 표시/숨기기
            if (!isVisible) {
                dropdownContent.classList.add('show');
            }
        });
    });

    // 외부 클릭 시 모든 드롭다운 닫기
    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });
});
