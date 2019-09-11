import React from 'react';
import './screen.css';
import './softSkills.css';




export const Screen = (props) => {
    return(
        <div className='screen'>
         <div className='screenAll' style={props.s}>
         <img className={`pic ${props.addClassPic}` }  src={props.img} alt='Leo' style={{display:props.display}}/>
            <p className={`p ${props.addClassText}`} style={{display:props.displayText}}>{props.text}</p>

         </div>
        </div>
    )
}

  
  export default Screen;