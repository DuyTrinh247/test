const modal = document.getElementById("Modal-login");

function start() {
  resetForm();
  modal.style.display = "block";
  loginForm.style.display = "block";
  forgotForm.style.display = "none";
  modalTitle.innerHTML = "Member Login";
}

function dong() {
  modal.style.display = "none";
}

var user = document.getElementById("Login-user-input");
var pass = document.getElementById("Login-pass-input");
var oldpass = "admin";
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetForm();
  }
};
function resetForm() {
  user.value = "";
  pass.value = "";
  inputOldpass.value = "";
  inputNewpass.value = "";
  document.getElementById("forgot-validate").innerHTML = "";
  document.getElementById("forgot-validate2").innerHTML = "";
  document.getElementById("forgot-validate3").innerHTML = "";
  document.getElementById("validate").innerHTML = "";
  document.getElementById("validate2").innerHTML = "";
  document.getElementById("validate3").innerHTML = "";
}
function clearValidate() {
  document.getElementById("forgot-validate").innerHTML = "";
  document.getElementById("forgot-validate2").innerHTML = "";
  document.getElementById("forgot-validate3").innerHTML = "";
  document.getElementById("validate").innerHTML = "";
  document.getElementById("validate2").innerHTML = "";
  document.getElementById("validate3").innerHTML = "";
}
function Login() {
  var userName = user.value;
  var password = pass.value;

  document.getElementById("validate").innerHTML = "";
  document.getElementById("validate2").innerHTML = "";
  document.getElementById("validate3").innerHTML = "";
  document.getElementById("validate3").style.color = "red";

  if (userName == "admin" && password == oldpass) {
    document.getElementById("btn1").innerHTML = "Đăng nhập thành công";

    modal.style.display = "none";
  } else if (userName == "" && password == "") {
    document.getElementById("validate2").innerHTML = "Bắt buộc nhập";
    document.getElementById("validate").innerHTML = "Bắt buộc nhập";
  } else if (userName == "") {
    document.getElementById("validate2").innerHTML = "Bắt buộc nhập";
  } else if (password == "") {
    document.getElementById("validate").innerHTML = "Bắt buộc nhập";
  } else if (userName != "admin") {
    document.getElementById("validate2").innerHTML = "Sai tài khoản";
  } else if (password != oldpass) {
    document.getElementById("validate").innerHTML = "Sai mật khẩu";
  }
}

function Loading() {
  document.getElementById("login-button").innerHTML =
    '<i class="fa fa-circle-o-notch fa-spin"></i>';
  setTimeout(function () {
    Login();
    document.getElementById("login-button").innerHTML = "Login";
  }, 500);
}
var forgotForm = document.getElementById("forgot-form");
var loginForm = document.getElementById("login-form");
modalTitle = document.getElementById("Login-heading");
function forgot() {
  resetForm();
  loginForm.style.display = "none";
  forgotForm.style.display = "block";
  modalTitle.innerHTML = "Change Password";
}
var inputOldpass = document.getElementById("user-input-oldpass");

var inputNewpass = document.getElementById("user-input-newpass");
function Save() {
  oldpassword = inputOldpass.value;
  newpassword = inputNewpass.value;
  if (oldpassword == "" && newpassword == "") {
    document.getElementById("forgot-validate2").innerHTML = "Bắt buộc nhập";
    document.getElementById("forgot-validate").innerHTML = "Bắt buộc nhập";
  } else if (oldpassword != oldpass) {
    document.getElementById("forgot-validate2").innerHTML =
      "Password không đúng";
    document.getElementById("forgot-validate").innerHTML = "";
  } else if (newpassword == "") {
    document.getElementById("forgot-validate2").innerHTML = "";
    document.getElementById("forgot-validate").innerHTML = "Điền mật khẩu mới";
  } else if (newpassword == oldpassword) {
    document.getElementById("forgot-validate2").innerHTML = "";
    document.getElementById("forgot-validate").innerHTML = "";
    document.getElementById("forgot-validate3").innerHTML =
      "Mật khẩu mới phải khác mật khẩu cũ";
  } else {
    oldpass = newpassword;
    document.getElementById("validate3").style.color = "green";
    document.getElementById("validate3").innerHTML =
      "Bạn đã đổi mật khẩu thành công";

    loginForm.style.display = "block";
    forgotForm.style.display = "none";
    modalTitle.innerHTML = "Member Login";
  }
}
