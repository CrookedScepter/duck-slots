//play button

var spinCounter = 0;
var jackpotCounter = 0;

document.querySelector("#play-button").addEventListener("click", function() {
    
    spinCounter = spinCounter + 1;
    document.querySelector("#spin-counter").innerHTML = spinCounter;

    document.querySelectorAll("img")[0].src = "./images/blank-white.jpg";
    document.querySelectorAll("img")[1].src = "./images/blank-white.jpg";
    document.querySelectorAll("img")[2].src = "./images/blank-white.jpg";

    document.querySelector("#slot-title").innerHTML = "Good luck!";

    setTimeout(function() {
        rollReel(0);
        reelClickSound.play();
    }, 100)

    setTimeout(function() {
        rollReel(1);
        reelClickSound.play();
    }, 400);
    
    setTimeout(function() {
        rollReel(2);
        reelClickSound.play();
    }, 700);

    setTimeout(function() {
        jackpotChecker();
        document.querySelector("#jackpot-percentage").innerHTML = Math.round((jackpotCounter / spinCounter) * 100);
    }, 900);

})




//image variables

var imageDefault = "https://www.thenookmall.com/cdn/shop/products/FtrDecoy_9c843dcb-5234-44cd-8655-b94dd2653589_256x.png?v=1705346987";
var imageOne = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r7ZRfNWou1k8HO7x6C9bf8513qiC0dQ6dg&s";
var imageTwo = "https://cdn.lospec.com/avatar/pixelbits4.png";
var imageThree = "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1808800/2f8837c82dc4e633e4146702500115d6f2c75560.jpg";
var imageFour = "https://streak.club/img/Mix1c2VyX2NvbnRlbnQvdXBsb2Fkcy9pbWFnZS83OTI4LmdpZg==/original/6i9v%2Bh.gif";




// image changing function

function rollReel(reelNumber) {
    
    var reelNumberRoll = Math.floor(Math.random() * 4);

    console.log(reelNumberRoll);

    if (reelNumberRoll === 0) {
        document.querySelectorAll("img")[reelNumber].src = imageOne;
    }

    if (reelNumberRoll === 1) {
        document.querySelectorAll("img")[reelNumber].src = imageTwo;
    }

    if (reelNumberRoll === 2) {
        document.querySelectorAll("img")[reelNumber].src = imageThree;
    }

    if (reelNumberRoll === 3) {
        document.querySelectorAll("img")[reelNumber].src = imageFour;
    }

}

function jackpotChecker() {

    if (document.querySelectorAll("img")[0].src === document.querySelectorAll("img")[1].src && document.querySelectorAll("img")[1].src === document.querySelectorAll("img")[2].src) {
        document.querySelector("#slot-title").innerHTML = "Jackpot! Lucky Duck!";
        jackpotSound.play();
        jackpotCounter = jackpotCounter + 1;
        document.querySelector("#jackpot-counter").innerHTML = jackpotCounter;
    } else {
        document.querySelector("#slot-title").innerHTML = "Try again.";
    }

}




//audio files

var reelClickSound = new Audio('./audio/reel-click.mp3');

var jackpotSound = new Audio('./audio/jackpot.mp3');