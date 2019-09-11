import React from 'react';
import './list.css';

export const Skills = (props) => {
   return(
       <div className='list' style={{display:props.display}}>
<div className='listing'>
<ul className='l'>
    <li className='li-list'>HTML</li>
    <li  className='li-list'>CSS</li>
    <li  className='li-list'>SASS</li>
    <li  className='li-list'>BootStrap</li>
    <li  className='li-list'>API</li>
</ul>
<ul className='l1'>
    <li  className='li-list'>JavaScript</li>
    <li  className='li-list'>jQuery</li>
    <li  className='li-list'>React</li>
    <li  className='li-list'>Node</li>
    
</ul>
</div>

            
       </div>
   )
}