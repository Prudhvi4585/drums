
// for buttons
for( var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var buttonInnerHTML =this.innerHTML;
        makeSound(buttonInnerHTML);
    });

}
// for keys
document.addEventListener("keydown",function(event)
{
    var k = event.key;
    makeSound(k);
})




function makeSound(ch)
{
    switch (ch) {
        case "w":
            var crash =  new Audio("./crash.mp3");
            crash.play();
            
            break;
        case "a":
            var kickbass =  new Audio("./kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare =  new Audio("./snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 =  new Audio("./tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 =  new Audio("./tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 =  new Audio("./tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=  new Audio("./tom-4.mp3");
            tom4.play();
            break;
                               
    
        default:
            break;
    }

}

 

