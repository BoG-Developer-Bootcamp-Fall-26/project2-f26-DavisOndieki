type NavbarProps = {
    stations: string[]
    selectedStation: string
    onSelectStation: (station: string) => void
}

export default function Navbar(props: NavbarProps) {
    function selectAllStations() {
        props.onSelectStation('')
    }

    let allStationsClass = 'station-button'

    if (props.selectedStation === '') {
        allStationsClass = 'station-button selected'
    }

    return (
        <nav className="station-sidebar">
            <p className="eyebrow">YOUR STOP</p>
            <h2>Stations</h2>

            <button
                className={allStationsClass}
                onClick={selectAllStations}
                aria-pressed={props.selectedStation === ''}
            >
                All Stations
            </button>

            {props.stations.map(function(station) {
                function selectStation() {
                    props.onSelectStation(station)
                }

                let buttonClass = 'station-button'

                if (props.selectedStation === station) {
                    buttonClass = 'station-button selected'
                }

                return (
                    <button
                        key={station}
                        className={buttonClass}
                        onClick={selectStation}
                        aria-pressed={props.selectedStation === station}
                    >
                        <span className="station-dot" aria-hidden="true" />
                        {station}
                    </button>
                )
            })}
        </nav>
    )
}