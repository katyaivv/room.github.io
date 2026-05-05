document.addEventListener('DOMContentLoaded', () => {
  const languages2 = document.querySelector('.languages2');
  const arrowSvg2 = languages2.querySelector('svg.lang2');
  const currentLang2 = languages2.querySelector('p.lang2'); // уточнил, чтобы точно брать <p>
  const langList2 = languages2.querySelector('.lang__list2');

  // Переключение выпадающего списка и вращение стрелки
  languages2.addEventListener('click', (e) => {
    e.preventDefault();
    languages2.classList.toggle('active');

    arrowSvg2.style.transform = languages2.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';

    // Показать или скрыть список
    if (languages2.classList.contains('active')) {
      langList2.style.display = 'block';
    } else {
      langList2.style.display = 'none';
    }
  });

  // Обработка клика по языку
  langList2.addEventListener('click', (e) => {
    if (e.target && e.target.matches('li.lang-link2')) {
      currentLang2.textContent = e.target.textContent;
      languages2.classList.remove('active');
      arrowSvg2.style.transform = 'rotate(0deg)';
      langList2.style.display = 'none';
    }
  });

  // Закрытие при клике вне блока
  document.addEventListener('click', (e) => {
    if (!languages2.contains(e.target)) {
      languages2.classList.remove('active');
      arrowSvg2.style.transform = 'rotate(0deg)';
      langList2.style.display = 'none';
    }
  });
});
