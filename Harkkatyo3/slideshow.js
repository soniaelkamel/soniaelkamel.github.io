window.onload = function () {
    var information = null;
    var x = null;
    if(localStorage.getItem("log") === null) {
        var currentSlide = 0;
    }
    
    else {
        
        currentSlide = localStorage.getItem("log");
    }
    
    $.getJSON("https://elkams1-4fc54.firebaseio.com/.json", function (data) {
        console.log(data);
        information = data;
    });

    function showSlide(n) {
        $("#news").html(information.uutiset[n].otsikko + "<br>" + information.uutiset[n].sisältö + "<br>" + information.uutiset[n].päivämäärä);
    }
    
    
    function previousSlide() {
          if(currentSlide == 2 || currentSlide == 1) {
            currentSlide --;
        }
        else {
            currentSlide = 2;
        }
        console.log(currentSlide);
        $( "#news" ).effect( "shake" );
        showSlide(currentSlide);
        localStorage.setItem("log", currentSlide-1);

    }
    
    function nextSlide() {
        if(currentSlide <= 1) {
            currentSlide ++; 
        }
        else {
            currentSlide = 0;
        }
        console.log(currentSlide);
        $( "#news" ).effect( "shake" );
        showSlide(currentSlide);
        localStorage.setItem("log", currentSlide);
      
    }
    var intervalli = setInterval(nextSlide, 6000);

    function pause() {
        clearInterval(intervalli);
        console.log("nappulaa on painettu");
        clearTimeout(x);
    }
    
    function play() {
        intervalli = setInterval(nextSlide, 6000);
    }
  
    document.getElementById("forward").addEventListener("click", function () {
         nextSlide();
         pause();
    });
    
    document.getElementById("pause").addEventListener("click", function () {
        pause();
    });
    
    document.getElementById("play").addEventListener("click", function () {
        play();
    });
    
    document.getElementById("back").addEventListener("click", function () {
        previousSlide();
        pause();
    });
};