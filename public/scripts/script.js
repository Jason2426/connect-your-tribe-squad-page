/* Mouse cursor js */

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

cursor2.style.getPropertyValue("--left-set");
cursor2.style.getPropertyValue("--top-set");

getComputedStyle(cursor2).getPropertyValue("--left-set")

document.addEventListener("mousemove", function(e) {
    cursor.style.setProperty = cursor2.style.setProperty("--left-set" + e.clientX + "px;") +
    ("--top-set", e.clientY + "px;");
});


// document.addEventListener("mousemove", function(e){
//     cursor.style.cssText = cursor2.style.cssText = "left:  " + e.clientX
//      + "px; top: " + e.clientY + "px;"; 
// });


// Play song function // 
function playSong() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }



