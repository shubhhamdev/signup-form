// DOM elements
const nameEle = document.querySelector(".full-name");
const emailEle = document.querySelector(".email");
const passwordEle = document.querySelector(".password");
const logOutBtn = document.querySelector(".log-out");
const signUpHeader = document.querySelector(".signup")
const profileHeader = document.querySelector(".profile")

// Getting info from local storage
let nam;
let email;
let password;

// Getting the elements from the local storage with additional check
if (localStorage.getItem("accessToken")) {
    // Getting user details OBJ
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log(userDetails)
    nam = userDetails.nam;
    email = userDetails.email;
    password = userDetails.password;
    updateInfo();
} else {
    window.location.href = "../index.html";
}


// Updating information on UI
function updateInfo() {
    nameEle.innerHTML = `Full Name: ${nam}`;
    emailEle.innerHTML = `email: ${email}`;
    passwordEle.innerHTML = `Password: ${password}`;
}

// Adding funcionality to the LOGOUT btn
logOutBtn.addEventListener("click", () => {
    localStorage.setItem("userDetails", null);
    localStorage.removeItem("accessToken");
    window.location.href = "../index.html";


    // Removing unnessasary event listerners
    logOutBtn.removeEventListener("click", _listener, true);
    profileHeader.removeEventListener("click", _listener, true);
    signUpHeader.removeEventListener("click", _listener, true);
})


// Adding functionality to the header profile btn
profileHeader.addEventListener("click", () => {
    location.reload();
});


// Adding functionality to the header signup btn
signUpHeader.addEventListener("click", () => {
    window.location.href = "index.html"
});