import React from 'react'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'

import { login } from '../../reducers/user';
import Link from 'next/link';

import styles from '../../styles/DesignSystem.module.css'

export default function Signup() {
  const router = useRouter()

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpLastname, setSignUpLastname] = useState('');
  const [signupEmail, setSignUpEmail] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');



  const handleRegister = () => {
      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, lastname: signUpLastname, email: signupEmail, password: signUpPassword }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            dispatch(login({ token: data.token }));
            setSignUpFirstname('');
            setSignUpLastname('');
            setSignUpEmail('');
            setSignUpPassword('');
            router.push("/home")
          }
        });
	};


  return (

    <div className={styles.modalContainer}>

      <h4>Create your account</h4>

      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="John" id="signUpUsername" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}/>
        </div>

        <div className={styles.inputContainer}>
          <input type="text" placeholder="Doe" id="signUpUsername" onChange={(e) => setSignUpLastname(e.target.value)} value={signUpLastname}/>
        </div>

        <div className={styles.inputContainer}>
          <input type="text" placeholder="Enter your email adress..." id="signUpUsername" onChange={(e) => setSignUpEmail(e.target.value)} value={signupEmail}/>
        </div>

        <div className={styles.inputContainer}>
          <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
        </div>

      </div>

      <button className={styles.btn} id="connection" onClick={() => handleRegister()}>Create account</button>
    </div>
  )
}
