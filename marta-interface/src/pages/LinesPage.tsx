import { useState } from 'react'
import Train from '../components/Train'


export default function LinesPage() {
    const [currColor, setCurrColor] = useState('gold');

    function selectGold() {
        setCurrColor('gold');
    }

    function selectRed() {
        setCurrColor('red');
    }

    function selectGreen() {
        setCurrColor('green');
    }

    function selectBlue() {
        setCurrColor('blue');
    }

    return (
        <div>
            <h1>MARTA Train Tracker</h1>
            <button onClick={selectGold}>Gold</button>
            <button onClick={selectRed}>Red</button>
            <button onClick={selectGreen}>Green</button>
            <button onClick={selectBlue}>Blue</button>

            <h2>Current line: {currColor}</h2>
            <Train
                destination="Doraville"
                station="MIDTOWN STATION"
                waitingTime="5 min"
                delay="T0S"
            />

        </div>
    )
}