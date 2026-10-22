import { useEffect, useState } from 'react'
import TrainList from '../components/TrainList'
import type { TrainData } from '../components/TrainList'


export default function LinesPage() {
    const [currColor, setCurrColor] = useState('gold');

    const [data, setData] = useState<TrainData[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(function() {
        // Ignore an old request if the user switches lines.
        let cancelled = false

        setLoading(true)
        setError('')
        setData(null)

        fetch('https://marta-bootcamp-api.vercel.app/arrivals/' + currColor)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Could not load trains.')
                }

                return response.json()
            })
            .then(function(trainData) {
                if (!cancelled) {
                    setData(trainData)
                    setLoading(false)
                }
            })
            .catch(function() {
                if (!cancelled) {
                    setError('Could not load trains. Please try again later.')
                    setLoading(false)
                }
            })

        return function() {
            cancelled = true
        }
    }, [currColor])

    








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

    let trainContent = <p>Loading trains...</p>
    if (error !== '') {
        trainContent = <p>{error}</p>
    } else if (loading === false && data !== null) {
        trainContent = <TrainList color = {currColor} data={data} />
    }

    return (
        <div>
            <h1>MARTA Train Tracker</h1>
            <button onClick={selectGold}>Gold</button>
            <button onClick={selectRed}>Red</button>
            <button onClick={selectGreen}>Green</button>
            <button onClick={selectBlue}>Blue</button>

            <h2>Current line: {currColor}</h2>
            {trainContent}
            

        </div>
    )
}