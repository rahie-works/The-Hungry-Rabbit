import React, {useRef,useState} from 'react'
import '../css/PausedPage.css'

const GameOver = (props) => {

    const hsRef = useRef('')
    const overRef = useRef('')
    const [displayHS,setDisplayHS] = useState('')

    const newGame = () => {
        props.newGameCalled()
    }

    const showHighScore = () => {
        let display = ""
        if("highscore" in localStorage) {
            const highScoreData = JSON.parse(localStorage.getItem("highscore"))
            display += '<ol class="hs-list">'
            highScoreData.forEach(element => {
                display += '<li>'+ element.name +' - Score '+ element.score +'</li>'
            });
            display += '</ol>'
        } else {
            display = '<p>No High Score Found!</p>';
        }
        setDisplayHS(display)
        overRef.current.style.display = 'none'
        hsRef.current.style.display = 'block'
    }

    return (
        <section>
            <div className='pause__card' ref={overRef}>
                <h3>GAME OVER</h3>
                <h4>Your Score: {props.playerScore}</h4>
                <div className='actions'>
                    <button onClick={showHighScore}>High Score</button>
                    <button onClick={newGame}>Main Menu</button>
                </div>
            </div>
            <div class="hs__card" ref={hsRef}>
                <h1>High Score</h1>
                <div>{displayHS}</div>
                <button>Back</button>
            </div>
        </section>
    )
}

export default GameOver;