import React from 'react'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/DesignSystem.module.css'

import Tweet from './Tweet';

export default function Feed() {

  const bookmarks = useSelector((state) => state.bookmarks.value);

  const [tweetsData, setTweetsData] = useState([]);
  const [postTweet, setPostTweet] = useState('');
  const [isLiked, setIsLiked] = useState(false);


  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetsData(data.tweets);
        setIsLiked(true);
      });
  }, [postTweet]);



  let token = 're1oHsRNPRjDkbkw7RFPX7_ABcDr_XCr';

  const handlePostTweet = () => {
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ token: token, content: postTweet }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        console.log(postTweet)
        setPostTweet('');
      }
    });
  };

  const checkLength = postTweet.length;
  
  const tweets = tweetsData.map((data, i) => {
    const isBookmarked = bookmarks.some(user => user.token === user.token);
      return <div>
          <Tweet key={i} id={data._id} firstname={data.user.firstname} lastname={data.user.lastname} date={data.date} content={data.content} isBookmarked={isBookmarked} isLiked={isLiked} like={data.like}/>
        </div>
  });


  return (
    <div className={styles.feedContainer}>
      <div className={styles.newTweetContainer}>
        <div className={styles.block}>
          <div className={styles.userPosting}>
            <div className={styles.avatar}>
              <img src='miaouss.jpg'/>
            </div>
              <input type="textarea" placeholder="What is happening?!" id="textarea" className={styles.input} onChange={(e) => setPostTweet(e.target.value)} value={postTweet}/>
            </div>
              <div className={styles.postAction}>
            <div className={styles.check}>{checkLength}/280</div>
          <button onClick={() => handlePostTweet()} className={styles.btnPrimary}>Post</button>
        </div>
      </div>
    </div>
      {tweets}
    </div>
  )
}