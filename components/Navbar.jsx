import React from 'react'

import Link from 'next/link';

import styles from '../styles/DesignSystem.module.css'
import Logout from '../components/Connexion/Logout';

export default function Navbar() {

  let iconStyle = {
    size: 32,
    color: '#e8e9ea'
  }
  
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none">
            <g clip-path="url(#clip0_85_194)">
              <path d="M35.0418 0H41.8643L26.959 16.9439L44.4944 40H30.7639L20.0104 26.0162L7.70561 40H0.878503L16.8213 21.877L0 0H14.0782L23.7988 12.7814L35.0418 0ZM32.6471 35.9383H36.4279L12.0242 3.8485H7.96754L32.6471 35.9383Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_85_194">
              <rect width="44.4944" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.linkContainer}>

      <div className={styles.buttonNav}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#292D32"/>
              <path d="M17.08 14.1499C14.29 12.2899 9.74 12.2899 6.93 14.1499C5.66 14.9999 4.96 16.1499 4.96 17.3799C4.96 18.6099 5.66 19.7499 6.92 20.5899C8.32 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="#292D32"/>
            </svg>
          </div>
          <Link href="../home"><span className={styles.link}>Home</span></Link>
        </div>

        <div className={styles.buttonNav}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <Link href="../hashtag"><span className={styles.link}>Hashtag</span></Link>
        </div>

      </div>
      <Logout/>
    </div>
  )
}