const headerContainer = document.querySelector('.header-container');
const headsetContainer = document.querySelector('.headset-image-container');
const headerLinks = document.querySelectorAll('li a');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const navList = document.querySelector('.nav-list')
function scrollHeader(headerlink,number){
    headerlink[number].classList.add('nav-active');
}

window.addEventListener('scroll', function(){
    let scrolled;
    scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled > 0 ){
        headerContainer.style.boxShadow = '3px 10px 6px -1px rgba(0,0,0,0.79)';
        headerContainer.style.backgroundColor = '#0F0F10';
    }else{
        headerContainer.style.boxShadow = 'none';
        headerContainer.style.background = 'none';
    }
    for(let i = 0; i < headerLinks.length;i++){
        headerLinks.forEach(function(headerLink){
            headerLink.classList.remove('nav-active');
        })
        if(scrolled < 888){
            scrollHeader(headerLinks,0);
        }else if(scrolled < 1610){
            scrollHeader(headerLinks,1);
        }else if(scrolled < 2320){
            scrollHeader(headerLinks,2);
        }else if(scrolled < 3390){
            scrollHeader(headerLinks,3);
        }
    }
})

hamburger.addEventListener('click', function(){
    navList.style.display = 'block';
    gsap.fromTo('.nav-list',{y:-50},{duration:0.9,ease:"power2.out",y:1});
})

hamburgerClose.addEventListener('click',function(){
    gsap.fromTo('.nav-list',{y:0},{duration:0.6,y:-500});
});

