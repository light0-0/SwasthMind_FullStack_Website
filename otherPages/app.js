let toggleTheme=document.querySelector(".checkbox");
let lightTheme=true;
let navbar=document.querySelector(".navbar")
toggleTheme.addEventListener("change",()=>{
    if(lightTheme===true)
    {
        navbar.style.backgroundcolor="white";
    }
});