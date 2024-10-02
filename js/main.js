document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham số URL
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');

    // Hiển thị section theo tham số
    if (section) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.style.display = 'block';
        }
    }

    // Toggle answer visibility
    document.querySelectorAll('.btn-dropdown').forEach(button => {
        button.addEventListener('click', function () {
            const answerContainer = this.nextElementSibling;
            if (answerContainer.style.display === 'none' || !answerContainer.style.display) {
                answerContainer.style.display = 'block';
                this.textContent = 'Ẩn đáp án';
            } else {
                answerContainer.style.display = 'none';
                this.textContent = 'Hiện đáp án';
            }
        });
    });
});
