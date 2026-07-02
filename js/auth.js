function redirectIfLoggedIn(destination) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.href = destination;
    }
  });
}

function requireAuth(loginPath) {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = loginPath || "/login.html";
    }
  });
}

async function logout(redirectPath) {
  try {
    await auth.signOut();
    window.location.href = redirectPath || "/login.html";
  } catch (error) {
    console.error("Error signing out:", error);
    alert("Error signing out. Please try again.");
  }
}

async function signInWithEmail(email, password, rememberMe) {
  if (rememberMe) {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  } else {
    await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  localStorage.setItem("lastLogin", new Date().toISOString());
  return userCredential.user;
}

async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  localStorage.setItem("lastLogin", new Date().toISOString());
  return result.user;
}

async function signUpWithEmail(email, password, displayName) {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  const user = userCredential.user;
  await user.updateProfile({ displayName });
  await db.collection("users").doc(user.uid).set({
    uid: user.uid,
    email: user.email,
    displayName,
    photoURL: user.photoURL || "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  localStorage.setItem("lastLogin", new Date().toISOString());
  return user;
}

async function signUpWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  const user = result.user;
  const userDoc = await db.collection("users").doc(user.uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "User",
      photoURL: user.photoURL || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  localStorage.setItem("lastLogin", new Date().toISOString());
  return user;
}
