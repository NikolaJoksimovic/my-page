const navToggleBtnEl = document.querySelector(".navbar-toggle-btn"),
    navDropMenuEl = document.querySelector(".navbar-dropmenu"),
    linksEl = document.querySelectorAll(".link");

// NAVBAR DROP MENU
let isDropMenuDown = false;
    
window.addEventListener("resize", function(e){
    navDropMenuEl.style.transition = "all 0.0s"
    const setHeight = document.querySelector(".links").clientHeight;
    if(this.window.innerWidth <= 1280){
        renderDropMenu();
    }else{
        isDropMenuDown = false;
    }
})

navToggleBtnEl.addEventListener("click", function(){
    navDropMenuEl.style.transition = "all 0.1s linear"
    isDropMenuDown = !isDropMenuDown;
    renderDropMenu();
})

linksEl.forEach(function(item){
    item.addEventListener("click", function(e){
        navDropMenuEl.style.transition = "all 0.0s";
        isDropMenuDown = false;
        renderDropMenu();
    })
})

function renderDropMenu(){
    const setHeight = document.querySelector(".links").clientHeight;
    if(isDropMenuDown){
        navDropMenuEl.style.height = `${setHeight}px`
    }else{
        navDropMenuEl.style.height = `0px`
    }
}
