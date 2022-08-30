import React from 'react'
import './App.css';
import mySvg from './images/not_found.svg';

function MainScreen() {
    return (
        <div className='mainScreen'>
            <div className="img"><img src={mySvg} alt="Not_Found" /></div>
            <div className="text"><h1>Want to Show Data ?</h1>
                <p>Click on Get Users button to show Data.</p>
            </div>
        </div>
    )
}

export default MainScreen
