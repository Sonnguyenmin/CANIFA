
const btnRegister = document.getElementById('js-btn-register');
const btnClose = document.getElementById('js-modal-close');
btnRegister.addEventListener('click', function (e) {
    window.location.href = "register.html";
})

btnClose.addEventListener('click', function (e) {
    window.location.href = "home.html";
})