const firebaseConfig = {
  apiKey: "AIzaSyB0RAzn8Cu-49BpAKuuUr-N79ezda9e9qo",
  authDomain: "tpc-travels.firebaseapp.com",
  projectId: "tpc-travels",
  storageBucket: "tpc-travels.firebasestorage.app",
  messagingSenderId: "404762624068",
  appId: "1:404762624068:web:d366c0940d9514ff063c11"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
