const navToggleBtnEl = document.querySelector(".navbar-toggle-btn");
let navDropMenuEl = document.querySelector(".navbar-dropmenu");

    
navToggleBtnEl.addEventListener("click", function(){
    const setHeight = document.querySelector(".links").clientHeight;
    const dropMenuCurrentHeight = navDropMenuEl.clientHeight;
    if(dropMenuCurrentHeight === 0){
        navDropMenuEl.style.height = `${setHeight}px`
    }else{
        navDropMenuEl.style.height = `0px`
    }
})
window.addEventListener("resize", function(e){
    const setHeight = document.querySelector(".links").clientHeight;
    if(this.window.innerWidth <= 1280 && navDropMenuEl.clientHeight !== 0){
        navDropMenuEl.style.height = `${setHeight}px`
    }
})