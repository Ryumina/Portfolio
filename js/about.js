//위에서 아래로 화면 이동
setTimeout(function() {
		$('#about_page_wrap').animate({"top":"0"},2000,"easeInOutQuint");
	});


//nav bar
$(document).ready(function () {
    $(document).on('click', '.block', function () {
        $(this).toggleClass('active')
    });
});

//nav
$(function(){
	var a=0;

	$(".block").click(function(){
		a++;
		a=a%2;

		if(a==1){
			$("#nav_wrap").animate().stop();
			$("#nav_wrap").animate({"bottom":"0"},2000,"easeOutBounce");
		}else{
			$("#nav_wrap").animate().stop();
			$("#nav_wrap").animate({"bottom":"-100vh"},1500,"easeInOutQuint");
		}
	});
});