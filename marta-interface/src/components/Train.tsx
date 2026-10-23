type TrainProps = {
    destination: string
    station: string
    waitingTime: string
    delay?: string
}

export default function Train(props: TrainProps) {
    let status = 'Delayed'
    let statusColor = 'red'

    if (props.delay === 'T0S') {
        status = 'On Time'
        statusColor = 'green'
    }

    if (props.delay === undefined) {
        status = 'Status unavailable'
        statusColor = 'gray'
    }

    return (
        <article className="train-row">
            <span className="train-letter" aria-hidden="true">M</span>

            <div className="train-info">
                <p>
                    {props.station} → {props.destination}
                </p>

                <p style={{ color: statusColor }}>
                    {status}
                </p>
            </div>

            <span className="train-time">
                {props.waitingTime}
            </span>
        </article>
    )
}