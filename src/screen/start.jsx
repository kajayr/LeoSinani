import React from 'react';
import './start.css';

export const Start = (props) => {
    return(
        <div className='start' style={{display:props.display}}>
           <h1 className='welcome'>Welcome</h1>
        </div>
    )
}