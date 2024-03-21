const registerLink = document.getElementById('registerLink'); 
const registerForm = document.getElementById('registerForm');

console.log(registerLink);

registerLink.addEventListener('click', () => {
    alert('button clicked');
    registerForm.style.display = "block";
});

const registeredCustomers =[];

function register() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastName');
    let password = document.getElementById('password');

    let newCustomer = { 
        newCustomerfirstName: firstName,
        newCustomerlastName: lastName,
        newCustomerpassword: password,
    };

    registeredCustomers.push(newCustomer);
    alert(`New customer ${firstName} ${lastName}, has been registered`);
    

    clearForm(); // after registering
}

function clearForm() {
    let firstName = document.getElementById('firstName').value = '';
    let lastName = document.getElementById('lastName').value = '';
   let password =document.getElementById('password').value =''

}

function cancelRegister() {
    registerForm.style.display = "none";
}



const LoginButton = document.getElementById('LoginButton');
const LoginForm = document.getElementById('LoginForm');

LoginButton.addEventListener('click', () => {
    LoginForm.style.display = "block";
});

const users = [];

function Login() {
    let userName = document.getElementById('UserName').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;

    let newUser = {
        userName: userName,
        email: email,
        password: password
    };
    
    users.push(newUser);
    
    alert(`New User ${userName} ${email}, logged in`);
    clearForm();
}

function clearForm() {
    document.getElementById('UserName').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('password').value = '';
}

function cancelLogin() {
   
}






 




