
let nav = document.querySelector('.header');
let title = document.querySelector('.xx');
let link = document.querySelectorAll('.menu-links');
let logop = document.querySelector('.logop');


console.log(link);
window.addEventListener('scroll', function(){
    // console.log('hiciste scroll', scrollY);
    if(scrollY > 0){
        title.classList.add('titulo');
        nav.classList.add('cambioNav');
        logop.classList.add('titulo');
        for(let i=0;i<=link.length;i++){
            // console.log(link[i]);
            link[i].classList.add('titulo');
        }
    }else{
        title.classList.remove('titulo');
        logop.classList.remove('titulo');
        nav.classList.remove('cambioNav')
        for(let i=0;i<=link.length;i++){
            // console.log(link[i]);
            link[i].classList.remove('titulo');
        }
    }
})