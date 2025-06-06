document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("hero");

    window.addEventListener("scroll", function () {
        const heroHeight = hero.offsetHeight; // Altura del hero
        if (window.scrollY > heroHeight) {
            navbar.classList.add("hidden"); // Oculta el navbar
        } else {
            navbar.classList.remove("hidden"); // Muestra el navbar
        }
    });
});

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mostrar/ocultar menú móvil
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });



<!-- Script para manejar las preguntas -->

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      answer.classList.toggle('hidden');
      const icon = item.querySelector('span');
      icon.classList.toggle('rotate-45');
    });
  });
