import Train from './Train'

type TrainListProps = {
    color: string
}

export default function TrainList(props: TrainListProps) {
    const trains = [
        {
            id: '1',
            line: 'gold',
            destination: 'Doraville',
            station: 'MIDTOWN STATION',
            waitingTime: '5 min',
            delay: 'T0S'
        },
        {
            id: '2',
            line: 'gold',
            destination: 'Airport',
            station: 'NORTH AVENUE STATION',
            waitngTime: '8 min',
            delay: 'T30S'
        },
        {
            id: '3',
            line: 'red',
            destination: 'North Springs',
            station: 'MIDTOWN STATION',
            waitngTime: '3 min',
            delay: 'T0S'
        }
    ]

        const filteredTrains = trains.filter(function(train) {
            return train.line === props.color
        })

        return (
            <div>
                {filteredTrains.map(function(train) {
                    return (
                        <Train
                            key={train.id}
                            destination={train.destination}
                            station={train.station}
                            waitingTime={train.waitingTime}
                            delay={train.delay}

                        />
                    )    
                })}
            </div>
        )

}