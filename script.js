//Getting DOM BTNs
const signUpBtn = document.querySelector(".signUpBtn");


// Getting INPUt Values

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const conPasswordInput = document.getElementById("conPasswordInput");
const signUpHeader = document.querySelector(".signup")
const profileHeader = document.querySelector(".profile")

// Error and Success divs
const error = document.querySelector(".error");
const Cerror = document.querySelector(".Cont-error");
const Success = document.querySelector(".success");
const emailError = document.querySelector(".email-incorrect");
// Listening to the signup btn
signUpBtn.addEventListener("click", () => handleSignUp());

// Sign up btn handler
function handleSignUp() {

    // checking validities of form
    if (nameInput.value && emailInput.value && passwordInput.value && conPasswordInput.value) {
        error.style.display = "none";

    } else {
        error.style.display = "block";
        return;
    }

    if (validateEmail(emailInput.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        return;
    }


    if (passwordInput.value !== conPasswordInput.value) {
        Cerror.style.display = 'block';
        return;
    }
    if (passwordInput.value === conPasswordInput.value) {
        Cerror.style.display = 'none';
    }

    // generating ramdon 16 degit access token
    let accessToken = Math.floor(Math.random() * 10000000000000000);

    // Createing User Details Obj
    let userDetails = {
        nam: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }

    // Setting the user details in local storage
    localStorage.setItem("accessToken", accessToken);
    // localStorage.setItem("nam", nameInput.value);
    // localStorage.setItem("email", emailInput.value);
    // localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // redirecting the user to profile page
    window.location.href = "profile.html"

    // removing unnessasary event listerns
    signUpBtn.removeEventListener("click", handleSignUp, true);
    profileHeader.removeEventListener("click", _listener, true);
    signUpHeader.removeEventListener("click", _listener, true);
}

// Adding functionality to the header profile btn
profileHeader.addEventListener("click", () => {
    if (localStorage.getItem("accessToken")) {
        window.location.href = "profile.html"
    } else {
        alert("Sign Up Required!")
    }
});


// Adding functionality to the header signup btn
signUpHeader.addEventListener("click", () => {
    location.reload();
});

// checking validity  of email adress
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};