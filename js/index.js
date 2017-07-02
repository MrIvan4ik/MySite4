function scrollTo(hash) {
    location.hash = hash;
};
window.onload = function () {
  document.getElementById("body").className = ""
  document.getElementById("preloader").className = "preloader-none"
};


function sendContact() {

  let contact = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    text: document.getElementById("text").value
  };


  function checkEmail(email) {
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      contact.email = "Invalid"
    };
  };
  checkEmail(contact.email);
  alert(JSON.stringify(contact))
}
