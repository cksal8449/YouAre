// header
$('.sub').hide();
$('.gnb > li').hover(function () {

  $(this).find('ul').stop().slideDown(500);
  $(this).find('a').addClass('on');

}, function () {
  $(this).find('ul').stop().slideUp(500);
  $(this).find('a').removeClass('on');
})

// sidebar 보이기
$('.sidebar-btn a').on('click', function (e) {
  e.preventDefault();
  $('.sidebar').addClass('active');
})

$('.sidebar-overlay, .sidemenu #close-btn').on('click', function () {
  $('.sidebar').removeClass('active');
})

// product
let product = [
  {
    link: '',
    img: '../images/Candle1-1.png',
    title: 'Aeternum',
    note: 'Thick chamomile | Soft wood grain | Musk',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-2.png',
    title: 'Animi',
    note: 'Bergamot | Green tangerine | Sandalwood',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-3.png',
    title: 'Angelus',
    note: 'Warm air | Orange peel | Musk',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-4.png',
    title: 'Beatrice',
    note: 'Marshmallow | Orange blossom | Tobacco',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-5.png',
    title: 'Benedictum',
    note: 'Cool pear | Suede | Bittersweet Galbanum',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-6.png',
    title: 'Bellatrix',
    note: 'White champagne | Darjeeling tea | Creamy musk',
    ml: '50',
    price: '53,000'
  },
  {
    link: '',
    img: '../images/Candle1-7.png',
    title: 'Cordelia',
    note: 'Haystack | Thick-scented rum | Patchouli',
    ml: '50',
    price: '53,000'
  },
]

let boxItem = document.querySelectorAll('box-item');
boxItem.forEach(function (item, length) {
  item.querySelector('link').src = products[length].link;
  item.querySelector('img').src = products[length].img;
  item.querySelector('.per-info h2').innerHTML = product[length].title;
  item.querySelectorAll('.per-info p').innerHTML = product[length].note;
  item.querySelectorAll('.per-info p').innerHTML = product[length].ml;
  item.querySelectorAll('.per-info p').innerHTML = product[length].price;
})


product.forEach(function (item, index) {
  let boxItem = `
  <div class='box-item'>
  <div class='item-img-box'>
  <a href='${item.link}'>
   <img src='${item.img}' alt='${item.title}'>
   </a> 
  </div>
    <div class='per-info'>
     <a href='${item.link}'>
      <h2>${item.title}</h2>
     </a>
      <p>${item.note}</p>
      <ul class='per-in'>
      <li class='ml'>${item.ml}mL</li>
      <li class='price'> ￦  ${item.price}</li>
      </ul>
      <button class='cart-btn'>Add to cart</button>
    </div>
  </div>
  `
  document.querySelector('.box-list').insertAdjacentHTML('beforeend', boxItem);
})

console.log(123)