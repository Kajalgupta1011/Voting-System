import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import style from "../Login/login.module.css"
function AdminLogin() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/admin")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        prompt(`${errorCode} - ${errorMessage}`)
    });
   
}
    return (
        <div className={style.login_container}>
          <div className={style.input_container}>
            <div>
              {" "}
              EMAIL
              <input
                type={"text"}
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
            <p>
                If you are user {" "} <Link to="/" style={{color: 'yellow'}} >User Login</Link>
            </p>
          </div>
        </div>
      );
}

export default AdminLogin