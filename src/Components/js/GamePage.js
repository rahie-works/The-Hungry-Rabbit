import React, {useState} from 'react'
import '../css/GamePage.css'
import $ from 'jquery'
import Rabbit from './Rabbit'

const GamePage = () => {

    const livesRemaining = () => {
        let lifeIndicator = []
        for (let index = 0; index < 5; index++) {
           lifeIndicator.push(<i className='fas fa-heart score-area__heart'></i>)
        }
        return lifeIndicator
    }

    const carrotFlow1 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot1').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot1').src = '/carrots.png';
            } else {
                document.getElementById('carrot1').src = '/carrot.png';
            }
            document.getElementById('carrot1').style.top = steps + 'px';
            $('#carrot1').show()
            if(steps < 500 ) {
               steps+= timing
            } else {
                steps=65
                $('#carrot1').hide()
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    const carrotFlow2 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot2').src = '/bomb.png';
            }else if (carrot === 7) {
                document.getElementById('carrot2').src = '/carrots.png';
            } else {
                document.getElementById('carrot2').src = '/carrot.png';
            }
            document.getElementById('carrot2').style.top = steps + 'px';
            $('#carrot2').show()
            if(steps < 500 ) {
                steps+= timing
            } else {
                steps=65
                $('#carrot2').hide()
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    const carrotFlow3 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot3').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot3').src = '/carrots.png';
            } else {
                document.getElementById('carrot3').src = '/carrot.png';
            }
            document.getElementById('carrot3').style.top = steps + 'px';
            $('#carrot3').show()
            if(steps < 500 ) {
                steps+= timing
            } else {
                steps=65
                $('#carrot3').hide()
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    const carrotFlow4 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot4').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot4').src = '/carrots.png';
            }else {
                document.getElementById('carrot4').src = '/carrot.png';
            }
            document.getElementById('carrot4').style.top = steps + 'px';
            $('#carrot4').show()
            if(steps < 500 ) {
                steps+= timing
            } else {
                steps=65
                $('#carrot4').hide() 
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    const carrotFlow5 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot5').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot5').src = '/carrots.png';
            }else {
                document.getElementById('carrot5').src = '/carrot.png';
            }
            document.getElementById('carrot5').style.top = steps + 'px';
            $('#carrot5').show()
            if(steps < 500 ) {
                steps+= timing
            } else {
                steps=65
                $('#carrot5').hide()
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    const carrotFlow6 = (steps) => {
        let carrot = 1
        let timing = Math.floor((Math.random() * 100) + 20)
        setInterval(function() {
            if(carrot === 9) {
                document.getElementById('carrot6').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot6').src = '/carrots.png';
            }else {
                document.getElementById('carrot6').src = '/carrot.png';
            }
            document.getElementById('carrot6').style.top = steps + 'px';
            $('#carrot6').show()
            if(steps < 500 ) {
                steps+= timing
            } else {
                steps=65
                $('#carrot6').hide()
                timing = Math.floor((Math.random() * 100) + 20)
                carrot = Math.floor((Math.random() * 10) + 1)
            }
        },Math.floor((Math.random() * 1000) + 100))
    }

    

    const startGame = () => {
        $('.btn').hide();
        $('.rabbit').css('display', 'inline-flex')
        carrotFlow1(65)
        carrotFlow2(65)
        carrotFlow3(65)
        carrotFlow4(65)
        carrotFlow5(65)
        carrotFlow6(65)
    }

    return (
        <div id='all'>
            <div className='score-area'>
                {livesRemaining()}
                <h4 className='score-area__score'>Score :</h4>
            </div>
            <div className='game-area'>
                <div><img className='carrots' id='carrot1' src="/carrot.png" alt='carrot'/></div>
                <div><img className='carrots' id='carrot2' src="/carrot.png" alt='carrot'/></div>
                <div><img className='carrots' id='carrot3' src="/carrot.png" alt='carrot'/></div>
                <div><img className='carrots' id='carrot4' src="/carrot.png" alt='carrot'/></div>
                <div><img className='carrots' id='carrot5' src="/carrot.png" alt='carrot'/></div>
                <div><img className='carrots' id='carrot6' src="/carrot.png" alt='carrot'/></div>
            </div>
                <button className='btn' onClick={startGame}>START</button>
            <div>
                <div><img className='rabbit' id='bunny' src='/bunny.png' alt='bunny'/></div>
            </div>
        </div>
    )
}

export default GamePage;