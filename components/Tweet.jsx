import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { addBookmark, removeBookmark } from '../reducers/bookmarks';

import styles from '../styles/DesignSystem.module.css'

export default function Tweet(props) {

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const [date, setDate] = useState('2050-11-22T23:59:59');


  const [isLiked, setIsLiked] = useState(false);
  const [nbLike, setNbLike] = useState(0)


  const handleBookmarkClick = () => {
		fetch(`http://localhost:3000/tweets/${user.token}`)
			.then(response => response.json())
			.then(data => {
				if (data.result) {
					if (props.isBookmarked) {
            console.log('Je suis')
						dispatch(removeBookmark(props));
					} else {
            console.log('donc je suis')
						dispatch(addBookmark(props));
					}
				}
			});
	}

  const handleLikeClick = () => {
		fetch(`http://localhost:3000/tweets/${user.token}`)
			.then(response => response.json())
			.then(data => {
        if (data.result) {
          if (!isLiked){
            setIsLiked(true)
            setNbLike(nbLike + 1);
          }
          if (isLiked){
            setIsLiked(false)
            setNbLike(nbLike - 1);
          }
        }
			});
	}

  const iconLike = {
    size: 20,
    color: '#71767c'
  }

  const iconBookmark = {
    size: 20,
    color: '#71767c'
  }

  useEffect(() => {
		setDate(new Date());
	}, []);

// Event qui marche en brut
/*   const handleLikeClick = () => {
    if (!isLiked){
      setIsLiked(true)
      setNbLike(nbLike + 1);
    }
    if (isLiked){
      setIsLiked(false)
      setNbLike(nbLike - 1);
    }
  }; */

	if (isLiked) {
		iconLike.color = '#E9BE59' ;
	}
  
  if (props.isBookmarked) {
    iconBookmark.color = '#E9BE59' ;
  }

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
                {props.like.length}
          </div>
          <div className={styles.icon} onClick={() => handleBookmarkClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width={iconBookmark.size} height={iconBookmark.size} viewBox="0 0 24 24" fill="none">
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke={iconBookmark.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke={iconBookmark.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

		</div>

  )
}
