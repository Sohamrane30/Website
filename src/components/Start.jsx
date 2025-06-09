import React from "react"
import { useState } from "react"


function Start() {

    const [screen, setScreen] = useState('start');

    const handleStart = () => setScreen("level");

    if(screen === 'start'){
        return(
        <>
        <div>
            <button onClick={handleStart} className="button-bottom-shadow">Start Game</button>
            <h2 className=" coin text-bottom-shadow animate-blink">Insert a Coin</h2>
        </div>
        </>
    )
    }

    else{
        return (
            <div className="menu-options text-bottom-shadow text-center mt-8">
            <h2 className="level text-2xl font-bold mb-4 animate-blink">CHOOSE&nbsp;LEVEL</h2>

            <div className="menu">
            <div className="menu-item" onClick={() => window.location.href = "/resume"}>
                <span>Resume</span>
            </div>
            <div className="menu-item" onClick={() => window.location.href = "/projects"}>
                <span>Projects</span>
            </div>
            <div className="menu-item" onClick={() => window.location.href = "/contact"}>
                <span>Contact</span>
            </div>
            </div>

            </div>
        );
    }
    
}

export default Start