document.addEventListener('DOMContentLoaded', () => {
    const languages = document.querySelector('.languages');
    const arrowSvg = languages.querySelector('svg.lang');

    // Открытие / закрытие списка
    languages.addEventListener('click', (e) => {
        e.preventDefault();
        languages.classList.toggle('active');

        arrowSvg.style.transform = languages.classList.contains('active')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
    });

    // Закрытие при клике вне блока
    document.addEventListener('click', (e) => {
        if (!languages.contains(e.target)) {
            languages.classList.remove('active');
            arrowSvg.style.transform = 'rotate(0deg)';
        }
    });
});
