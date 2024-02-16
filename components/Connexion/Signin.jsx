import React from 'react'

import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/user';
import {useRouter} from 'next/router'

import styles from '../../styles/DesignSystem.module.css'


export default function Signin() {
	const router = useRouter()

 	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [signinEmail, setSignInEmail] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: signinEmail, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ token: data.token }));
					setSignInEmail('');
					setSignInPassword('');
					router.push("/home")
				}
			});
	};


  return (

    <div className={styles.modalContainer}>

      <h4>It's good to see you!</h4>
      <p>Sign-in</p>

      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
					<input type="email" placeholder="Enter your email adress" id="signInEmail" onChange={(e) => setSignInEmail(e.target.value)} value={signinEmail}/>
        </div>

        <div className={styles.inputContainer}>
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
        </div>
			</div>

      <button className={styles.btn} id="connection" onClick={() => handleConnection()}>Connect</button>
    </div>

  )
}