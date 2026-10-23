import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <header>
                <h1>About MARTA</h1>
                <Link to="/">Back to Home</Link>
            </header>

            <main>
                <p>
                    MARTA stands for Metropolitan Atlanta Rapid Transit
                    Authority. It's the main public transportation system in
                    the Atlanta metropolitan area.
                </p>

                <p>
                    This tracker lets you explore the Gold, Red, Green,
                    and Blue lines and filter train arrivals by station
                    and direction.
                </p>

                <h2>MARTA Rail Map</h2>

                <img
                    src="/marta-map.png"
                    alt="MARTA rail map showing the four train lines and stations"
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        display: 'block',
                        margin: '20px auto'
                    }}
                />
            </main>
        </div>
    )
}