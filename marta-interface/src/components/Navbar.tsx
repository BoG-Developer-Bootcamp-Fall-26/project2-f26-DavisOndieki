type NavbarProps = {
    stations: string[]
    selectedStation: string
    onSelectStation: (station: string) => void
}

export default function Navbar(props: NavbarProps) {
    function selectAllStations() {
        props.onSelectStation('')
    }

    return (
        <nav>
            <h2>Stations</h2>
            <button onClick={selectAllStations}>
                All Stations
            </button>

            {props.stations.map(function(station) {
                function selectStation() {
                    props.onSelectStation(station)
                }

                let backgroundColor = 'white'
                if (props.selectedStation === station) {
                    backgroundColor = 'gold'
                }

                return (
                    <button
                        key={station}
                        onClick={selectStation}
                        style={{
                            backgroundColor: backgroundColor,
                            color: 'black',
                            padding: '8px',
                            margin: '4px',
                            border: '1px solid black'
                        }}
                    >
                        {station}
                    </button>
                )
            })}
        </nav>
    )
}