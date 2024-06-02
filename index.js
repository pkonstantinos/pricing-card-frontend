function alertUser(){
  alert("Signing up is currently unavailable, please come back later.");
}

const btn = document.querySelector('button');

btn.onclick = alertUser;
