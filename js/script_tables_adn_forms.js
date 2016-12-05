
//関数定義式
var FormClickeds = function(){
  //window.alert("the licked!");
}

//関数宣言文
function FormClickeds(){
  //window.alert("the form has been clicked!");
}


function FormClicked(){
  var inEmail = document.getElementById("inEmail").value;
  var inPassword = document.getElementById("inPassword").value;
  // console.log(inEmail);
  // window.alert("Email:"+inEmail + " Pass:"+inPassword);

  if(inEmail == "info@alien-house.com" && inPassword == 123456 ){
    window.alert("The-user has logged in");
  }else {
    window.alert("Incorrent user/passward");
  }



}
