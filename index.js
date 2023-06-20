var elem = document.getElementsByClassName("btn");
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(){
        playSound(this.textContent);
        playAnimation(this.textContent);
      });
    }

    document.addEventListener("keydown", function(event){
      // console.log(event);
      playSound(event.key);
      playAnimation(event.key);
    });
    
    function playSound(letter){
      switch(letter){
        case "w" : 
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;

        case "a" : 
          var kickBass = new Audio("./sounds/kick-bass.mp3");
          kickBass.play();
          break;

        case "s" :
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;

        case "d" : 
          var tom_1 = new Audio("./sounds/tom-1.mp3");
          tom_1.play();
          break;

        case "j" : 
          var tom_2 = new Audio("./sounds/tom-2.mp3");
          tom_2.play();
          break;

        case "k" : 
          var tom_3 = new Audio("./sounds/tom-3.mp3");
          tom_3.play();
          break;

        case "l" : 
          var tom_4 = new Audio("./sounds/tom-4.mp3");
          tom_4.play();
          break;

        default :   
          console.log("Unknown event !");
      }
    }

    function playAnimation(currentKey){
      var key = document.querySelector("." + currentKey);
      key.classList.add("pressed");
      setTimeout(() => {
        key.classList.remove("pressed");
      }, 100);
    }
