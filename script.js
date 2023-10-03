let scrollcont= document.querySelector(".gallary");
let backbtn= document.getElementById("backbtn");
let nextbtn= document.getElementById("nextbtn");

scrollcont.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollcont.scrollLeft += evt.deltaY;
    scrollcont.style.scrollBehavior = "auto";
})

nextbtn.addEventListener("click", () =>{
    scrollcont.style.scrollBehavior = "smooth";
    scrollcont.scrollLeft += 900;
})
backbtn.addEventListener("click", () =>{
    scrollcont.style.scrollBehavior = "smooth";
    scrollcont.scrollLeft -= 900;
})