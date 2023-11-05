//Detect the Button Pressed

for (var i = 0; i <= 6; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick () {
    var buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}

//Detecting the Keyboard press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Making the sound

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default: console.log();
        
    }

}


//Animation

function buttonAnimation(currenKey) {
    var active = document.querySelector("." + currenKey);

    active.classList.add("pressed");

    setTimeout(function () {
        active.classList.remove("pressed");
    }, 300)
}