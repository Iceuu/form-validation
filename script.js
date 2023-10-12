/*const formEl = document.querySelector('#form');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    Validate();
});

function Validate() {
    const emailvalue = emailEl.value.trim();
    const passwordvalue = passwordEl.value.trim();

    if (emailvalue === '') {
        setError(emailEl, 'email is required')
    }
    else if (!ValidateEmail(emailvalue)) {
        setError(emailEl, 'please enter a valid email')
    }
    else {
        setSuccess(emailEl)
    }

    if (passwordvalue === '') {
        setError(passwordEl, 'password is required')
    }
    else if (passwordvalue.length < 8) {
        setError(passwordEl, 'password must be atleast 8 characters long')
    }
    else {
        setSuccess(passwordEl)
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

// function ValidateEmail(mail) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
//         return (true)
//     }
//     alert("You have entered an invalid email address!")
//     return (false)
// } */


function Validate() {

    event.preventDefault();

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let email = document.forms["myForm"]["email"].value;
    if (email == "" || !regEmail.test(email)) {
        alert('Please enter a valid e-mail address.');
        return false;
    }
    console.log(email);

    let password = document.forms["myForm"]["password"].value;
    if (password == "") {
        alert('Please enter your password');
        return false;
    }
    if (!regularExpression.test(password)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
    console.log(password);

    if (email == "iswarya@gmail.com" && password == "231277@ri") {
        window.location.assign("http://127.0.0.1:5501/linkedin.html")
        alert("login successfully");
    }
    else {
        alert("invalid information");
        return;
    }
}
























// function login_fun() {

//     //retriving data
//     var userName = document.getElementById("Username").value;
//     var nickName = document.getElementById("Nickname").value;
//     var password = document.getElementById("password").value;



//     //storing data -setitem
//     var user = localStorage.setItem("userName", userName);
//     console.log(localStorage.getItem("userName"));
//     var nick = localStorage.setItem("nickName", nickName);
//     console.log(localStorage.getItem("nickName"));
//     var pass = localStorage.setItem("password", password);
//     console.log(localStorage.getItem("password"));
// }

// function validate() {
//     window.open("http://127.0.0.1:5500/javascript.project/ticketbooking/booking.html");

//     event.preventDefault();

//     if (password === "") {
//         alert("enter username");
//         return false;
//     }
//     else {
//         alert("successs");
//         return;
//     }
// }
