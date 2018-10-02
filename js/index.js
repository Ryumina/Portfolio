
//3초 뒤에 로딩화면 사라짐 + 글씨 순서대로 사라짐
setTimeout(function() {
		$('.one').css({"opacity":"0"},200,"linear");
		$('.two').css({"opacity":"0"},200,"linear");
		$('.three').css({"opacity":"0"},200,"linear");
		$('.four').css({"opacity":"0"},200,"linear");
		$('.five').css({"opacity":"0"},200,"linear");
		$('.six').css({"opacity":"0"},200,"linear");
		$('.seven').css({"opacity":"0"},200,"linear");
		$('.content').css({"left":"100vw"});
	},3000);

//nav bar
$(document).ready(function () {
    $(document).on('click', '.block', function () {
        $(this).toggleClass('active')
    })
});