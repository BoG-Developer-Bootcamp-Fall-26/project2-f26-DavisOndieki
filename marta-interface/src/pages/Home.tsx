import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <header>
                <h1>MARTA Train Tracker</h1>
                <Link to="/about">About MARTA</Link>
            </header>

            <main className="home-main">
                <h2>Select a Line</h2>

                <nav className="line-links">
                    <Link to="/lines/gold" className="route-card gold">
                        <strong>Gold Line</strong>
                        <span>View arrivals →</span>
                    </Link>

                    <Link to="/lines/red" className="route-card red">
                        <strong>Red Line</strong>
                        <span>View arrivals →</span>
                    </Link>

                    <Link to="/lines/green" className="route-card green">
                        <strong>Green Line</strong>
                        <span>View arrivals →</span>
                    </Link>

                    <Link to="/lines/blue" className="route-card blue">
                        <strong>Blue Line</strong>
                        <span>View arrivals →</span>
                    </Link>
                </nav>
            </main>
        </div>
    )
}