document.addEventListener('scroll', ()=>{
    const nav = document.querySelector('.navbar');

    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
})



var menu = document.getElementById('hamBurger');
var items = document.getElementById('navMenu');

items.style.right = "-360px";

menu.onclick = () => {
    if(items.style.right == "-360px"){
        items.style.right = "0";
    }
    else{
        items.style.right = "-360px" ;
    }
}

