import React from 'react'
import '../css/PausedPage.css'

const PausedPage = (props) => {

    const continueGame = () => {
        props.gameResume()
    }

    const newGame = () => {
        props.newGameCalled()
    }

    return (
        <div className='pause__card'>
            <h3>GAME PAUSED</h3>
            <div className='actions'>
                <button onClick={continueGame}>Resume</button>
                <button onClick={newGame}>Exit</button>
            </div>
        </div>
    )
}

export default PausedPage;