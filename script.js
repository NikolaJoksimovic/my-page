const navToggleBtnEl = document.querySelector(".navbar-toggle-btn"),
    navDropMenuEl = document.querySelector(".navbar-dropmenu"),
    navDropMenuContainerEl = document.querySelector(".navbar-container"),
    linksEl = document.querySelectorAll(".link"),
    navEl = document.querySelector("nav"),
    upBtnEl = document.querySelector(".up-btn");

// NAVBAR DROP MENU
let isDropMenuDown = false;

window.addEventListener("scroll", function(){
    const scrollHeight = this.window.scrollY;
    const navHeight = navEl.clientHeight;
    if(scrollHeight > navHeight){
        navEl.classList.add("nav-fixed");
        navDropMenuContainerEl.classList.add("navbar-container-fixed");
    }else{
        navEl.classList.remove("nav-fixed");
        navDropMenuContainerEl.classList.remove("navbar-container-fixed");
    }
    if(scrollHeight > (this.window.innerHeight)/2){
        upBtnEl.classList.add("up-btn-show");
    }else{
        upBtnEl.classList.remove("up-btn-show");
    }
})

window.addEventListener("resize", function(){
    navDropMenuEl.style.transition = "all 0.0s"
    const setHeight = document.querySelector(".links").clientHeight;
    if(this.window.innerWidth <= 1280){
        renderDropMenu();
    }else{
        isDropMenuDown = false;
    }
})

linksEl.forEach(function(item){
    item.addEventListener("click", function(){
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

// FUNCIONAL BUTTONS

navToggleBtnEl.addEventListener("click", function(){
    navDropMenuEl.style.transition = "all 0.1s linear"
    isDropMenuDown = !isDropMenuDown;
    renderDropMenu();
})

upBtnEl.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
})