redirectIfLoggedIn("./pages/main.html");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginButton = document.getElementById("loginButton");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  try {
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";
    await signInWithEmail(email, password, rememberMe);
    window.location.href = "./pages/main.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
    loginButton.disabled = false;
    loginButton.textContent = "Login";
  }
});

document.getElementById("googleLogin").addEventListener("click", async () => {
  const googleButton = document.getElementById("googleLogin");
  try {
    googleButton.disabled = true;
    googleButton.textContent = "Connecting...";
    await signInWithGoogle();
    window.location.href = "./pages/main.html";
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
    googleButton.disabled = false;
    googleButton.innerHTML = '<img src="https://www.google.com/favicon.ico" alt="Google" class="google-icon"> Login with Google';
  }
});
