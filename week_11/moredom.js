// function changeColor() {
//     let elements = document.getElementsByClassName("highlight");
//     for (let i = 0; i < elements.length; i++){
//         elements[i].style.color = "red";
//     } 
// }

// function changeFont() {
//     let elements = document.getElementsByTagName("p");
//     for (let i = 0; i < 2; i++) {
//         elements[i].style.fontSize = "100px";
//     }
// }

// function shouldntDoThat() {
//     let button = document.getElementById("dontclick");
//     button.style.display = "none";
// }

function changeText() {
    let firstHighlight = document.querySelector(".highlight");
    firstHighlight.innerText = "Text Changed";
}

function changeColors() {
    let elements = document.querySelectorAll(".highlight");
    elements.forEach (el =>{
        el.style.color = "blue";
    })  
}