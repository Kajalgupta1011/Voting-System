import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(`${errorCode} - ${errorMessage}`)
          // ..
      });

 
  }

  function handelLogin() {
    navigate("/");
  }

  return (
    <div className={style.login_container}>
      <div className={style.input_container}>
        {/* <div className={style.input_section}>
          {" "}
          Username
          <input
            className={style.input_box}
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
        <div className={style.input_section}>
          {" "}
          Email
          <input
            className={style.input_box}
            placeholder="user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.input_section}>
          {" "}
          Password
          <input
            className={style.input_box}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className={style.input_section}>
          {" "}
          Confirm Password
          <input
            className={style.input_box}
            placeholder="confirm password"
            value={confirmPasswod}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>

      <div className={style.btn_container}>
        <button className={style.btn_login} onClick={handleRegister}>
          REGISTER
        </button>
        <p>
          Do you have an Account?{" "}
          <span
            style={{ fontWeight: "700", cursor: "pointer" }}
            onClick={handelLogin}
          >
            LOGIN
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
