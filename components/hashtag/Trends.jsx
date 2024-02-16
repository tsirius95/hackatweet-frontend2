import React from 'react';
import { useEffect, useState } from 'react';

export default function Trends() {
    
    const [dataTrends, setDataTrends] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            let dataTrends;
            dataTrends = data.tweets.map((data) => {
                return data.hashtag
            })
            setDataTrends(data);
          });
      }, []);

    return (
        <>
            
        </>
    )
}