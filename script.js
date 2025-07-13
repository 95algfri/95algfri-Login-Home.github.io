const container = document.getElementById('container');
const RegisterBtn = document.getElementById('register');
const logintn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});