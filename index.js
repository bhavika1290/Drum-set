var arr = document.getElementsByClassName("drum")
for (var i =0 ; i < arr.length ; i++){
    arr[i].addEventListener("click" , function(event){
        makesound(this.innerHTML);
        addanimation(this.innerHTML);
    });
}



document.addEventListener("keypress" , function(event) {
   makesound(event.key);
   addanimation(event.key);
    }
)


function makesound(some){
    switch (some) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;
        
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();            
            break;

        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();            
            break;


        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();            
            break;


        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();            
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();            
            break;


        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();            
            break;



        
        default:
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;
}
}


function addanimation(currentkey){
    document.querySelector("."+ currentkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentkey).classList.remove("pressed")
    } , 300);
}