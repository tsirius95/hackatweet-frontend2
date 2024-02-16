import React from 'react'

import Link from 'next/link';

import styles from '../styles/DesignSystem.module.css'

export default function SidebarRight() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.bgContainer}>
        <div>Meet the team who created this!</div>
      </div>
    </div>
  )
}
