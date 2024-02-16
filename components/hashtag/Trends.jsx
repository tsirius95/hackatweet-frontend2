import React from 'react';
import { useEffect, useState } from 'react';
import { topHashtags } from '../../modules/topHashTags';
import styles from "../../styles/DesignSystem.module.css";

export default function Trends() {
    
    const [dataTrends, setDataTrends] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            let temp = topHashtags(data.tweets)
            setDataTrends(temp);
            console.log(topHashtags(data.tweets))
          });
      }, []);

    const trends = dataTrends.map((el) => {
        console.log(el)
        console.log("toto")    
        return <div className={styles.infoTrend}>
                <div className={styles.hashtag}>#{el.hashtag}</div>
                <div className={styles.Ocu}>{el.nbOccurence} tweets</div>
            </div>
    })

    return (
        <div className={styles.TrendContainer}>
        <h4 className={styles.yeah}>Trends</h4>
        {trends}
        </div>
    )
}