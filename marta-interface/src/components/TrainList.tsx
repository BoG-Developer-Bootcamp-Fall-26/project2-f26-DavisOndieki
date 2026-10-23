import Train from './Train'

export type TrainData = {
    TRAIN_ID: string
    LINE: string
    DESTINATION: string
    STATION: string
    WAITING_TIME: string
    DIRECTION: string
    IS_REALTIME: string
    DELAY?: string
}

type TrainListProps = {
    color: string
    data: TrainData[]
    selectedStation: string
    arriving: boolean
    scheduled: boolean
    firstDirection: boolean
    secondDirection: boolean
}

export default function TrainList(props: TrainListProps) {
    let firstDirectionCode = 'N'
    let secondDirectionCode = 'S'

    if (props.color === 'green' || props.color === 'blue') {
        firstDirectionCode = 'E'
        secondDirectionCode = 'W'
    }

    const filteredTrains = props.data.filter(function(train) {
        if (train.LINE !== props.color.toUpperCase()) {
            return false
        }

        if (props.selectedStation !== '') {
            if (
                train.STATION.toUpperCase() !==
                props.selectedStation.toUpperCase()
            ) {
                return false
            }
        }

        if (props.arriving || props.scheduled) {
            let matchesArrival = false

            if (props.arriving && train.WAITING_TIME === 'Arriving') {
                matchesArrival = true
            }

            if (props.scheduled && train.IS_REALTIME === 'false') {
                matchesArrival = true
            }

            if (matchesArrival === false) {
                return false
            }
        }

        if (props.firstDirection || props.secondDirection) {
            let matchesDirection = false

            if (
                props.firstDirection &&
                train.DIRECTION === firstDirectionCode
            ) {
                matchesDirection = true
            }

            if (
                props.secondDirection &&
                train.DIRECTION === secondDirectionCode
            ) {
                matchesDirection = true
            }

            if (matchesDirection === false) {
                return false
            }
        }

        return true
    })

    if (filteredTrains.length === 0) {
        return <p>No current trains match your filters.</p>
    }

    return (
        <div>
            {filteredTrains.map(function(train, index) {
                return (
                    <Train
                        key={index}
                        destination={train.DESTINATION}
                        station={train.STATION}
                        waitingTime={train.WAITING_TIME}
                        delay={train.DELAY}
                    />
                )
            })}
        </div>
    )
}