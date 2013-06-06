$(document).ready(function() {

 $(function() {
    var availableTags = [
      "Apples",
      "Acorns",
      "Asparagus",
      "Bananas",
      "Cucumbers",
      "Celery",
      "Corn",
      "Chives",
      "Coream",
      "Eggs",
      "Fruit",
      "Grapes",
      "Hash",
      "Java",
      "Jam",
      "Lemons",
      "Beer",
      "Charcoal",
      "Vodka",
      "Rum",
      "Ice Cream",
      "Peppers"
    ];
    $( "#textfield" ).autocomplete({
      source: availableTags
    });
  });

$(function() {
    $( "#ShopStart" ).selectable();
  });

    $('#submit').on('click',function(){
	var newItem = $('#textfield').val();
	newItem = '<p class = "ShoppingItem">'+ newItem + '</p>'
		$(newItem).insertAfter('#ShopStart');
	$('#textfield').val("");	
	});	
	
	$('#ShoppingList').on('click','p',function() {
		$(this).toggleClass('highlight');
		var self = this;
		setTimeout(function() {
			console.log("time works");
			$(self).remove();
			}, 700);
	});


});
