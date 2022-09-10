window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
    document.getElementById("changeNav").style.height = "120px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("scrollButton1").style.opacity = "100%";
    document.getElementById("scrollButton2").style.opacity = "100%";
    document.getElementById("scrollButton3").style.opacity = "100%";
    }
  
  else {
    document.getElementById("changeNav").style.height = "0px";
    document.getElementById("logo").style.height = "calc(100vh - 60px)";
    document.getElementById("scrollButton1").style.opacity = "0%";
    document.getElementById("scrollButton2").style.opacity = "0%";
    document.getElementById("scrollButton3").style.opacity = "0%";
  }
}