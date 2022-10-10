const inputUser = document.getElementById('password');
const infoLength = document.querySelector('.length')
const infoCapital = document.querySelector('.capital')
const infoUnique = document.querySelector('.unique')
const infoNumber = document.querySelector('.number')
const info = Array.from(document.querySelectorAll('.box input'))
const findCapital = /[A-Z]/;
const findNumber = /[0-9]/;
const findCharacter = /[!@#\$\~\^%\(\)*&\-\_\+\=\[\]\{\}\`\<\>\,\.\?\/\;\:\'\"]/
inputUser.addEventListener('input', function(e){
    if (findCapital.test(this.value)) {
        infoCapital.classList.add('ok')
    } else {
        infoCapital.classList.remove('ok')
    }
    
    if (findCharacter.test(this.value)) {
        // console.log('GOOD')
        infoUnique.classList.add('ok')
    } else {
        infoUnique.classList.remove('ok')
    }
    
    if (this.value.length >= 10) {
        // console.log("AMAZING")
        infoLength.classList.add('ok')
    } else {
        infoLength.classList.remove('ok')
    }
    
    if (findNumber.test(this.value)) {
        // console.log("NUMBER HERE")
        infoNumber.classList.add('ok')
    } else {
        infoNumber.classList.remove('ok')
    }
})