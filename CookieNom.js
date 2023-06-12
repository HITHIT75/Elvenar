<script type="text/javascript">

function setCookie(cname, cvalue, exdays) {
  document.getElementById("Chaine").innerHTML=  cvalue
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie() {
//document.getElementById("Chaine").innerHTML=  "attente cookie"
  let username = getCookie("Pseudo");
  if (username != "") {
   alert("Welcome again " + username);
   //document.getElementById("Chaine").innerHTML=  username
  } else {
    username = prompt("C'est ta première visite ? Merci de me donner ton pseudo de jeu ☺.", "");
    if (username != "" && username != null) {
      setCookie("Pseudo", username, 365);
      document.getElementById("Chaine").innerTxt=  username
    }
  }
}
</script>
