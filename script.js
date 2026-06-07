  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAjAvp1A1KZ4GpUMw7RGgZXLOkjXsEeGLE",
    authDomain: "fx-trade-8ea0d.firebaseapp.com",
    projectId: "fx-trade-8ea0d",
    storageBucket: "fx-trade-8ea0d.firebasestorage.app",
    messagingSenderId: "802910108307",
    appId: "1:802910108307:web:97eb67bc88f4a2a890ab66",
    measurementId: "G-38QC5YEN6C"
  };

   const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;

  /*signup logic*/
  if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
  }
  
const auth = firebase.auth();

const createAccount = document.getElementById("CreateAccount");

createAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Account created!", userCredential.user);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error.message);
      alert(error.message);
    });
});





