import React , {useState} from 'react'
import '../css/WelcomeTitle.css'
import '../css/ButtonStyles.css'
import GamePage from './GamePage'

const WelcomeTitle = () => {

    const playPressed = () => {
        document.getElementById('main').style.display = 'none'
        document.getElementById('game').style.display = 'block'
    }

    return (
        <section>
            <section id='main'>
                <div className='box'>
                    <h2>The Hungry Rabbit</h2>
                    <button className='rules-hs fade-in'>HIGH SCORE</button>
                    <button className='rules-hs fade-in'>RULES</button>
                </div>
                <div className='box'>
                    <button className='play fade-in' onClick={playPressed}>PLAY !</button>
                </div>
            </section>
            <section id='game'>
                <GamePage/>
            </section>
        </section>
    )
}

export default WelcomeTitle;