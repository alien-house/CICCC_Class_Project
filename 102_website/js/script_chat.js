$(function() {
  //define the server url
  var url = "http://api.ideiadoluiz.com.br/chat/code.php";
  //initialize the counter
  var varCounter = 0;
  // asks the user for his/her name
  var varName = prompt("What is your name?");


  //Listener
  $("#btnSend").click(function() {
    // if the message is empty, we leave the function.
    if($("#txtMessage").val() == ""){
      return;
    }

    // requst the server to save the message
    var request = $.post(url,{
      type: "send",
      name: varName,
      message: $("#txtMessage").val()
    });

    // if fail, we will alert the user
    request.fail(function(err){
      alert("error");
    });

    //we clean the message afterwards
    request.always(function(err){
      $("#txtMessage").val("");
    });

  })

  //forever loop in a thread
  setInterval(function(){
    var request = $.post(url,{
      type: "get",
      counter: varCounter
    });
    request.fail(function(err){
      alert("error");
    });
    request.done(function(data) {
      varCounter = data.lastCounter;
      var i = 0;
      while(i < data.messages.length){
        var message = data.messages[i].user + ":" + data.messages[i].value + "\n";
        //add to html
        $("#txtChat").append(message);
        // increment the cariable 'i'
        i = i + 1;
      }
      $("#txtChat").scrollTop($("#txtChat")[0].scrollHeight);
    });

  },1000);



});
