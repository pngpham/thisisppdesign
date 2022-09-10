window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
    document.getElementById("invitation").style.filter = "blur(5px)";
    document.getElementById("invitation").style.opacity = "0.2";
    }
  
  else {
    document.getElementById("invitation").style.filter = "none";
    document.getElementById("invitation").style.opacity = "1";
  }
}