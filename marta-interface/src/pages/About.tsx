import { Link } from 'react-router-dom'

export default function About() {
    const mapUrl =
        'https://itsmarta.com/uploadedFiles/1008%20x%201224%20Rail%20Map%20%28Ride%20Guide%29%20v2%20112625.pdf'

    return (
        <div>
            <header>
                <h1>About MARTA</h1>
                <Link to="/">Back to Home</Link>
            </header>

            <main>
                <p>
                    MARTA stands for Metropolitan Atlanta Rapid Transit
                    Authority. It provides public transportation in the
                    Atlanta area, helping people travel to work, school,
                    the airport, and other destinations.
                </p>

                <p>
                    This tracker lets you explore the Gold, Red, Green,
                    and Blue lines and filter train arrivals by station
                    and direction.
                </p>

                <h2>MARTA Rail Map</h2>

                <p>
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open the rail map in a new tab
                    </a>
                </p>

                <object
                    data={mapUrl}
                    type="application/pdf"
                    width="100%"
                    height="700"
                    aria-label="MARTA rail map"
                >
                    <p>
                        The map viewer could not load.
                        Use the link above to open the map.
                    </p>
                </object>
            </main>
        </div>
    )
}