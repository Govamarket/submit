const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("psw1");
const confirmPasswordInput = document.getElementById("psw2");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const form = document.getElementById("form");

//  Error messages
const nameInputErrorMsg = document.getElementById("errorp");
const lessThanErrorMsg = document.getElementById("error1");

// Email error messages
const emailErrorMsg = document.getElementById("error2");
const emailVerifyMsg = document.getElementById("error8");

// Password error messages
const passwordErrorMsg = document.getElementById("error3");
const lessErrorMsg = document.getElementById("er");

// ConfirmPassword error messages
const confirmPasswordErrorMsg = document.getElementById("error4");
const doesNotMatchErrorMsg = document.getElementById("mt");
const lessThanPasswordErrorMsg = document.getElementById("er1");
const nameInputValidation = () => {
  if (nameInput.value == "") {
    nameInputErrorMsg.style.display = "flex";
  } else if (nameInput.value.length < 3) {
    lessThanErrorMsg.style.display = "flex";
    nameInputErrorMsg.style.display = "none";
  } else {
    nameInputErrorMsg.style.display = "none";
    lessThanErrorMsg.style.display = "none";
  }

  if (emailInput.value == "") {
    emailErrorMsg.style.display = "flex";
  } else if (!emailInput.value.match(validRegex)) {
    emailVerifyMsg.style.display = "flex";
    emailErrorMsg.style.display = "none";
  } else {
    emailVerifyMsg.style.display = "none";
    emailErrorMsg.style.display = "none";
  }

  if (passwordInput.value == "") {
    passwordErrorMsg.style.display = "flex";
  } else if (passwordInput.value.length < 5) {
    lessErrorMsg.style.display = "flex";
    passwordErrorMsg.style.display = "none";
  } else {
    lessErrorMsg.style.display = "none";
    passwordErrorMsg.style.display = "none";
  }

  if (confirmPasswordInput.value == "") {
    confirmPasswordErrorMsg.style.display = "flex";

  }else if (confirmPasswordInput.value.length < 5) {
    lessThanPasswordErrorMsg.style.display = "flex";
    confirmPasswordErrorMsg.style.display = "none";
  }else if (!confirmPasswordInput.value.match(passwordInput.value)) {
    doesNotMatchErrorMsg.style.display = "flex";
    lessThanPasswordErrorMsg.style.display = "none";
  }else{
    confirmPasswordErrorMsg.style.display = "none";
    doesNotMatchErrorMsg.style.display = "none";
    lessThanPasswordErrorMsg.style.display = "none";
  }
};

const submitForm = (event) => {
  event.preventDefault();
  nameInputValidation();
};
