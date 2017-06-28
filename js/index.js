function scrollTo(hash) {
    location.hash = hash;
}
window.onload = function () {
  document.getElementById("body").className = ""
  document.getElementById("preloader").className = "preloader-none"
}
