const headerContainer = document.querySelector('.header-container');
const headsetContainer = document.querySelector('.headset-image-container');
const headerLinks = document.querySelectorAll('li a');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const navList = document.querySelector('.nav-list');
function scrollHeader(headerlink,number){
    for(let i = 0;i < headerlink.length;i++){
        headerlink[i].classList.remove('nav-active');
    }
    headerlink[number].classList.add('nav-active');
}


window.addEventListener('scroll', function(){
    let scrolled;
    scrolled = window.scrollY;
    if (scrolled > 0 ){
        headerContainer.style.boxShadow = '3px 10px 6px -1px rgba(0,0,0,0.79)';
        headerContainer.style.backgroundColor = '#0F0F10';
    }else{
        headerContainer.style.boxShadow = 'none';
        headerContainer.style.background = 'none';
    }
    // <888,<1610,<2320,<3390
})

hamburger.addEventListener('click', function(){
    navList.style.display = 'block';
    gsap.fromTo('.nav-list',{y:-50},{duration:0.9,ease:"power2.out",y:1});
})

hamburgerClose.addEventListener('click',function(){
    gsap.fromTo('.nav-list',{y:0},{duration:0.6,y:-500});
});

for(let i = 0; i < headerLinks.length;i++){
    headerLinks[i].addEventListener('click', function(){
        for(let i = 0;i < headerLinks.length;i++){
            headerLinks[i].classList.remove('nav-active');
        }
        headerLinks[i].classList.add('nav-active');
    })
}

