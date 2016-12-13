$(function(){
  $.ajax({
    url:"http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
    // url:"http://api.ideiadoluiz.com.br/postit",




    crossDomain: true,
    dataType: 'json',
    success: function(res) {
      // alert("success"+res);
      // alert(res.locations[0].location);
      //i iterate
      var i = 0;
      // while(i < res.locations.length){
      //   var myLocation = res.locations[i];
      //   var myHtml = "<tr><td>" + myLocation.id +
      //                 "</td><td>" + myLocation.location +
      //                 "</td></tr>";
      //   $("#tableLocationBody").append(myHtml);
      //   i = i + 1;
      // }

      while(i < res.roles.length){
        var myLocation = res.roles[i];
        var myHtml = "<tr><td>" + myLocation.id +
                      "</td><td>" + myLocation.role +
                      "</td></tr>";
        $("#tableLocationBody").append(myHtml);
        i = i + 1;
      }





      // for (var i = 0; i < res.locations.length; i++) {
      //   console.log(res.locations[i]);
      // }

    },
    //Data Saved
    done: function(response){
      alert("done");
    },
    error: function(err){
      alert("error: " + err);
    }
  })
});
