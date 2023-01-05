import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/voting")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        alert(`${errorCode} - ${errorMessage}`)
    });
   
}

  function handleRegister() {
    navigate("/register");
  }

  return (
    <div className={style.login_container}>
      <div className={style.input_container}>
        <div>
          {" "}
          EMAIL
          <input
            type={"email"}
            className={style.input_box}
            placeholder="USERNAME"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          {" "}
          PASSWORD
          <input
            type={"password"}
            className={style.input_box}
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className={style.btn_container}>
        <button className={style.btn_login} onClick={handelLogin}>
          LOGIN
        </button>
        <button className={style.btn_login} onClick={handleRegister}>
          REGISTER
        </button>
        <p>
          If You are admin... {" "}
          <Link to="/adminLogin" >Admin Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
