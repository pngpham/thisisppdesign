function change_color() {
  var colorNav = "rgba";
  var colorFooter = "rgba";

  var gradientNav = "linear-gradient(to bottom, "
  var gradientFooter = "linear-gradient(to top, "
  var letters = ['(255,231,0,','(255,73,176,','(247,40,94,','(100,177,69,','(46,85,165,'];

  var randomizedColorNav = letters[Math.floor(Math.random()*letters.length)];
  var randomizedColorFooter = letters[(letters.indexOf(randomizedColorNav) + 1) % 5];

  colorNav += randomizedColorNav;
  colorFooter += randomizedColorFooter;

  gradientNav = gradientNav + colorNav + "1), " + colorNav + '0))'
  gradientFooter = gradientFooter + colorFooter + "1), " + colorFooter + '0))'

  document.getElementById('changeNav').style.background = gradientNav;
  document.getElementById('changeFooter').style.background = gradientFooter;
  document.getElementById('mobile-changeNav').style.background = gradientNav;
  document.getElementById('mobile-changeFooter').style.background = gradientFooter;

  console.log("change_color completed");
}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
};

window.onLoad = change_color()