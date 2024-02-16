import React from 'react';
import { useEffect, useState } from 'react';
import { topHashtags } from '../../modules/topHashTags';

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
        return <div>
                <div>{el.hashtag}</div>
                <div>{el.nbOccurence}</div>
            </div>
    })

    return (
        <>
        {trends}
        </>
    )
}