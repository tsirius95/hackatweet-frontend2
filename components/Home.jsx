import React from 'react'

// IMPORT COMPONENT //
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import SidebarRight from '../components/SidebarRight';

// IMPORT CSS
import styles from '../styles/DesignSystem.module.css'


export default function Home() {
  return (

    <div className={styles.layout}>
      <Navbar/>
      <Feed/>
      <SidebarRight/>
    </div>
  )
}