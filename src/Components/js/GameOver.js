import React, {useRef,useState} from 'react'
import '../css/PausedPage.css'

const GameOver = (props) => {

    const hsRef = useRef('')
    const overRef = useRef('')
    const [hs,setHS] = useState('no data')

    const newGame = () => {
        props.newGameCalled()
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
        overRef.current.style.display = 'none'
        hsRef.current.style.display = 'block'
        showHighScore()
        console.log(hs)
    }

    return (
        <section>
            <div className='pause__card' ref={overRef}>
                <h3>GAME OVER</h3>
                <h4>Your Score: {props.playerScore}</h4>
                <div className='actions'>
                    <button onClick={showHS}>High Score</button>
                    <button onClick={newGame}>Main Menu</button>
                </div>
            </div>
            <div className="hs__card" ref={hsRef}>
                <h4>High Score</h4>
                {hs}
                <div className='actions'>
                    <button onClick={newGame}>Back</button>
                </div>
            </div>
        </section>
    )
}

export default GameOver;