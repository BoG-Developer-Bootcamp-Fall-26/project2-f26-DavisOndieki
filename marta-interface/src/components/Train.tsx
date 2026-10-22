type TrainProps = {
    destination: string
    station: string
    waitingTime: string
    delay: string
}

export default function Train(props: TrainProps) {
    let status = 'Delayed';
    if (props.delay === 'T0S') {
        status = 'On Time'

    }
    return (
        <div> 
            <h2>Destination: {props.destination}</h2>
            <p>Station: {props.station}</p>
            <p>Arrival: {props.waitingTime}</p>
            <p>Status: {status}</p>

        </div>


    )
}
