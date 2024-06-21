const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Отображение слайдов в зависимости от их ширины
    spaceBetween: 10, // Пространство между слайдами
    freeMode: true, // Включаем свободный режим прокрутки
    freeModeSticky: true, // Включаем прилипание к ближайшему слайду в свободном режиме
    speed: 800, // Устанавливаем скорость прокрутки в миллисекундах (например, 800 мс)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}
