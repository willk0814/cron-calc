// Import Custom Components
import NumberOutput from "./NumberOutput"

export default function OutputContainer() {
    // cron schedule positions and signifigance
    const cron_syntax: { [key: number]: string } = {
        1: 'minutes',
        2: 'hour',
        3: 'day',
        4: 'month',
        5: 'weekday'
    }

    return (
        <div className='flex flex-col space-y-2'>
            {[1, 2, 3, 4, 5].map((indx, val) => (
                <NumberOutput
                    key={indx}
                    pos={cron_syntax[val]} />
            ))}
        </div>
    )
}
