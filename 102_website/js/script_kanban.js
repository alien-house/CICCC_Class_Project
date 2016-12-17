$(function() {

  // $("#tdTODO").load("http://localhost/postit/?bgColor=0080ff&strkColor=000000&txtColor=FFFFFF&desc=Example");
  // $("#tdTODO").load("http://api.ideiadoluiz.com.br/postit/?bgColor=0080ff&strkColor=000000&txtColor=FFFFFF");
  // $("#tdInProgress").load("http://localhost/postit/?bgColor=ff0000&strkColor=000000&txtColor=FFFFFF&desc=Example");
  // $("#tdDone").load("http://localhost/postit/?desc=Example&title=tttt");
  // $("#tdImpediments").load("http://localhost/postit/?desc=HOHOHOHOO");
  //

  var url = "http://localhost/postit/";
  var url = "http://api.ideiadoluiz.com.br/postit/";

 // $.ajax({
 //    url:"http://localhost/postit/",
 //    // url:"http://localhost/postit/?bgColor=0080ff&strkColor=000000&txtColor=FFFFFF&desc=Example",
 //    // url:"http://api.ideiadoluiz.com.br/email/?email=info@alien-house.com&comments=helloluiz&contactName=sin&to=luiz_peres10@hotmail.com",
 //    dataType: "xml",
 //    // cache: false,
 //    success: function(response) {
 //      // $("#tdTODO").append($(response.activeElement));
 //        // var node = document.importNode(response.documentElement, true);
 //        // $("#tdTODO").append(node);
 //    },
 //    done: function(response) {
 //      var node = document.importNode(response.documentElement, true);
 //      $("#tdTODO").append(node);
 //    },
 //    error: function(err){
 //      alert("error");
 //    }
 //  });



  // $.ajax(url).done(function(response) {
  //   var node = document.importNode(response.documentElement, true);
  //   $("#tdTODO").append(node);
  // });

  // $.ajax(url + "?title=Number1").done(function(response) {
  //   var node = document.importNode(response.documentElement, true);
  //   $("#tdTODO").append(node);
  // });
  //
  // $.ajax(url + "?desc=fafafafa").done(function(response) {
  //   var node = document.importNode(response.documentElement, true);
  //   $("#tdInProgress").append(node);
  // });
  //
  // $.ajax(url + "?bgColor=ff0000").done(function(response) {
  //   var node = document.importNode(response.documentElement, true);
  //   $("#tdTODO").append(node);
  // });


  // no.01
  var arr = [
    url,
    url+ "?title=Number1",
    url+ "?title=tsetesstest"
  ];
  for (var i = 0; i < arr.length; i++) {
    $.ajax(arr[i]).done(function(response) {
      var node = document.importNode(response.documentElement, true);
      $("#tdTODO").append(node);
    });
  }

  // no.02
  var postArray = [
    ["ff0000","tdTODO"],
    ["ffffff","tdImpediments"],
    ["ffffcc","tdDone"]
  ];
  for (var i = 0; i < postArray.length; i++) {
    // console.log(postArray[i][0]);
    // postit(postArray[i][0],postArray[i][1]);
  }

  // postit("ff0000","tdTODO");
  // postit("ffffff","tdImpediments");
  // postit("ffffcc","tdDone");

  function postit(bgColor,id){
    $.ajax(url + "?bgColor="+bgColor).done(function(response) {
      var node = document.importNode(response.documentElement, true);
      $("#"+id).append(node);
    });
  }



});
