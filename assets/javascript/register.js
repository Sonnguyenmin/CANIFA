const btnLogin = document.getElementById('js-link-login');
const btnClose = document.getElementById('js-modal-close');
btnLogin.addEventListener('click', function (e) {
    window.location.href = "login.html";
})
btnClose.addEventListener('click', function (e) {
    window.location.href = "home.html";
})

