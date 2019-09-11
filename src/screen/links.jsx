import React from 'react';
import './links.css';

export const Links = (props) => {
    return(
      
<div className='links' style={{display:props.display}}>
<p> <a href="http://LinkedIn.com/in/leo-sinani-7b753773">LinkedIn<span> : LinkedIn.com/in/leo-sinani-7b753773</span></a></p>
<p> <a href="https://github.com/kajayr">Git<span>: https://github.com/kajayr</span></a></p>
</div>
    )
}