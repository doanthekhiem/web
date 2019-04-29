$(function() {
	/*noi dung thu lai*/
	/*xu li cho nut*/
	$('.to').click(function(event) {
		/* Act on the event */
		$('.kichvaovideo').addClass('noidunghienra');

	});
	$('.nho .col-sm-6').click(function(event) {
		/* Act on the event */
		$('.kichvaovideo').addClass('noidunghienra');
		
	});
	$('.nuttat').click(function(event) {
		/* Act on the event */
		$('.kichvaovideo').removeClass('noidunghienra');
	});
	$('.manden').click(function(event) {
		/* Act on the event */
		$('.kichvaovideo').removeClass('noidunghienra');
	});
	
});