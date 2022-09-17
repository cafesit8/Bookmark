
const comments = document.querySelectorAll('#comment-toggle')
const paragraphs = document.querySelectorAll('#paragraph')
const icons = document.querySelectorAll('.up')
const iconDowns = document.querySelectorAll('.down')

let addClassParagraph = (paragraph)=>{

    paragraphs[paragraph].classList.toggle('active')
    icons[paragraph].classList.toggle('active')
    iconDowns[paragraph].classList.toggle('close')
    
}

comments.forEach((comment,i)=>{
    comment.addEventListener('click',()=>{
        addClassParagraph(i)
    })
})