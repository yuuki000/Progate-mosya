$(function(){

  $('.login-btn').click(function() {
    $('.login-modal-wrapper').fadeIn();
  });

  $('.signup-show').click(function() {
    $('.signup-modal-wrapper').fadeIn();
  });

  $('.fa-times').click(function() {
    $('.login-modal-wrapper').fadeOut();
    $('.signup-modal-wrapper').fadeOut();
  });

  $('.lesson-hover').hover(
    function() {
      $(this).find('.lesson-text').addClass('lesson-text-active');
    },
    function() {
      $(this).find('.lesson-text').removeClass('lesson-text-active');
    }
  );

  $('.login-modal-wrapper').click(function() {
    $('.login-modal-wrapper').fadeOut();
  });

});  
