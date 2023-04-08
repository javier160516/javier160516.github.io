document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      duration: 1200,
    });

  const yearElement = document.querySelector('.year');
  yearElement.textContent = new Date().getFullYear();
})
