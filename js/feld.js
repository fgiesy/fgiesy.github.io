jQuery(document).ready(function($) {
  jQuery('.main-content').find('.accordion-trigger').click(function(){

    //Expand or collapse this panel
    $(this).parent().sibling('.accordion-content').addClass('accordion-expanded');

    //Hide the other panels
   

  });
});
