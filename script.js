const navToggleBtnEl = document.querySelector(".navbar-toggle-btn"),
    navDropMenuEl = document.querySelector(".navbar-dropmenu"),
    navDropMenuContainerEl = document.querySelector(".navbar-container"),
    linksEl = document.querySelectorAll(".link"),
    navEl = document.querySelector("nav"),
    upBtnEl = document.querySelector(".up-btn"),
    navbarEl = document.querySelector(".navbar"),
    projectsContainerEl = document.querySelector(".projects-container"),
    contactLinksContainerEl = document.querySelector(".contact-links-container"),
    contactLinksLeftEl = document.querySelector(".contact-left"),
    contacLinksEl = document.querySelector(".contact-links"),
    submitBtn = document.querySelector(".submit-btn");
    
    
    // NAVBAR DROP MENU
let isDropMenuDown = false;


renderProjectList();


// set scrollRestoration manual when done..
window.addEventListener("beforeunload", function(){
    history.scrollRestoration = "manual";
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
    if(isDropMenuDown){
        isDropMenuDown = false;
        renderDropMenu();
    }
    const contactSectionHeight = this.document.getElementById("contact").offsetTop;
    // console.log((scrollHeight+ Math.floor(this.window.innerHeight/3)) + " / " + contactSectionHeight);
    if((scrollHeight+ Math.floor(this.window.innerHeight/2.9)) >= contactSectionHeight){
        contactLinksContainerEl.style.width = "auto";
    }else{
        contactLinksContainerEl.style.width = "0px";
        contactLinksOpen = false;
        contactLinksLeftEl.innerHTML = `<i class="fa-solid fa-angle-left"></i>`
        contacLinksEl.classList.remove("contact-links-expand")
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
        
        navDropMenuEl.style.transition = "all 0.2s";
        isDropMenuDown = false;
        renderDropMenu();
    });
})
navToggleBtnEl.addEventListener("click", function(){
    navDropMenuEl.style.transition = "all 0.2s linear"
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

async function getData(link, callback){
    fetch(link)
    .then(response => response.json())
    .then(jsonFormData => callback(jsonFormData));
}

async function renderProjectList(){
    
    getData("./project-list.json", (data) => {
        for(let i=0; i<data.length; i++){
            console.log(data[i].img);
            projectsContainerEl.innerHTML += `
                <article class="project-item center-column">
                <div class = "item-img-container">
                <img src="${data[i].img}" alt="${data[i].altImg}">
                <div class="img-wrap"><div class="wrap"></div></div>
                </div>
                    <h2 class="item-title">
                    ${data[i].name}
                </h2>
                <a href="${data[i].url}" class="item-link" target="_blank">
                    check it out!
                </a>
                <a href="${data[i].github}" class="item-link" target="_blank">
                    &ltcode&gt
                </a>
            </article>`
        }
    });
    
}

let contactLinksOpen = false;
contactLinksLeftEl.addEventListener("click", ()=>{
    
    if(!contactLinksOpen){
        contactLinksOpen = true;
        contactLinksLeftEl.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
        contacLinksEl.classList.add("contact-links-expand");
    }else{
        contactLinksOpen = false;
        contactLinksLeftEl.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
        contacLinksEl.classList.remove("contact-links-expand");
    }
});
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
})

