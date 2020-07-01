window.addEventListener('DOMContentLoaded', () => {
//hamburger
const menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu_item'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })
});

//Modal 
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click' ,function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });      
  $('.button_price').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.services-item__descr').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });      

});
