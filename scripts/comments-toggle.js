
const comments = document.querySelectorAll('#comment-toggle')
const paragraphs = document.querySelectorAll('#paragraph')
const icons = document.querySelectorAll('.up')
const iconDowns = document.querySelectorAll('.down')

let addClassParagraph = (paragraph)=>{

    paragraphs.forEach(paragraph =>{
        paragraph.classList.remove('active')
    })

    icons.forEach(icon=>{
        icon.classList.remove('active')
    })

    iconDowns.forEach(icon=>{
        icon.classList.remove('close')
    })

    paragraphs[paragraph].classList.add('active')
    icons[paragraph].classList.add('active')
    iconDowns[paragraph].classList.add('close')
    
}

comments.forEach((comment,i)=>{
    comment.addEventListener('click',()=>{
        addClassParagraph(i)
    })
})