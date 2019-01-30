var x = false;
$('.button').on('click', function () {
	if (!x) {
		$('.nav-title').velocity({
			display: "none"
		}, 0).velocity({
			opacity: "0"
		}, 0);
		$('.sidebar ul.nav li a .link-title').velocity({
			display: "none"
		}, 0);
		$('.content').toggleClass('expand');
		$('.sidebar').toggleClass('isClosed');
		x = true;
	} else {
		$('.nav-title').velocity({
			display: "inline"
		}, 00).velocity({
			opacity: "1"
		}, {
			delay: '200'
		});
		$('.sidebar ul.nav li a .link-title').velocity({
			opacity: "1",
			display: 'inline'
		}, {
			delay: '500',
			easing: "easeInBounce"
		});
		$('.content').toggleClass('expand');
		$('.sidebar').toggleClass('isClosed');
		x = false;
	}
});