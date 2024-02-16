import React from 'react';
import Tweet from "../Tweet";
import { useEffect, useState } from 'react';
import styles from "./Styles/Hashtag.module.css"

export default function Hashtag() {

    const [hashtagData, setHashtagData] = useState([]);
    const [hashtag, setHashtag] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/tweets/trends/${hashtag}`)
        .then(response => response.json())
        .then(data => {
            setHashtagData(data.tweets);
        });
    }, [hashtag]);

    const hashtags = hashtagData.map((data, i) => {
        return <Tweet key={i} firstname={data.user.firstname} lastname={data.user.lastname} date={data.date} content={data.content}/>
    });

    return (
        <> 
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <div>HASHTAG</div>
                    <input className={styles.hashtagSearch} type='text' onChange={(e) => setHashtag(e.target.value)}/>
                </div>
                <div className={styles.hashtagContainer}>
                    {hashtags}
                </div>  
            </div>
        </>
    )
}