
function validation(){

    const form = document.getElementById('footer__content__contact__form')
    const email = document.getElementById('email').value
    const button = document.querySelector('.button')
    const text  = document.getElementById('text')
    const wrong = document.querySelector('.error')
    const input = document.querySelector('.email')
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = 'Email valid'
        text.style.color = '#3FD512'
        text.style.position = 'absolute'
        button.style.border = 'solid 2px #3FD512'
        button.style.color = '#3FD512'
        wrong.style.display = 'none'
        wrong.style.position = 'absolute'
        input.style.border = 'solid 2px #3FD512'
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = 'Email invalid'
        text.style.color = '#fa5757'
        text.style.position = 'absolute'
        button.style.border = 'solid 2px #fa5757'
        button.style.color = '#fa5757'
        wrong.style.display = 'block'
        wrong.style.position = 'absolute'
        input.style.border = 'solid 2px #fa5757'
    }

    if (email == "") {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ''
        text.style.color = '#6BFD00'
        button.style.border = 'none'
        wrong.style.display = 'none'
        button.style.color = '#5368df'
        input.style.border = 'none'
    }
}
