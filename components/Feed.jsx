import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/DesignSystem.module.css'
import Tweet from './Tweet';

export default function Feed() {

  const token = useSelector((state) => state.user.value.token)
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const [tweetsData, setTweetsData] = useState([]);
  const [postTweet, setPostTweet] = useState('');
  const [id, setId] = useState("");
  const [like, setLike] = useState("")


  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        let sortedData = data.tweets.sort((a, b) => new Date(b.date) - new Date(a.date))
        setTweetsData(sortedData);
      });
  }, [postTweet, id, like]);

  const handlePostTweet = () => {
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ token: token, content: postTweet }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        setPostTweet('');
      }
    });
  };

  const deleteTweet = (id) => {
    setId(id)
  };

  const addLike = (id) => {
    setLike(id)
  }


  const checkLength = postTweet.length;
  
  const tweets = tweetsData.map((data, i) => {
      return <div>
          <Tweet key={i} deleteTweet={deleteTweet} addLike={addLike} id={data._id} 
          token= {data.user.token} firstname={data.user.firstname} lastname={data.user.lastname} 
          date={data.date} content={data.content} like={data.like}/>
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
      <div className={styles.scrollTweet}>
        {tweets}
      </div>
    </div>
  )
}