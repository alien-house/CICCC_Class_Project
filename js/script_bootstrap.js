
function btnLoginClicked(){
  var email = document.getElementById("inEmail").value;
  var passward = document.getElementById("inPassword").value;

  var resultEl = document.getElementById("result");

  if(email == 'info@alien-house.com' && passward == 123456){
    resultEl.innerHTML = "The user has logged in.";
    resultEl.className = "bg-success";
  }else{
    resultEl.innerHTML = "Incorrect email/passwords.";
    resultEl.className = "bg-danger";
  }
  

}
