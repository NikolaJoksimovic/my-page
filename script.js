const navToggleBtnEl = document.querySelector(".navbar-toggle-btn");
const navDropMenuEl = document.querySelector(".navbar-dropmenu");
let isDropMenuDown = false;
    
navToggleBtnEl.addEventListener("click", function(){
    navDropMenuEl.style.transition = "all 0.1s linear"
    isDropMenuDown = !isDropMenuDown;
    const setHeight = document.querySelector(".links").clientHeight;
    
    if(isDropMenuDown){
        navDropMenuEl.style.height = `${setHeight}px`
    }else{
        navDropMenuEl.style.height = `0px`
    }
})

window.addEventListener("resize", function(e){
    navDropMenuEl.style.transition = "all 0.0s"
    const setHeight = document.querySelector(".links").clientHeight;
    if(this.window.innerWidth <= 1280 && isDropMenuDown){
        navDropMenuEl.style.height = `${setHeight}px`
    }else{
        isDropMenuDown = false;
        navDropMenuEl.style.height = `0px`
    }
})

