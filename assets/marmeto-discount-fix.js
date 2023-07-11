/*===============================================
		   DISCOUNT FIX BY MARMETO

#Block default event 
  - Add a custom event on applying discount
  - Add a custom event on discount removal
===============================================*/ 

$(document).ready(function() {
  var discountButton = $('form [data-trekkie-id="apply_discount_button"]');
  var discountForm = $(discountButton).closest('form');
  $(discountForm).append("<span class='invalid-promo' style='color:#ff0000;'></span>");

  $(discountButton).on('click', function(e){
    e.preventDefault();
    var self = $(this);    
    var closestForm = self.closest('form');
    var submitUrl = self.closest('form').attr('action');
    
    self.addClass("btn--loading");
    $.ajax({
      url: submitUrl,
      type: 'post',
      data: closestForm.serialize(),
      success: function(response) {
        self.removeClass("btn--loading");
        var result = $(response).find("#error-for-reduction_code");
        if((result.length) > 0) {
          var invalidPromo = result.html();
          self.closest('form').find('.invalid-promo').html(invalidPromo);
        }
        else {
          location.reload();
        }
      }
    })
  });

  $('.tags-list .tag__wrapper .tag__button').on('click', function(e) {
    e.preventDefault();    
    var formTag = $(this).closest('form');
    var tagUrl = $(formTag).attr("action");
    
    $('form [data-trekkie-id="apply_discount_button"]').addClass("btn--loading");
    $.ajax({
      url: tagUrl,
      type: 'post',
      data: formTag.serialize(),
      success: function(response) {
        location.reload();
      }
    })
  });
  
  var discountInput = $('input[name="checkout[reduction_code]"]'); 
  discountInput.on('click', function(e) {
  	e.preventDefault();
    
    var self = $(this);
    self.closest('form').find('.invalid-promo').html('');
  })
});