

// short cut jquery
$(function(){
  // $("#result").addClass("bg-success");
  // $("#result").removeClass("bg-success");

  $("#btnLogin").click(function(){
    var email = $("#inEmail").val();
    var passward = $("#inPassword").val();
    var resultEl = $("#result");

    if(email == 'info@alien-house.com' && passward == 123456){
      // resultEl.text("The user has logged in.");
      resultEl.removeClass("bg-danger");
      resultEl.addClass("bg-success").html("The user has logged in.");
    }else{
      resultEl.removeClass("bg-success");
      resultEl.addClass("bg-danger").html("Incorrect email/passwords.");
    }
  });
});
