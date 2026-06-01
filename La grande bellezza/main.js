document.addEventListener('DOMContentLoaded', () => {
    console.log("Main Page Initialized: La Grande Bellezza");

    // В будущем здесь будет логика навигации между страницами,
    // например: const currentPage = 'main';

    // Пример базовой анимации появления текста
    const heroContent = document.querySelector('.hero-content');

    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 500);
});

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
