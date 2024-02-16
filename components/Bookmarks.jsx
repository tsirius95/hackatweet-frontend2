import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Tweet from './Tweet';

import styles from '../styles/DesignSystem.module.css'

export default function Bookmarks() {

  const bookmarks = useSelector((state) => state.bookmarks.value);

	let tweets = <p>No article</p>;
	

	if (bookmarks.length > 0) { 
		tweets = bookmarks.map((data, i) => {
			return <Tweet key={i} {...data} isBookmarked />;
		});
	}


  return (
    <div >
        {tweets}
    </div>
  )
}