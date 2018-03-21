jQuery(document).ready(function($) {
  
  //basic accordions
  jQuery('.main-content').find('.accordion-trigger, .hide-resume').click(function(){
    //Expand or collapse this panel
    $(this).toggleClass('accordion-trigger-active');
    $(this).parent().siblings('.accordion-content').toggleClass('accordion-expanded');
    //Hide the other panels

  });
  
  //hiding resume
  jQuery('.hide-resume').click(function(){
    $('.resume-accordion').removeClass('accordion-expanded');
  });

});
