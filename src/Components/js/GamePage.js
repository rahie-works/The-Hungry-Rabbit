import React, {useState} from 'react'
import '../css/GamePage.css'
import $ from 'jquery'

const GamePage = () => {

    const timings = [35,40,45,50,55,60,65,70,80,90]
    const [score, setScore] = useState(0)
    let scoreUpdate = 0
    const [lives,setLives] = useState(5)

    const livesRemaining = (noOfLives) => {
        let lifeIndicator = []
        for (let index = 0; index < noOfLives; index++) {
           lifeIndicator.push(<i className='fas fa-heart score-area__heart'></i>)
        }
        return lifeIndicator
    }

    const carrotFlow1 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot1').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot1').src = '/carrots.png';
            } else {
                document.getElementById('carrot1').src = '/carrot.png';
            }
            document.getElementById('carrot1').style.top = steps + 'px';
            $('#carrot1').show()
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot1',document.getElementById('carrot1').src)
                steps=65
                $('#carrot1').hide()
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow2 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot2').src = '/bomb.png';
            }else if (carrot === 7) {
                document.getElementById('carrot2').src = '/carrots.png';
            } else {
                document.getElementById('carrot2').src = '/carrot.png';
            }
            document.getElementById('carrot2').style.top = steps + 'px';
            $('#carrot2').show()
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot2',document.getElementById('carrot2').src)
                steps=65
                $('#carrot2').hide()
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow3 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot3').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot3').src = '/carrots.png';
            } else {
                document.getElementById('carrot3').src = '/carrot.png';
            }
            document.getElementById('carrot3').style.top = steps + 'px';
            $('#carrot3').show()
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot3',document.getElementById('carrot3').src)
                steps=65
                $('#carrot3').hide()
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow4 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot4').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot4').src = '/carrots.png';
            }else {
                document.getElementById('carrot4').src = '/carrot.png';
            }
            document.getElementById('carrot4').style.top = steps + 'px';
            $('#carrot4').show()
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot4',document.getElementById('carrot4').src)
                steps=65
                $('#carrot4').hide() 
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow5 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function () {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot5').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot5').src = '/carrots.png';
            }else {
                document.getElementById('carrot5').src = '/carrot.png';
            }
            document.getElementById('carrot5').style.top = steps + 'px';
            $('#carrot5').show()
            if(steps < 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot5',document.getElementById('carrot5').src)
                steps=65
                $('#carrot5').hide()
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const carrotFlow6 = (steps) => {
        let timing = timings[Math.floor(Math.random() * 10)]
        let carrot = Math.floor((Math.random() * 10) + 1)
        setInterval(function() {
            if(carrot === 9 || carrot === 5) {
                document.getElementById('carrot6').src = '/bomb.png';
            } else if (carrot === 7) {
                document.getElementById('carrot6').src = '/carrots.png';
            }else {
                document.getElementById('carrot6').src = '/carrot.png';
            }
            document.getElementById('carrot6').style.top = steps + 'px';
            $('#carrot6').show()
            if(steps< 450 ) {
                steps+= timing
            } else {
                checkFeed('#carrot6',document.getElementById('carrot6').src)
                steps=65
                $('#carrot6').hide()
                carrot = Math.floor((Math.random() * 10) + 1)
                timing = timings[Math.floor(Math.random() * 10)]
            }
        },Math.floor((Math.random() * 1000) + 200))
    }

    const checkFeed = (carrotId,source) => {
        if($('.rabbit').css('left') === $(carrotId).css('margin-left') && source.includes('/carrot.png')) {
            scoreUpdate+=10
            setScore(scoreUpdate)
        } else if ($('.rabbit').css('left') === $(carrotId).css('margin-left') && source.includes('/bomb.png')) {
            $('.rabbit').hide()
            $('.boom').css('left', $('.rabbit').css('left'))
            $('.boom').show()
        }
    } 

    const startGame = () => {
        $('.boom').hide()
        $('.btn').hide();
        $('.rabbit').css('display', 'inline-flex')
        carrotFlow1(65)
        carrotFlow2(65)
        carrotFlow3(65)
        carrotFlow4(65)
        carrotFlow5(65)
        carrotFlow6(65)
    }

    document.onkeydown = (event) => {
        if(event.key === 'ArrowLeft') {
            if($('.rabbit').css('left') != '0px') {
                $('.rabbit').css('left', '-=50px');
            }
        } else if (event.key === 'ArrowRight') {
            if($('.rabbit').css('left') != '1050px') {
                $('.rabbit').css('left', '+=50px');
            }
        }
    }

    return (
        <div id='all'>
            <div className='score-area'>
                {livesRemaining(lives)}
                <h4 className='score-area__score'>Score : {score}</h4>
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
                <div><img className='boom' id='blast' src='/boom.png' alt='busted'/></div>
            </div>
        </div>
    )
}

export default GamePage;