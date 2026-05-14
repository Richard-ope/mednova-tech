import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful ✅");
    })
    .catch((error) => {
      alert(error.code);
      console.log(error);
    });
}

window.login = login;
