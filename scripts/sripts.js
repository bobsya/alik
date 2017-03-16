$(function() {

	// Wait for window load
  $(document).ready(function() {
    $('a[data-index=1]').click();
  
                                                  //GSAP sprite animation
    var TL = new TimelineMax({repeat: -1, repeatDelay:-1});
            TL.to("#alikBench", 3,{backgroundPosition:"0 -14000px", ease:SteppedEase.config(56)});
            TL.set("#alikBench", {backgroundPosition:"0 0"});
            TL.to("#alikBench", 3,{backgroundPosition:"0 -14000px", ease:SteppedEase.config(56)
    });

    var owlScene = new TimelineMax({repeat: -1, repeatDelay:-1});
            owlScene.to("#owl", 0.5,{backgroundPosition:"-13200px 0", ease:SteppedEase.config(15)});
            owlScene.set("#owl", {backgroundPosition:"0 0"});

    var TL = new TimelineMax({repeat: -1, repeatDelay:-1});
            TL.to("#rubik_boy", 3,{backgroundPosition:"0 -48800px", ease:SteppedEase.config(61)});
            TL.set("#rubik_boy", {backgroundPosition:"0 0"});
            TL.to("#rubik_boy", 3,{backgroundPosition:"0 -48800px", ease:SteppedEase.config(61)
    });

    var TL = new TimelineMax({repeat: -1, repeatDelay:-1});
              TL.to("#wolf", 0.8,{backgroundPosition:"-38000px 0", ease:SteppedEase.config(19)});
              TL.set("#wolf", {backgroundPosition:"0 0"});
              TL.to("#wolf", 0.8,{backgroundPosition:"-38000px 0", ease:SteppedEase.config(19)
    });
                                                  //END GSAP sprite animation
  });

    
                                                

  require.config({
    paths: {
      shifty: "../bower_components/rekapi/dist/shifty.min",
      underscore: "../bower_components/rekapi/dist/lodash.min",
      rekapi: "../bower_components/rekapi/dist/rekapi"
    }
  });


	$(".se-pre-con").fadeOut("slow");


	if (isMobile()) {
		window.location = '/indexMobile.html';
	}
  $(window).resize(function() {
    if ($(window).width() <= '900'){
      window.location = '/indexMobile.html',
      $('.se-pre-con').css('display', 'none')
    } 
  });

	$("#fullpage").onepage_scroll({
		sectionContainer: "section",
		pagination: true,
		css3 : false
	});


  var a, b, c =null;
  $('.play').click(function(){
    $('a[data-index=2]').click();
    a = setTimeout( function() {
      $('a[data-index=3]').click();}, 5000
    );
    b = setTimeout( function() {
      $('a[data-index=4]').click();}, 10000
    );
    c = setTimeout( function() {
      $('a[data-index=5]').click();}, 20000
    );
  });

  $('a[data-index]').mouseup(function(){
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
  });


	// @TODO: Need refactoring!!! :)


	function init_animation() {
    if ($('.onepage-pagination a.active').data('index') == 1) {
            setTimeout( function(){
              $('.logo').removeClass("visibility-hidden")
              $(".logo").addClass("animated zoomIn")}, 2000
            );
            setTimeout( function(){
              $('#bg1 .contant_bg p').removeClass("visibility-hidden")
              $("#bg1 .contant_bg p").addClass("animated zoomIn")}, 2100
            );
            setTimeout( function(){
              $('.play').removeClass("visibility-hidden")
              $(".play").addClass("animated zoomIn")}, 2200
            );
            setTimeout( function(){
              $('.logo_soc').removeClass("visibility-hidden")
              $(".logo_soc").addClass("animated zoomIn")}, 2300
            );
    }
		if ($('.onepage-pagination a.active').data('index') == 2) {
       		setTimeout( function(){
       		  $('.b2_h1').removeClass("visibility-hidden")
              $(".b2_h1").addClass("zoomIn")}, 1500
            );
            setTimeout( function(){
              $('.b2_p').removeClass("visibility-hidden")
              $(".b2_p").addClass("zoomIn")}, 2500
            );
           $("#owl").addClass("owl");
           $("#leaves").addClass("leaves");
           

    //GSAP animation  
          TweenLite.set("#leaves", {left: "-400px", top: "-2300px"}); 
          TweenLite.to("#leaves", 1.5, {left: "1730px", top: "1250px"}); 

          TweenLite.set("#owl", {right: "-880px", top: "40%"}); 
          TweenLite.to("#owl", 4, {right: "100%", top: "90%"}); 

          
    //END GSAP animation
}
		if ($('.onepage-pagination a.active').data('index') == 3) {
       		setTimeout( function(){
       		  $('img.wolf_1').removeClass("visibility-hidden")
              $("img.wolf_1").addClass("fadeInLeft")}, 1450
            );
            setTimeout( function(){
              $('img.wolf_2').removeClass("visibility-hidden")
              $("img.wolf_2").addClass("fadeInLeft")}, 1550
            );
            setTimeout( function(){
              $('.b3_h1').removeClass("visibility-hidden")
              $(".b3_h1").addClass("zoomIn")}, 1950
            );
            setTimeout( function(){
              $('.b3_p').removeClass("visibility-hidden")
              $(".b3_p").addClass("zoomIn")}, 2150
            );
		}
		if ($('.onepage-pagination a.active').data('index') == 4) {
       		setTimeout( function(){
       		  $('.b4_h1').removeClass("visibility-hidden")
              $(".b4_h1").addClass("zoomIn")}, 2400
            );

          $("#wolf").addClass("wolf");

       	  setTimeout( function(){
              TweenLite.set("#medal", {right: "30%", top: "-25%"});
              TweenLite.to("#medal", 3, {right: "3%", top: "-7%"});
            },3900);
            setTimeout( function(){
              $('.b4_p').removeClass("visibility-hidden")
              $(".b4_p").addClass("zoomIn")}, 2700
            );
            setTimeout( function(){
              $('.b4_ul').removeClass("visibility-hidden")
              $(".b4_ul").addClass("zoomIn")}, 2700
            );
            setTimeout( function(){
              $('img#i_pad').removeClass("visibility-hidden")
              $("img#i_pad").addClass("fadeInUp")}, 3900
            );
            setTimeout( function(){
              $('img.medal').removeClass("visibility-hidden")
              $("img.medal").addClass("fadeIn")}, 3900
            );
            setTimeout( function(){
              $('.s1').removeClass("visibility-hidden")
              $(".s1").addClass("zoomIn")}, 5400
            );
            setTimeout( function(){
              $('.s2').removeClass("visibility-hidden")
              $(".s2").addClass("zoomIn")}, 6400
            );
            setTimeout( function(){
              $('.s3').removeClass("visibility-hidden")
              $(".s3").addClass("zoomIn")}, 7400
            );
            setTimeout( function(){
              $('.s4').removeClass("visibility-hidden")
              $(".s4").addClass("zoomIn")}, 8400
            );
  
            TweenLite.set("#wolf", {left: "-2000px", bottom: "-50%"});
            TweenLite.to("#wolf", 3, {left: "120%", bottom: "-10%"}); 
		}
		if ($('.onepage-pagination a.active').data('index') == 5) {
       		setTimeout( function(){
       		  $('.b5_logo').removeClass("visibility-hidden")
              $(".b5_logo").addClass("zoomIn")}, 2500
            );
            setTimeout( function(){
              $('.txt_five').removeClass("visibility-hidden")
              $(".txt_five").addClass("zoomIn")}, 3000
            );
            setTimeout( function(){
              $('.b5_soc').removeClass("visibility-hidden")
              $(".b5_soc").addClass("zoomIn")}, 3300
            );
            setTimeout( function(){
              $('.b5_ka').removeClass("visibility-hidden")
              $(".b5_ka").addClass("fadeInUp")}, 3700
            );
            setTimeout( function(){
              $('#bird_1').removeClass("visibility-hidden")
              $('#bird_2').removeClass("visibility-hidden")
            }, 1500
            );
          TweenLite.set("#bird_1", {top: "50%", marginRight: "80%"});
          TweenLite.to("#bird_1", 2, {top: "80%", marginRight: "50%"});

          TweenLite.set("#bird_2", {top: "-10%", right: "-130%"});
          TweenLite.to("#bird_2", 3, {top: "96%", right: "5%"});
		}
	}

  function reset_animation() {
      $("#leaves").removeClass("leaves"); 
      $(".b2_p").removeClass("zoomIn")
      $(".b2_h1").removeClass("zoomIn")
      $(".logo_soc").removeClass("animated zoomIn")
      $(".play").removeClass("animated zoomIn")
      $(".logo").removeClass("animated zoomIn")
      $("#bg1 .contant_bg p").removeClass("animated zoomIn")
      $("img.wolf_1").removeClass("fadeInLeft")
      $("img.wolf_2").removeClass("fadeInLeft")
      $(".b3_h1").removeClass("zoomIn")
      $(".b3_p").removeClass("zoomIn")
      $(".b4_h1").removeClass("zoomIn")
      $("#wolf").removeClass("wolf")
      $(".b4_p").removeClass("zoomIn")
      $(".b4_ul").removeClass("zoomIn")
      $("img#i_pad").removeClass("fadeInUp")
      $("img.medal").removeClass("fadeIn")
      $(".s1").removeClass("zoomIn")
      $(".s2").removeClass("zoomIn")       
      $(".s3").removeClass("zoomIn")       
      $(".s4").removeClass("zoomIn")
      $(".b5_logo").removeClass("zoomIn")
      $(".txt_five").removeClass("zoomIn")
      $(".b5_soc").removeClass("zoomIn")
      $(".b5_ka").removeClass("fadeInUp")
      setTimeout( function(){
        $('.logo').addClass("visibility-hidden")
        $('#bg1 .contant_bg p').addClass("visibility-hidden")
        $('.play').addClass("visibility-hidden")
        $('.logo_soc').addClass("visibility-hidden")
        $('.b2_h1').addClass("visibility-hidden")
        $('.b2_p').addClass("visibility-hidden")
        $('img.wolf_1').addClass("visibility-hidden")
        $('img.wolf_2').addClass("visibility-hidden")
        $('.b3_h1').addClass("visibility-hidden")
        $('.b3_p').addClass("visibility-hidden")
        $('.b4_h1').addClass("visibility-hidden")
        $('.b4_p').addClass("visibility-hidden")
        $('.b4_ul').addClass("visibility-hidden")
        $('img#i_pad').addClass("visibility-hidden")
        $('img.medal').addClass("visibility-hidden")
        $('.s1').addClass("visibility-hidden")
        $('.s2').addClass("visibility-hidden")
        $('.s3').addClass("visibility-hidden")
        $('.s4').addClass("visibility-hidden")
        $('.b5_logo').addClass("visibility-hidden")
        $('.txt_five').addClass("visibility-hidden")
        $('.b5_soc').addClass("visibility-hidden")
        $('.b5_ka').addClass("visibility-hidden")
        }, 1400
      );   
  }

  $( ".play" ).click(function() {
    ($('.onepage-pagination a.active').data('index') == 2)
  });
	$('.onepage-pagination a').click(function(){
    reset_animation();
		init_animation();
	});
	$(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      reset_animation();
     	init_animation();
    });

    if (bowser.safari && bowser.version >= 6) {
    	$('body').addClass('safari');
	};
	if (bowser.firefox && bowser.version >= 6) {
    	$('body').addClass('firefox');
	};
	if (bowser.opera && bowser.version >= 6) {
    	$('body').addClass('opera');
	};
	if (bowser.msie && bowser.version <= 11) {
    	$('body').addClass('msie');
	};
	
});
    //                 .setTween("#bird_2", 2, {top: "23%", right:"27%" })

function isMobile() { 
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	}
	return false;
};
