import React from 'react';
import './header.css';

export const Header = () => {
    return(
        <div className='header'>
            <button>LIST</button>
            <ol className='list10'>
                <li><button onClick={this.about}  className='btn'>About Me</button></li>
                <li><button>ABOUT US</button></li>
                <li><button>CONTACT US</button></li>

                
            </ol>
        </div>
    )
}