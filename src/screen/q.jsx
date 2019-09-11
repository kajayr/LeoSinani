import React from 'react';
import './q.css';

export const Q = (props) => {
    
    const randomNum = Math.floor(Math.random() * 10);
    return(
        
        <div className='api'>
            
        {/* <img src='aa.jpg' alt='amazing quotes'/> */}
        {/* <q>quote</q> */}        
        <cite></cite>
        {
            
            
            // props.api.map(data => (<h1 id={randomNum}>{data.author}</h1>))
            props.api.map(data => data.author[randomNum])
        }
        </div>
    )
}
