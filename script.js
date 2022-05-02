const navToggleBtnEl = document.querySelector(".navbar-toggle-btn"),
    navDropMenuEl = document.querySelector(".navbar-dropmenu"),
    navDropMenuContainerEl = document.querySelector(".navbar-container"),
    linksEl = document.querySelectorAll(".link"),
    navEl = document.querySelector("nav"),
    upBtnEl = document.querySelector(".up-btn"),
    navbarEl = document.querySelector(".navbar");
    
    
    // NAVBAR DROP MENU
let isDropMenuDown = false;

// set scrollRestoration manual when done..

window.addEventListener("beforeunload", function(){
    history.scrollRestoration = "auto";
    window.scrollTo(0,0);
})

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

linksEl.forEach(function(link){
    link.addEventListener("click", function(e){

        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let elementPosition = element.offsetTop;
        const navbarHeight = navbarEl.clientHeight;
        elementPosition === 0? elementPosition = 0 : elementPosition = elementPosition - navbarHeight; 
        document.documentElement.scrollTop = elementPosition;
        
        navDropMenuEl.style.transition = "all 0.1s";
        isDropMenuDown = false;
        renderDropMenu();
    });
})
navToggleBtnEl.addEventListener("click", function(){
    navDropMenuEl.style.transition = "all 0.1s linear"
    isDropMenuDown = !isDropMenuDown;
    renderDropMenu();
})

upBtnEl.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
})

function renderDropMenu(){
    const setHeight = document.querySelector(".links").clientHeight;
    if(isDropMenuDown){
        navDropMenuEl.style.height = `${setHeight}px`
    }else{
        navDropMenuEl.style.height = `0px`
    }
}


let obj = "a";
async function readProjectList(){
    fetch("./project-list.json")
    .then(res => res.json())
    .then(data => obj2 = data)
    .then(function(){
        console.log(obj2);
        obj = obj2;
    })
}
readProjectList();
renderProjects();

function renderProjects(){
    console.log(obj);
}