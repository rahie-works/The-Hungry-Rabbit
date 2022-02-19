import React , {useState, useRef} from 'react'
import '../css/WelcomeTitle.css'
import '../css/ButtonStyles.css'
import '../css/PausedPage.css'
import GamePage from './GamePage'

const WelcomeTitle = () => {

    const hsRef = useRef('')
    const welcomeRef = useRef('')
    const rulesShow = useRef('')
    const [hs,setHS] = useState('no data')

    const playPressed = () => {
        document.getElementById('main').style.display = 'none'
        document.getElementById('game').style.display = 'block'
    }

    const showHighScore = () => {
        if("highscore" in localStorage) {
            const highScoreData = JSON.parse(localStorage.getItem("highscore"))
            const highScoreDisplay = highScoreData.map(element => {
                return <h4>{element.name} : {element.score}</h4>
            });
            setHS(highScoreDisplay)
        }
    }

    const showHS = () => {
        welcomeRef.current.style.display = 'none'
        hsRef.current.style.display = 'block'
        showHighScore()
        console.log(hs)
    }

    const welcome = () => {
        welcomeRef.current.style.display = 'block'
        hsRef.current.style.display = 'none'
        rulesShow.current.style.display = 'none'
    }

    const showRule = () => {
        welcomeRef.current.style.display = 'none'
        rulesShow.current.style.display = 'block'
    }

    return (
        <section>
            <section id='main' ref={welcomeRef}>
                <div className='box'>
                    <h2>The Hungry Rabbit</h2>
                    <button className='rules-hs fade-in' onClick={showHS}>HIGH SCORE</button>
                    <button className='rules-hs fade-in' onClick={showRule}>RULES</button>
                </div>
                <div className='box'>
                    <button className='play fade-in' onClick={playPressed}>PLAY !</button>
                </div>
            </section>
            <section id='game'>
                <GamePage/>
            </section>
            <div className="hs__card" ref={hsRef}>
                <h3>High Score</h3>
                {hs}
                <div className='actions'>
                    <button onClick={welcome}>Back</button>
                </div>
            </div>
            <div className = 'rules' ref={rulesShow}>
                <h3>Rules</h3>
                <p>1. The Rabbit can be moved left and right using arrow-left and arrow-right.</p>
                <p>2. Feed the rabbit by moving the rabbit. The carrots fallen towards the hand is counted a catch.</p>
                <img src='/rule_rabbit_catch.png' alt='rule1'/>
                <p>3. Escape from the bomb from falling on head. It will cost a life. Loosing 5 lives ends the game.</p>
                <p>4. Game can be paused, but when resumed, the position of rabbit will be random.</p>
                <p>Enjoy.!</p>
                <div className='actions'>
                    <button onClick={welcome}><i class="fa fa-backward"></i></button>
                </div>
            </div>
        </section>
    )
}

export default WelcomeTitle;