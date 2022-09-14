
const hamburguer = document.getElementById('hamburguer')
const list = document.getElementById('list')

hamburguer.addEventListener('click',()=>{
    list.classList.toggle('active')
    hamburguer.classList.toggle('active')

    if (hamburguer.src.includes('images/icon-hamburger.svg')) {
        hamburguer.src = 'images/icon-close.svg'
    }else{
        hamburguer.src = 'images/icon-hamburger.svg'
    }
})