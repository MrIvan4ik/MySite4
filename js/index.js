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


  // function checkEmail(email) {
  //   if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
  //     contact.email = "Invalid"
  //   };
  // };
  function checkAll(arr) {
    if (arr.email.indexOf("@") == -1 || arr.email.indexOf(".") == -1) {
      arr.email = "Invalid"
    };
    if (arr.name.length < 3) {
      arr.name = "Invalid"
    }
    if (arr.text.length <= 10) {
      arr.text = "Invalid"
    }
  };
  checkAll(contact);
  alert(JSON.stringify(contact))
}
