//아래에서 위로 화면 이동
setTimeout(function() {
		$('#portfolio_one_wrap').animate({"bottom":"0"},2000,"easeInOutQuint");
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

//자동차 이동
$(function(){
	$(".portfolio_one_image").mouseenter(function(){
		$(".car").removeClass("car_back_leave");
		$(".car").addClass("car_back");
	});

	$(".portfolio_one_image").mouseleave(function(){
		$(".car").removeClass("car_back");
		$(".car").addClass("car_back_leave");
	});
});