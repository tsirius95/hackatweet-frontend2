import React from 'react'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/DesignSystem.module.css'

import Tweet from './Tweet';
import NewTweet from './NewTweet';

export default function Feed() {

  const bookmarks = useSelector((state) => state.bookmarks.value);
  const user = useSelector((state) => state.user.value);

  const [tweetsData, setTweetsData] = useState([]);
  const [isLiked, setIsLiked] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetsData(data.tweets);
        setIsLiked(true);
      });
  }, []);

  
  const tweets = tweetsData.map((data, i) => {
    const isBookmarked = bookmarks.some(user => user.token === user.token);
      return <div>
          <Tweet key={i} id={data._id} firstname={data.user.firstname} lastname={data.user.lastname} date={data.date} content={data.content} isBookmarked={isBookmarked} isLiked={isLiked} like={data.like}/>
        </div>
  });


  return (
    <div className={styles.feedContainer}>
      <NewTweet/>
      {tweets}
    </div>
  )
}