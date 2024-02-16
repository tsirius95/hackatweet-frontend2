import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { addBookmark, removeBookmark } from '../reducers/bookmarks';

import styles from '../styles/DesignSystem.module.css'

export default function Tweet(props) {

  const token = useSelector((state) => state.user.value.token);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [nbLike, setNbLike] = useState(0);
  const compteur = props.like.length;

  const handleLikeClick = () => {
		fetch(`http://localhost:3000/tweets/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ idTweet: props.id, token: token }),
       })
			.then(response => response.json())
			.then(data => {
          console.log(data.tweet)
      }
		);
    props.addLike(props.id)
	}

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/tweets/${props.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    });
    props.deleteTweet(props.id)  
  };

  const iconLike = {
    size: 20,
    color: '#71767c'
  }

  const iconBookmark = {
    size: 20,
    color: '#71767c'
  }

  if (compteur >= 1) {
		iconLike.color = '#E9BE59' ;
	}

  /*
  if (props.isBookmarked) {
    iconBookmark.color = '#E9BE59' ;
  }
  */

  return (

    <div className={styles.tweetCard}>

      <div className={styles.avatar}>
          <img src='miaouss.jpg'/>
      </div>

      <div className={styles.userContainer}>
        <div className={styles.userInfos}>
          <div className={styles.pseudo}>{props.firstname}</div>
          <div className={styles.info}>@{props.lastname} · <Moment className={styles.date} date={props.date} format="MMM Do YYYY" /></div>
        </div>
        <div className={styles.post}>{props.content}</div>
        <div className={styles.interactionsContainer}>
          <div className={styles.iconCounter}>
            <div className={styles.icon} onClick={() => handleLikeClick()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={iconLike.size} height={iconLike.size} viewBox="0 0 24 24" fill="none">
                    <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={iconLike.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                {compteur}
          </div>
          {props.token === token && <div className={styles.icon} onClick={() => handleDeleteClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.12001 6.52998L3.08001 6.72998C2.66001 6.76998 2.29001 6.46998 2.25001 6.04998C2.21001 5.62998 2.51001 5.26998 2.92001 5.22998L4.96001 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z" fill="#292D32"/>
              <path d="M8.49999 5.72C8.45999 5.72 8.41999 5.72 8.36999 5.71C7.96999 5.64 7.68999 5.25 7.75999 4.85L7.97999 3.54C8.13999 2.58 8.35999 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.63999 2.76 9.61999 2.9 9.46999 3.79L9.23999 5.09C9.17999 5.46 8.85999 5.72 8.49999 5.72Z" fill="#292D32"/>
              <path d="M15.21 22.7501H8.79001C5.30001 22.7501 5.16001 20.8201 5.05001 19.2601L4.40001 9.19007C4.37001 8.78007 4.69001 8.42008 5.10001 8.39008C5.52001 8.37008 5.87001 8.68008 5.90001 9.09008L6.55001 19.1601C6.66001 20.6801 6.70001 21.2501 8.79001 21.2501H15.21C17.31 21.2501 17.35 20.6801 17.45 19.1601L18.1 9.09008C18.13 8.68008 18.49 8.37008 18.9 8.39008C19.31 8.42008 19.63 8.77007 19.6 9.19007L18.95 19.2601C18.84 20.8201 18.7 22.7501 15.21 22.7501Z" fill="#292D32"/>
              <path d="M13.66 17.25H10.33C9.92 17.25 9.58 16.91 9.58 16.5C9.58 16.09 9.92 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z" fill="#292D32"/>
              <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#292D32"/>
            </svg>
          </div>}
          {/* <div className={styles.iconLike} onClick={() => handleBookmarkClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width={iconBookmark.size} height={iconBookmark.size} viewBox="0 0 24 24" fill="none">
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke={iconBookmark.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke={iconBookmark.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
       </div> */}   
        </div>
      </div>

		</div>

  )
}
