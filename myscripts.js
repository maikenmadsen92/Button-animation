
var button = document.getElementById("button-click1")
var button2 = document.getElementById("button-click2")

button.addEventListener("click", function(){

    var icon = document.getElementById("iconForBuy");
    
    icon.style.display = "inline-block";
    icon.style.transition = "all 0.5s";

    button.style.transition = "all 0.5s";
    button.style.backgroundColor = "red";

    setTimeout(function(){ 
        
        icon.style.display = "none";
        button.style.backgroundColor = "#449D44";
        button.style.transition = "all 0.5s";
    
    
    }, 1000);

  });

  button2.addEventListener("click", function(){

    var icon2 = document.getElementById("iconForBuy2");
    icon2.style.display = "inline-block";
    icon2.style.webkitAnimation = "mynewmove 2s 1";

    button2.style.transition = "all 0.5s";
    button2.style.backgroundColor = "red";

    setTimeout(function(){ 
        
      icon2.style.display = "none";
      button2.style.backgroundColor = "#449D44";
      button2.style.transition = "all 0.5s";
  
  
    }, 1000);

  });