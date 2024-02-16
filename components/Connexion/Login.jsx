import React from 'react';
import styles from '../../styles/DesignSystem.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import Signup from './Signup'
import Signin from './Signin'

export default function Login() {

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const showModalUp = () => {
    setIsSignUp(true);
  };
  const showModalIn = () => {
    setIsSignIn(true);
  };

  const handleOkUp = () => {
    setIsSignUp(false);
  };
  const handleCancelUp = () => {
    setIsSignUp(false);
  };
  const handleOkIn = () => {
    setIsSignIn(false);
  };
  const handleCancelIn = () => {
    setIsSignIn(false);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.claim}>
          <h1>Express yourself</h1>
          <div className={styles.subtitle}>Join today.</div>
        </div>

        <div className={styles.signin}> 
          <button className={styles.btnSecondary}>Connexion with Google</button>
          <div className={styles.separator}>
            <div className={styles.line}></div>
            <div className={styles.or}>or</div>
            <div className={styles.line}></div>
          </div>
          <button className={styles.btnPrimary} onClick={showModalUp}>Create account</button>
          <Modal open={isSignUp} onOk={handleOkUp} onCancel={handleCancelUp} footer={null}>
            <Signup />
          </Modal>
        </div>
        <div className={styles.signin}>
          <div>Already have an account?</div>
          <button className={styles.btnTertiary} onClick={showModalIn}>Sign In</button>
          <Modal open={isSignIn} onOk={handleOkIn} onCancel={handleCancelIn} footer={null}>
            <Signin />
          </Modal>
        </div>
      </div>
    </div>
  )
};
