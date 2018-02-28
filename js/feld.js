jQuery(document).ready(function($) {
  jQuery('.main-content').find('.accordion-trigger').click(function(){

    //Expand or collapse this panel
    jQuery(this).next().slideToggle('fast');

    //Hide the other panels
    jQuery(".accordion-content").not($(this).next()).slideUp('fast');

  });
});
