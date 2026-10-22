import Train from './Train'

export type TrainData = {
    TRAIN_ID: string
    LINE: string
    DESTINATION: string
    STATION: string
    WAITING_TIME: string
    DIRECTION: string
    DELAY?: string
}

type TrainListProps = {
    color: string
    data: TrainData[]

}

export default function TrainList(props: TrainListProps) {



    /* Dummy Data
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
            waitingTime: '8 min',
            delay: 'T30S'
        },
        {
            id: '3',
            line: 'red',
            destination: 'North Springs',
            station: 'MIDTOWN STATION',
            waitingTime: '3 min',
            delay: 'T0S'
        }
    ]
    */    

        const filteredTrains = props.data.filter(function(train) {
            return train.LINE === props.color.toUpperCase()

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