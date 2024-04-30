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

const destaquesObj = [
  
  {
    titulo: 'Hidratação',
    url: './img/destaque/hidratacao.jpg',
    alt: 'Imagem de destaque 1'
  },
  {
    titulo: 'Saúde e bem Estar',
    url: './img/destaque/saude-envolve-bem-estar-fisico-mental-social.jpg',
    alt: 'Imagem de destaque 1'
  },
   {
    titulo: 'Hidratação',
    url: './img/destaque/hidratacao.jpg',
    alt: 'Imagem de destaque 1'
  },

  {
    titulo: 'Hidratação',
    url: './img/destaque/hidratacao.jpg',
    alt: 'Imagem de destaque 1'
  },
  {
    titulo: 'Saúde e bem Estar',
    url: './img/destaque/saude-envolve-bem-estar-fisico-mental-social.jpg',
    alt: 'Imagem de destaque 1'
  },
   {
    titulo: 'Hidratação',
    url: './img/destaque/hidratacao.jpg',
    alt: 'Imagem de destaque 1'
  }
  
]

export function destaques() {

  const destaquesList = document.querySelector('.destaques--list');

  for (let i = 0; i < destaquesObj.length; i++) {

    destaquesList.innerHTML += `
        <li>
          <article>
            <a href="artigo_exemplo.html">
            <h2 style="text-align: center;">${destaquesObj[i].titulo}</h2>
              <img src="${destaquesObj[i].url}" alt="">
            </a>  
          </article>
        </li>`
  }

  console.log(destaquesObj[0].url);

}