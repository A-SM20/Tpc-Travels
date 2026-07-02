function initProfilePage() {
  const profileImage = document.getElementById("profileImage");
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const logoutBtn = document.getElementById("logoutBtn");
  const editProfileBtn = document.getElementById("editProfileBtn");
  const continueBtn = document.getElementById("continueBtn");

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = "/login.html";
      return;
    }

    try {
      const userDoc = await db.collection("users").doc(user.uid).get();
      const userData = userDoc.data();
      const name = userData?.displayName || user.displayName || "User";

      profileImage.src = userData?.photoURL || user.photoURL ||
        "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=random";
      profileName.textContent = name;
      profileEmail.textContent = user.email;
    } catch (error) {
      console.error("Error fetching user data:", error);
      profileName.textContent = user.displayName || "User";
      profileEmail.textContent = user.email;
      profileImage.src = "https://ui-avatars.com/api/?name=User&background=random";
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => logout("/login.html"));
  }

  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
      alert("Edit profile functionality coming soon!");
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "/pages/main.html";
    });
  }
}
