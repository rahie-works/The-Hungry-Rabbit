import React , {useState, useRef} from 'react'
import '../css/WelcomeTitle.css'
import '../css/ButtonStyles.css'
import GamePage from './GamePage'

const WelcomeTitle = () => {

    const hsRef = useRef('')
    const welcomeRef = useRef('')
    const [hs,setHS] = useState('no data')

    const playPressed = () => {
        document.getElementById('main').style.display = 'none'
        document.getElementById('game').style.display = 'block'
    }

    const showHighScore = () => {
        if("highscore" in localStorage) {
            const highScoreData = JSON.parse(localStorage.getItem("highscore"))
            const highScoreDisplay = highScoreData.map(element => {
                console.log('Element :', element)
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
    }

    return (
        <section>
            <section id='main' ref={welcomeRef}>
                <div className='box'>
                    <h2>The Hungry Rabbit</h2>
                    <button className='rules-hs fade-in' onClick={showHS}>HIGH SCORE</button>
                    <button className='rules-hs fade-in'>RULES</button>
                </div>
                <div className='box'>
                    <button className='play fade-in' onClick={playPressed}>PLAY !</button>
                </div>
            </section>
            <section id='game'>
                <GamePage/>
            </section>
            <div className="hs__card" ref={hsRef}>
                <h4>High Score</h4>
                {hs}
                <div className='actions'>
                    <button onClick={welcome}>Back</button>
                </div>
            </div>
        </section>
    )
}

export default WelcomeTitle;