import React from 'react'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/DesignSystem.module.css'

export default function NewTweet() {

  const user = useSelector((state) => state.user.value);

  const [postTweet, setPostTweet] = useState([]);

/*   const handlePostTweet = () => {
		fetch(`http://localhost:3000/tweets/${user.token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
				}
			});
	}; */

  const handlePostTweet = () => {
    // Use postTweet instead of signUpUsername and signUpPassword
    fetch(`http://localhost:3000/tweets/re1oHsRNPRjDkbkw7RFPX7_ABcDr_XCr`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        token: re1oHsRNPRjDkbkw7RFPX7_ABcDr_XCr,
        content: content,
      }), // Send the tweet content
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        console.log('Oui la gay gayre!')
        setPostTweet('');
        // Dispatch your login action if needed
        // dispatch(login({ username: user.username, token: data.token }));
      }
    });
  };

  const checkLength = postTweet.length;


  return (
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
  )
}
