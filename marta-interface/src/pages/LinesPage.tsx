import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TrainList from '../components/TrainList'
import type { TrainData } from '../components/TrainList'
import Navbar from '../components/Navbar'

type LinesPageProps = {
    initialColor: string
}

export default function LinesPage(props: LinesPageProps) {
    const navigate = useNavigate()

    const [currColor, setCurrColor] = useState(props.initialColor)

    const [data, setData] = useState<TrainData[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [stations, setStations] = useState<string[]>([])
    const [selectedStation, setSelectedStation] = useState('')
    const [stationError, setStationError] = useState('')

    const [arriving, setArriving] = useState(false)
    const [scheduled, setScheduled] = useState(false)
    const [firstDirection, setFirstDirection] = useState(false)
    const [secondDirection, setSecondDirection] = useState(false)

    useEffect(function() {
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

    useEffect(function() {
        let cancelled = false

        setStations([])
        setSelectedStation('')
        setStationError('')

        fetch('https://marta-bootcamp-api.vercel.app/stations/' + currColor)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Could not load stations.')
                }

                return response.json()
            })
            .then(function(stationData) {
                if (!cancelled) {
                    setStations(stationData)
                }
            })
            .catch(function() {
                if (!cancelled) {
                    setStationError('Could not load stations.')
                }
            })

        return function() {
            cancelled = true
        }
    }, [currColor])

    function changeLine(color: string) {
        setCurrColor(color)
        setSelectedStation('')
        setArriving(false)
        setScheduled(false)
        setFirstDirection(false)
        setSecondDirection(false)

        navigate('/lines/' + color)
    }

    function selectGold() {
        changeLine('gold')
    }

    function selectRed() {
        changeLine('red')
    }

    function selectGreen() {
        changeLine('green')
    }

    function selectBlue() {
        changeLine('blue')
    }

    function selectStation(station: string) {
        setSelectedStation(station)
    }

    function toggleArriving() {
        setArriving(!arriving)
    }

    function toggleScheduled() {
        setScheduled(!scheduled)
    }

    function toggleFirstDirection() {
        setFirstDirection(!firstDirection)
    }

    function toggleSecondDirection() {
        setSecondDirection(!secondDirection)
    }

    let firstDirectionLabel = 'Northbound'
    let secondDirectionLabel = 'Southbound'

    if (currColor === 'green' || currColor === 'blue') {
        firstDirectionLabel = 'Eastbound'
        secondDirectionLabel = 'Westbound'
    }

    function filterStyle(active: boolean) {
        let backgroundColor = 'white'

        if (active) {
            backgroundColor = 'lightblue'
        }

        return {
            backgroundColor: backgroundColor,
            color: 'black',
            padding: '8px',
            margin: '4px',
            border: '1px solid black',
            cursor: 'pointer'
        }
    }

    let trainContent = <p>Loading trains...</p>

    if (error !== '') {
        trainContent = <p>{error}</p>
    } else if (loading === false && data !== null) {
        trainContent = (
            <TrainList
                color={currColor}
                data={data}
                selectedStation={selectedStation}
                arriving={arriving}
                scheduled={scheduled}
                firstDirection={firstDirection}
                secondDirection={secondDirection}
            />
        )
    }

    return (
        <div>
            <header>
                <h1>MARTA Train Tracker</h1>

                <Link to="/">Home</Link>
                {' | '}
                <Link to="/about">About</Link>
            </header>

            <main>
                <div>
                    <button onClick={selectGold}>Gold</button>
                    <button onClick={selectRed}>Red</button>
                    <button onClick={selectGreen}>Green</button>
                    <button onClick={selectBlue}>Blue</button>
                </div>

                <h2>Current line: {currColor}</h2>

                <Navbar
                    stations={stations}
                    selectedStation={selectedStation}
                    onSelectStation={selectStation}
                />

                <p>{stationError}</p>

                <div>
                    <button
                        onClick={toggleArriving}
                        style={filterStyle(arriving)}
                        aria-pressed={arriving}
                    >
                        Arriving
                    </button>

                    <button
                        onClick={toggleScheduled}
                        style={filterStyle(scheduled)}
                        aria-pressed={scheduled}
                    >
                        Scheduled
                    </button>

                    <button
                        onClick={toggleFirstDirection}
                        style={filterStyle(firstDirection)}
                        aria-pressed={firstDirection}
                    >
                        {firstDirectionLabel}
                    </button>

                    <button
                        onClick={toggleSecondDirection}
                        style={filterStyle(secondDirection)}
                        aria-pressed={secondDirection}
                    >
                        {secondDirectionLabel}
                    </button>
                </div>

                {trainContent}
            </main>
        </div>
    )
}