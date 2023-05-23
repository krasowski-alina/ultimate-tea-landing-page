const nav = document.getElementById('nav')
const btns = document.querySelectorAll('.toggle')

btns.forEach(btn => {
    btn.addEventListener("click", ()=> {
        nav.classList.toggle('open-nav')
    })
})