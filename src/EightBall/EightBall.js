import React from 'react';
import './EightBall.css'

function EightBall({answers}){
    const [btnClick, setBtnClick] = React.useState(false);
    const [message, setMessage] = React.useState('Think of a question');
    const [color, setColor] = React.useState('black');

    function handleBallClick(){
        const index = Math.floor(Math.random()*19)
        const results = answers[index];
        setMessage(results.msg)
        setColor(results.color);
        setBtnClick(true);
    }

    // style={{backgroundColor:color}} 

    return(
        <div>
            {btnClick ? 
                        <button 
                        style={{background: `radial-gradient(circle at 100px 100px, ${color}, #000)`}}className="eight-ball-btn" onClick={handleBallClick}>{message}</button>
                :
                        <button style={{background: `radial-gradient(circle at 100px 100px, rgb(75, 71, 71), ${color})`}} className='eight-ball-btn' onClick={handleBallClick}>{message}</button>
            }
        </div>
    )
}

export default EightBall;