const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        })
    },
    {threshold:0.2}
);

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navContainer");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("open");
})

if(window.innerWidth<768){
    const navbtn = document.querySelector('.navItem');
    navbtn.onClick(()=>{
        nav.classList.toggle("open");
    })
}



document.querySelectorAll(".reveal").forEach(el => observer.observe(el));