
$(document).ready(function(){
	$('.size').click(function(){
		var count = 0;
		while (count < Math.int($(this.id))) {
			$('#ingredients').append('<input type="text" class="ingredientBox"></entry>');
			count++;
		}
	});
}
