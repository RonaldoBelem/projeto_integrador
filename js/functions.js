export function carouselImg() {

  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function nextSlide() {
      carousel.appendChild(carousel.firstElementChild.cloneNode(true));
      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = 'translateX(-100%)';
      setTimeout(function () {
        carousel.removeChild(carousel.firstElementChild);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 500);
    }

    function prevSlide() {
      const lastItem = carousel.lastElementChild.cloneNode(true);
      carousel.insertBefore(lastItem, carousel.firstElementChild);
      carousel.style.transition = 'transform 0s';
      carousel.style.transform = 'translateX(-100%)';
      setTimeout(function () {
        carousel.removeChild(carousel.lastElementChild);
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = 'translateX(0)';
      }, 0);
    }

    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 10000);
  });

}


export function destaques() {

  const destaques = document.querySelector('.destaques--list');

  destaques.innerHTML += (`
  <li>
    <article>
      <a href="#">
        <img src="https://via.placeholder.com/320x180?text=destaque_320x180" alt="">
        <h2>Título do destaque</h2>
      </a>  
    </article>
  </li>`)

}