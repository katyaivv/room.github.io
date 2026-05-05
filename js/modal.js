const signUpBtn = document.getElementById('signUpBtn');
const modal = document.getElementById('successModal');
const closeBtn = modal.querySelector('.modal__close');
const okBtn = modal.querySelector('.modal__btn');

// Функция показа кастомного toast
function showToast(message, duration = 3000) {
    let toast = document.getElementById('toast');

    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Обработчик клика на кнопку Sign Up
signUpBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const agreement = document.getElementById('agreement').checked;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        showToast('Please enter your email');
        return;
    }

    if (!emailPattern.test(email)) {
        showToast('Invalid email address');
        return;
    }

    if (!agreement) {
        showToast('Please agree to the marketing consent');
        return;
    }

    // Если всё хорошо — показываем модальное окно
    modal.classList.add('active');

    // Очищаем форму
    document.getElementById('email').value = '';
    document.getElementById('agreement').checked = false;
});

// Функция закрытия модального окна
function closeModal() {
    modal.classList.remove('active');
}

// Обработчики закрытия модального окна
closeBtn.addEventListener('click', closeModal);
okBtn.addEventListener('click', closeModal);

// Закрыть модал, если кликнули вне контента
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

