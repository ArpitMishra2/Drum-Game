

                        //Detecting Button press;
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      var buttoninnerHTML = this.innerHTML;

      makesound(buttoninnerHTML);

      buttonAnimation(buttoninnerHTML);
      


    });
}
                     //we can also write in this way but we have always to change the numbers of buttons.
// for(var i = 0; i<8; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("I Got clicked");
//     });
// }

 
                        // Detecting keypress;
document.addEventListener("keydown", function(event){

     makesound(event.key);

     buttonAnimation(event.key);

})


function makesound(key){

      switch(key){       
      case "w": 
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

case "a":
      var audio1 = new Audio("tom-2.mp3")
      audio1.play();
      break;

case "s":
      var audio2 = new Audio("tom-3.mp3")
      audio2.play();
      break;

case "d":
      var audio3 = new Audio("tom-4.mp3")
      audio3.play();
      break;
case "j":
      var audio4 = new Audio("snare.mp3")
      audio4.play();
      break;
case "k":
      var audio5 = new Audio("crash.mp3")
      audio5.play();
      break;
case "l":
      var audio6 = new Audio("kick-bass.mp3")
      audio6.play();
      break;

      default: console.log(buttoninnerHTML);
}

}


function buttonAnimation(currentkey){
      var activeButton = document.querySelector("." + currentkey);
      activeButton.classList.add("pressed");

      setTimeout(function(){
            activeButton.classList.remove("pressed");
      
      }, 100);

}




