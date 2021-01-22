window.addEventListener("wheel", function () {
	event.preventDefault()
}, {
	passive: false
})
document.querySelectorAll(".page").forEach(function (page, key) {
	page.addEventListener("wheel", wheelFn, {
		passive: false
	}) // event.preventDefault()할때 같이 사용해야함
}); //console.log(event)  addEventListener 에서 event는 wheel를 말하고 wheel안에있는 모든 값을 알수있다. 	
function wheelFn() {
	event.preventDefault() // 이벤트의 기본 기능을 막는 것
	event.stopPropagation();
	var hei = $(window).innerHeight();
	var delta = event.deltaY;
	var posY = event.pageY;
	var n = Math.floor(posY / hei);
	var tar = 0;
	var pageCnt = $(".page").length; //4
	if (delta > 0) {
		//아래로 휠
		if (n < pageCnt - 1) wheelAni((n + 1) * hei);
	} else {
		//위로 휠
		if (n > 0) wheelAni((n - 1) * hei);
	}
	}
	console.log(delta, hei, event.pageY, n)

	function wheelAni(pos) {
		console.log(pos)
		$("html, body").stop().animate({
			"scrollTop": pos
		}, 300) //상단에 있을때 화면이 내려가면서 가려진 부분이 scrollTop 값이다
	}
