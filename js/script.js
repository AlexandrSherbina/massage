window.addEventListener('DOMContentLoaded', () => {


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
