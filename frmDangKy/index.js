const btnSignIn = document.querySelector('#sigin-new--onclick')
const signIn = document.querySelector('#signinform--hide')

btnSignIn.addEventListener('click', () => {
    if(signIn.classList.contains('d-none'))
        signIn.classList.remove("d-none")
    else signIn.classList.add("d-none")
})


const btnSignUP = document.querySelector('#signup-new--onclick')
const signUP = document.querySelector('#signupform--hide')

btnSignUP.addEventListener('click', () => {
    if(signUP.classList.contains('d-none'))
        signUP.classList.remove("d-none")
    else signUP.classList.add("d-none")
})