import React from 'react'

import Link from 'next/link';
import Trends from './hashtag/Trends';

import styles from '../styles/DesignSystem.module.css'

export default function SidebarRight() {
  return (
    <div className={styles.sidebarContainer}>
      <Trends/>
    </div>
  )
}
