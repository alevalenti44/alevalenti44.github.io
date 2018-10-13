$(document).ready(function () {
    function startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        let hd = h;
        $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
        startTime();
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    $( "#solarSystem" ).dblclick(function() {
        window.open('js/solarSystem/index.html',"_self");
    });

    $( "#audioSpectrum" ).dblclick(function() {
        window.open("js/audioSpectrum/index.html","_self");
    });
    $( "#eightBall" ).dblclick(function() {
        window.open("https://github.com/alevalenti44/8ballwithreact","_self");
    });

    $( "#drumMachine" ).dblclick(function() {
        window.open("js/drumMachine/index.html", "_self");
    });

    $( "#threeText" ).dblclick(function() {
        window.open("js/threeText/index.html", "_self");
    });


});