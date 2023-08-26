const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mailid').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-pass').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const accessToken = generateAccessToken(); // Implement this function

    const userData = {
        name: name,
        email: email,
        accessToken: accessToken
    };

    localStorage.setItem('user', JSON.stringify(userData));

    alert('Signup successful!');

    // Redirect to profile page
    window.location.href = 'profile.html';
});

function generateAccessToken() {
    // Implement a function to generate a random access token
    // This can involve generating a random string or using a library like uuid
}
