jQuery(document).ready(function($) {
  jQuery('.main-content').find('.accordion-trigger').click(function(){

    //Expand or collapse this panel
    $(this).parent().siblings('.accordion-content').addClass('accordion-expanded');

    //Hide the other panels
    $(!this).parent().siblings('.accordion-content').removeClass('accordion-expanded');

  });
});
