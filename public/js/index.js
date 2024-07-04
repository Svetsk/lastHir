console.log('hello')
// // Получаем все блоки, которые должны появиться при скролле
// const blocks = document.querySelectorAll('.blocks');
//
// // Функция, которая определяет, виден ли блок на экране
// function isElementInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
//
// // Функция, которая добавляет класс для анимации появления блока
// function showBlocks() {
//     blocks.forEach(block => {
//         if (isElementInViewport(block)) {
//             block.classList.add('show');
//         }
//     });
// }
//
// // Обработчик события скролла страницы
// window.addEventListener('scroll', showBlocks);
//
// // Показываем блоки, которые видны при загрузке страницы
// showBlocks();