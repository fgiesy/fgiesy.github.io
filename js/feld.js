$(document).ready(function($) {
  $('.main-content').find('.accordion-trigger').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

  });
});
