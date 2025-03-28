function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Enter an Email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Enter a Password.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Enter Your Age.';
        msgBox.style.color = 'red'; 
    } else {
        message = 'Login Successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}