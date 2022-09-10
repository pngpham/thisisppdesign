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