import React, {useRef, useState} from 'react'
import '../css/GamePage.css'
import PausedPage from './PausedPage'
import GameOver from './GameOver'

const GamePage = () => {

    const timings = [35,40,45,50,55,60,65,70,80,90]

    const [score, setScore] = useState(0)
    let scoreUpdate = 0
    const [lives,setLives] = useState([<i className='fas fa-heart heart'></i>,<i className='fas fa-heart heart'></i>,
    <i className='fas fa-heart heart'></i>,<i className='fas fa-heart heart'></i>,<i className='fas fa-heart heart'></i>])
    let length = lives.length
    let newGameVariable = useRef(false)

    const firstCarrot = useRef('/carrot.png')
    const secondCarrot = useRef('/carrot.png')
    const thirdCarrot = useRef('/carrot.png')
    const forthCarrot = useRef('/carrot.png')
    const fifthCarrot = useRef('/carrot.png')
    const sixthCarrot = useRef('/carrot.png')

    const pausedPageRef = useRef('')
    const gameSectionRef = useRef('')
    const rabbitRef = useRef(450)
    const scoreAreaRef = useRef('')
    const bombRef = useRef('')
    const buttonRef = useRef('')
    const gameOverPageRef = useRef('')
    const nameInput = useRef('')
    const spanRef = useRef('')

    const livesRemaining = (length) => {
        console.log('Length',length)
        const heartArray = []
        if(length !== 0) {
            for (let index = 0; index < length; index++) {
                heartArray.push(<i className='fas fa-heart heart'></i>)
            }
            console.log('Array',heartArray)
            setLives(heartArray)
        } else {
            gameOverFun()
        }
    }
    

    const carrotFlow1 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                firstCarrot.current.src = '/bomb.png';
            } else if (carrot === 7) {
                firstCarrot.current.src = '/carrots.png';
            }else {
                firstCarrot.current.src = '/carrot.png';
            }
            firstCarrot.current.style.top = steps + 'px';
            firstCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('50px',firstCarrot.current.src)
                steps=65
                firstCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            } 
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow2 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                secondCarrot.current.src =  '/bomb.png';
            } else if (carrot === 7) {
                secondCarrot.current.src = '/carrots.png';
            }else {
                secondCarrot.current.src = '/carrot.png';
            }
            secondCarrot.current.style.top = steps + 'px';
            secondCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('250px',secondCarrot.current.src)
                steps=65
                secondCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            } 
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow3 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                thirdCarrot.current.src =  '/bomb.png';
            } else if (carrot === 7) {
                thirdCarrot.current.src = '/carrots.png';
            }else {
                thirdCarrot.current.src = '/carrot.png';
            }
            thirdCarrot.current.style.top = steps + 'px';
            thirdCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('450px', thirdCarrot.current.src)
                steps=65
                thirdCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow4 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                forthCarrot.current.src =  '/bomb.png';
            } else if (carrot === 7) {
                forthCarrot.current.src = '/carrots.png';
            }else {
                forthCarrot.current.src = '/carrot.png';
            }
            forthCarrot.current.style.top = steps + 'px';
            forthCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('650px', forthCarrot.current.src)
                steps=65
                forthCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow5 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                fifthCarrot.current.src = '/bomb.png';
            } else if (carrot === 7) {
                fifthCarrot.current.src = '/carrots.png';
            }else {
                fifthCarrot.current.src = '/carrot.png';
            }
            fifthCarrot.current.style.top = steps + 'px';
            fifthCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('850px', fifthCarrot.current.src)
                steps=65
                fifthCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow6 = (steps) => {
        let carrot = Math.floor((Math.random() * 10) + 1)
        let timing = timings[Math.floor(Math.random() * 10)]
        const flow = window.setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                sixthCarrot.current.src = '/bomb.png';
            } else if (carrot === 7) {
                sixthCarrot.current.src = '/carrots.png';
            }else {
                sixthCarrot.current.src = '/carrot.png';
            }
            sixthCarrot.current.style.top = steps + 'px';
            sixthCarrot.current.style.display = 'inline-flex'
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('1050px',sixthCarrot.current.src)
                steps=65
                sixthCarrot.current.style.display = 'none'
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
            if(newGameVariable.current) {
                clearInterval(flow)
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const checkFeed = (carrotMargin,source) => {
        if(rabbitRef.current.style.left === carrotMargin && source.includes('/carrot.png')) {
            scoreUpdate+=10
            setScore(scoreUpdate)
        } else if (rabbitRef.current.style.left === carrotMargin && source.includes('/bomb.png')) {
            rabbitRef.current.style.display = 'none'
            bombRef.current.style.left =  rabbitRef.current.style.left
            bombRef.current.style.display = 'inline-flex'
            livesRemaining(length--)
            setTimeout(resumeGame, 3000)
        } else if (rabbitRef.current.style.left === carrotMargin && source.includes('/carrots.png')) {
            scoreUpdate+=50
            setScore(scoreUpdate)
        }
    }

    const resumeGame = () => {
        bombRef.current.style.display = 'none'
        rabbitRef.current.style.left = '450px'
        rabbitRef.current.style.display = 'inline-flex'
    }

    const unPause = () => {
        const position = [50,250,450,650,850,1050]
        pausedPageRef.current.style.display = "none"
        gameSectionRef.current.style.opacity = 1
        rabbitRef.current.style.left = position[Math.floor(Math.random() * 10)]+'px'
        rabbitRef.current.style.display = 'inline-flex'
    }

    const sortByScore = (a, b) => {
        if(a.score > b.score) return -1;
        if(a.score < b.score) return 1;
        return 0;
    };

    const storeHighScore = () => {
        console.log('Reached HS')
        let storeScore = null
        if("highscore" in localStorage){
            let highScoreData = JSON.parse(localStorage.getItem("highscore"));
            console.log('initial', highScoreData)
            if(highScoreData.length >=5 && highScoreData[highScoreData.length-1].score > score) {
                console.log(1)
                return
            }
            highScoreData.push({name: nameInput.current.value, score: scoreUpdate})
            highScoreData.sort(sortByScore)
            storeScore = highScoreData.slice(0,5)
        } else {
            storeScore = [{name: nameInput.current.value, score: score}]
        }
        console.log(storeScore)
        localStorage.setItem("highscore", JSON.stringify(storeScore))
    }

    const gameOverFun = () => {
        rabbitRef.current.style.left = '0px'
        rabbitRef.current.style.display = 'none'
        newGameVariable.current = true
        storeHighScore()
        gameOverPageRef.current.style.display = "block"
        scoreAreaRef.current.style.display = 'none'
        gameSectionRef.current.style.opacity = 0.5
    }

    const pausePressed = () => {
        pausedPageRef.current.style.display = "block"
        gameSectionRef.current.style.opacity = 0.5
        rabbitRef.current.style.display = 'none'
        rabbitRef.current.style.left = '0px'
    }

    const exitGame = () => {
        window.location.reload()
    }

    const startGame = () => {
        if(!nameInput.current.value) {
            spanRef.current.style.display = 'block'
        } else {
            livesRemaining(length--)
            scoreAreaRef.current.style.display = 'inline-flex'
            bombRef.current.style.display = 'none'
            buttonRef.current.style.display = 'none'
            carrotFlow1(65)
            carrotFlow2(65)
            carrotFlow3(65)
            carrotFlow4(65)
            carrotFlow5(65)
            carrotFlow6(65)
            rabbitRef.current.style.display = 'inline-flex'
            rabbitRef.current.style.left = 450 + 'px'
        }
    }

    document.onkeydown = (event) => {
        let rabbitPosition = rabbitRef.current.style.left
        let position = parseInt(rabbitPosition.substr(0,rabbitPosition.length-2))
        if(event.key === 'ArrowLeft') {
            if(position !== 0) {
                position-=50
            }
        } else if (event.key === 'ArrowRight') {
            if(position !== 1050) {
                position+=50
            }
        }
        rabbitRef.current.style.left = position + 'px'
    }

    return (
        <section>
            <div id='all'>
                <div className='score-area' ref={scoreAreaRef}>
                    <div className='score-area__score'><h4>Score : {score}</h4></div>
                    <div className='score-area__heart'>{lives}</div>
                    <i onClick= {() => pausePressed()} className="fas fa-pause fa-3x pauseBtn"></i>
                </div>
                <section id='game-section' ref={gameSectionRef}>
                    <div className='game-area'>
                        <div><img className='carrots' id='carrot1' src="/carrot.png" ref={firstCarrot} alt='carrot'/></div>
                        <div><img className='carrots' id='carrot2' src="/carrot.png" ref={secondCarrot} alt='carrot'/></div>
                        <div><img className='carrots' id='carrot3' src="/carrot.png" ref={thirdCarrot} alt='carrot'/></div>
                        <div><img className='carrots' id='carrot4' src="/carrot.png" ref={forthCarrot} alt='carrot'/></div>
                        <div><img className='carrots' id='carrot5' src="/carrot.png" ref={fifthCarrot} alt='carrot'/></div>
                        <div><img className='carrots' id='carrot6' src="/carrot.png" ref={sixthCarrot} alt='carrot'/></div>
                    </div>
                    <div ref={buttonRef} className='startBox'>
                        <span ref={spanRef}>Please Enter Your Name to Start</span>
                        <input type='text' placeholder='Enter Player Name' ref={nameInput}></input>
                        <button className='btn' onClick={startGame}>START</button>
                    </div>
                    <div>
                        <div><img className='rabbit' ref={rabbitRef} src='/bunny.png' alt='bunny'/></div>
                        <div><img className='boom' ref={bombRef} src='/boom.png' alt='busted'/></div>
                    </div>
                </section>
            </div>
            <div id='pausedPage' ref={pausedPageRef}>
                <PausedPage gameResume={unPause} newGameCalled={exitGame}/>
            </div>
            <div id='gameOver' ref={gameOverPageRef}>
                <GameOver playerScore={score} newGameCalled={exitGame}/>
            </div>
        </section>
    )
}

export default GamePage;