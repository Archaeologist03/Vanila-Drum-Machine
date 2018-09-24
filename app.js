// DOM Selection
const body = document.body;
const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");


// Keypress event for each corresponding key to play its sound
body.addEventListener("keypress", function(ev) {
    // Target element by id based on pressed key
    const audio = document.querySelector(`#${ev.key.toLowerCase()}`);

    // If id of pressed key exist audio is going to play
    if(audio) {
        audio.currentTime = 0;
        audio.play();
        audio.parentElement.classList.add("playing");
    } 
});


// Removing playing class from buttons when transtitonend even fires
btns.forEach(btn => {
    btn.addEventListener("transitionend", function(e) {
        btn.classList.remove("playing");
    })
})


// Click event for on container targeting children elements(buttons)
container.addEventListener("click", function(ev) {
    // If clicked element is type of audio - play it
    if (ev.target.firstElementChild.nodeName.toLowerCase() === "audio") {
        ev.target.firstElementChild.play();
    }
});



let giting = "git wasteful variable";


//just some git change..



// let q = document.querySelector("#q");
// let w = document.querySelector("#w");
// let e = document.querySelector("#e");
// let r = document.querySelector("#r");
// let t = document.querySelector("#t");
// let y = document.querySelector("#y");
// let u = document.querySelector("#u");
// let i = document.querySelector("#i");


// if (ev.which === 81 || ev.which === 113) {
    //     q.play();
    // } else if (ev.which === 87 || ev.which === 119) {
    //     w.play();
    // } else if (ev.which === 69 || ev.which === 101) {
    //     e.play();
    // } else if (ev.which === 82 || ev.which === 114) {
    //     r.play();
    // } else if (ev.which === 84 || ev.which === 116) {
    //     t.play();
    // } else if (ev.which === 89 || ev.which === 121) {
    //     y.play();
    // } else if (ev.which === 85 || ev.which === 117) {
    //     u.play();
    // } else if (ev.which === 73 || ev.which === 105) {
    //     i.play();
    // } 



// function keypressChange() {
//     q.parentElement.classList.add("keypress-change");
  

//    if (q.parentElement.classList.contains("keypress-change")) {
       
//         setTimeout(() => {
//             q.parentElement.classList.remove("keypress-change");
//         }, 500);
//    } 
// }