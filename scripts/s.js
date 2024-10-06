
    const langBtn = document.querySelector('.lang-btn');
    const languageDiv = document.querySelector('.language');
    const arrow = document.querySelector('.arrow');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const currentFlag = document.querySelector('#current-flag'); // Флаг, который нужно менять

    // При клике на кнопку языка, переключаем меню и стрелку
    langBtn.addEventListener('click', () => {
        languageDiv.classList.toggle('show');
        arrow.classList.toggle('up');
        arrow.classList.toggle('down');
    });

    // Обработчик кликов на пункты меню
    dropdownMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Отключаем переход по ссылке
            
            // Получаем новое изображение флага из data-атрибута
            const newFlag = event.target.getAttribute('data-flag');
            
            // Меняем изображение флага
            currentFlag.src = newFlag;
            
            // Закрываем меню и возвращаем стрелку в исходное положение
            languageDiv.classList.remove('show');
            arrow.classList.add('down');
            arrow.classList.remove('up');
        }
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', (event) => {
        if (!languageDiv.contains(event.target)) {
            languageDiv.classList.remove('show');
            arrow.classList.add('down');
            arrow.classList.remove('up');
        }
    });


