$(function(){
  // alert("");
  // $("#div1").slideUp();
  // $("#div2").slideDown();


  window.setInterval(function(){
    // $("#div2").stop().slideToggle();
  },1000);

  $("#div1").click(function(){
    $("#div2").stop().slideToggle();
  });

  $("#div2").click(function(){
    $(".div2child").animate({
        top: "80%",
        left: "90%"
      }, 2000, function() {
        $(this).css({top:"0",left:"0"});
    });
    // $(".div2child").css({"color":"blue"});
    // $(".div2child").css("color","red");
    // $(".div2child").toggle();
  });

});
