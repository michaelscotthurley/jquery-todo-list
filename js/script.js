$(document).ready(function() {

$('#newtask').on('submit', function(e) {
	e.preventDefault();
	var $newThing = $('#newtask input').val();
	if ($newThing != '') {
		$('#newtask input').val('');
		$('ul').append('<li>' + $newThing + '<img src="../images/remove.png" />' + '</li>')
	}
});

$('ul').on('click', 'li img', function() {
	console.log("You are removing this item")
	$(this).parent().remove();
});

$('ul').sortable();

});