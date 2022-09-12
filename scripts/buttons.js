
const buttons = document.querySelectorAll('#article')
const contents = document.querySelectorAll('#content')

let addClass=(btn)=>{
    
    buttons.forEach(btn=>{
        btn.classList.remove('active')
    })
    contents.forEach(content =>{
        content.classList.remove('active')
    })

    buttons[btn].classList.add('active')
    contents[btn].classList.add('active')
}

buttons.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        addClass(i)
    })
})