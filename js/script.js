// for login

const defaultEmail = 'pola@gmail.com'
const defaultPassword = 'boropola'

document.getElementById('submit-btn').addEventListener('click',function(event){
    const email = document.getElementById('email');
    const password = document.getElementById('passcode');
    emailText = email.value;
    if(emailText === defaultEmail){
        if(password.value === defaultPassword){
            window.location.href = 'bank.html';
        }
        else{
            window.alert('please enter correct email and password');
        }
    }
    else{
        window.alert('please enter correct email and password');
    }
    email.value = '';
    password.value = '';
})
