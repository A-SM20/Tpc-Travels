redirectIfLoggedIn("/profile.html");

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const signupButton = document.getElementById("signupButton");
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  try {
    signupButton.disabled = true;
    signupButton.textContent = "Creating Account...";
    await signUpWithEmail(email, password, fullName);
    window.location.href = "/profile.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
    signupButton.disabled = false;
    signupButton.textContent = "Sign Up";
  }
});

document.getElementById("googleSignUp").addEventListener("click", async () => {
  const googleButton = document.getElementById("googleSignUp");
  try {
    googleButton.disabled = true;
    googleButton.textContent = "Connecting...";
    await signUpWithGoogle();
    window.location.href = "/profile.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
    googleButton.disabled = false;
    googleButton.innerHTML = '<img src="https://www.google.com/favicon.ico" alt="Google" class="google-icon"> Sign up with Google';
  }
});
