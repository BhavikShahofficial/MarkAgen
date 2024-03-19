// loader

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};



// sidenav

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change")
});


// scroll top-up

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });