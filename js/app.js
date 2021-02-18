let currentSlide = 0;
let slides = 0;

// DOM content
const $leftBtn = document.querySelector('.move-left_btn');
const $rightBtn = document.querySelector('.move-right_btn');
const $slide = document.querySelector('.carousel-slides');
const $indicators = document.querySelector('.indicators');

const carousel = ($container, images) => {
  slides = (images.length % 3 === 0) ? images.length / 3 : Math.floor(images.length / 3) + 1;

  let html = '';

  html = images.map(src => {
    return `<li class="list-item">
    <figure>
      <img src=${src} alt="img" />
      <figcaption>
        <em class="title">Britta Clay Art</em>
        <span class="date">Sat, 24 October 2020</span>
      </figcaption>
    </figure>
  </li>`;
  }).join('');

  // images.map((src, idx) => {
  //   if (!idx) 
  //   if (idx === images.length - 1) 
  // });

  $container.innerHTML = html;
};

const indicator = ($indicators, slides) => {
  let html = '';
  const arr = new Array(slides).fill(0);

  html = arr.map((_, idx) => `<button id=${idx} class="indicator"></button>`).join('');

  $indicators.innerHTML = html;
};

carousel(document.querySelector('.carousel-list'), [
  './css/img/1.jpg',
  './css/img/2.jpg',
  './css/img/3.jpg',
  './css/img/4.jpg',
  './css/img/5.jpg',
  './css/img/6.jpg',
  './css/img/7.jpg',
  './css/img/8.jpg',
  './css/img/9.jpg',
]);

indicator($indicators, slides);

$rightBtn.onclick = () => {
  if (currentSlide >= slides - 1) currentSlide = -1;
  currentSlide += 1;
  $slide.style.setProperty('--currentSlide', currentSlide);
}

$leftBtn.onclick = () => {
  if (currentSlide <= 0) currentSlide = slides;
  currentSlide -= 1;
  $slide.style.setProperty('--currentSlide', currentSlide);
}

$indicators.onclick = e => {
  if (!e.target.matches('button')) return;

  $slide.style.setProperty('--currentSlide', e.target.id);
};
