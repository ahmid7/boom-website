const headerContainer = document.querySelector('.header-container');
const headerLinks = document.querySelectorAll('li a');
function scrollHeader(headerlink,number){
    headerlink[number].classList.add('nav-active');
}


window.addEventListener('scroll', function(){
    let scrolled;
    scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled > 0 ){
        headerContainer.style.boxShadow = '3px 10px 6px -1px rgba(0,0,0,0.79)';
        headerContainer.style.backgroundColor = 'hsl(206,4%,6%)';
    }else{
        headerContainer.style.boxShadow = 'none';
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
