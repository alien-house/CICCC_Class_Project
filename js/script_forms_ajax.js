$(function() {

  var request;
  $("#mainForm").submit(function(e) {

    if(request){
      request.abort();//to get no crasy
    }

    var myData = $("#mainForm").find("input,textarea").serialize();
    //serialize:

    request = $.ajax({
      url:"http://api.ideiadoluiz.com.br/email/",
      method:"POST",
      // dataType:"jsonp",  // is corss domain
      // crossDomain: true,
      data:myData,
      // sucess:function(response) {
      //   alert("sucess");
      //   console.log("sucess");
      // },
      });
      request.done(function(response) {
        if(response.description == "success"){
          $("#result").html("Email Sent").addClass("bg-success");
        }else{
          $("#result").html(response.description).addClass("bg-danger");
        }
      });
      request.fail(function(err) {
        alert("fail");
      });
      // ,
      // error:function(err) {
      //   alert("error");
      // }
    e.preventDefault(); // avoid to execute the actual submit of the form.
    // return false;

  });

});
