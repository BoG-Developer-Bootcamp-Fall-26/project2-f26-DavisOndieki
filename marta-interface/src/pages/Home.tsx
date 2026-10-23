import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <header>
                <h1>MARTA Train Tracker</h1>
                <Link to="/about">About MARTA</Link>
            </header>

            <main>
                <h2>Where are you headed?</h2>
                <p>Select a line to view trains and arrival information.</p>

                <nav className="line-links">
                    <Link to="/lines/gold">Gold Line</Link>
                    {' | '}
                    <Link to="/lines/red">Red Line</Link>
                    {' | '}
                    <Link to="/lines/green">Green Line</Link>
                    {' | '}
                    <Link to="/lines/blue">Blue Line</Link>
                </nav>
            </main>
        </div>
    )
}