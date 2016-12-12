window.onload = function() {
	let scrollTop;
	let clientWidth;

	let lock = true;

	const animate = function() {
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(scrollTop > 80 && lock) {
			lock = false;
			$(".navbar-brand h1").css({
              background:'url(images/logo.png)',
              height:'60px',
              width:'356px'
	        }).parent().css({
	              // transform: "scale(0.6)"  /*rotate(360deg)*/
	        })
			$(".navbar").css({
				background: '#fff'
			})
			$('.navbar-brand').css({
				height: '60px',
				lineHeight: '60px'
			})
			$('.navbar-default .navbar-nav>li>a').css({
				height: '60px',
				lineHeight: '60px',
				color: '#088ad0'
			})
		} else if(scrollTop < 80 && !lock) {
			lock = true;
			$(".navbar").css({
				background: 'rgba(0,0,0,.0)'
			})
			$('.navbar-brand').css({
				height: '60px',
				lineHeight: '60px'
			})
			$(".navbar-brand h1").css({
              	background:'url(images/logo2.png)',
              	height:'60px',
              	width:'356px'
	        }).parent().css({
	              // transform: "scale(0.6)"  /*rotate(360deg)*/
	        })
			$('.navbar-default .navbar-nav>li>a').css({
				height: '60px',
				lineHeight: '60px',
				// fontWeight:'700',
				color: '#fff'
			})
		}
	}
	animate();
	if(document.documentElement.clientWidth < 766) {
		window.onscroll = null;
	} else {
		window.onscroll = animate;
	}
	window.onresize = function() {
		clientWidth = document.documentElement.clientWidth;
		if(clientWidth < 766) {
			console.log(111)
			window.onscroll = null;
		} else {
			console.log(222)
			window.onscroll = animate;
		}
	}
};