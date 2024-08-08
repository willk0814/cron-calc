// Import Custom Components
import NumberOutput from "./NumberOutput";

// Import motion for animations
import { motion } from 'framer-motion';

interface Props {
    cronString: string[];
    focusIndx: number | null;
}

export default function OutputContainer({ cronString, focusIndx }: Props) {
    // cron schedule positions and signifigance
    const cron_syntax = [
        { key: 'minute', label: 'minute', range: [0, 59] },
        { key: 'hour', label: 'hour', range: [0, 23] },
        { key: 'day', label: 'day of the month', range: [1, 31] },
        { key: 'month', label: 'month', range: [1, 12] },
        { key: 'weekday', label: 'weekday', range: [0, 6] }
    ];

    return (
        <motion.div
            className='flex flex-col space-y-2'
            variants={{
                initial: { opacity: 0, y: '-10%' },
                animate: {
                    opacity: 1, y: 0,
                    transition: { when: 'beforeChildren', staggerChildren: 0.3, delay: 0.5 }
                }
            }}
            initial='initial'
            animate='animate'>
            {cronString.map((val, indx) => (
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-10%' },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                    }}>
                    <NumberOutput
                        key={indx}
                        val={val}
                        // pos={cron_syntax[indx].key}
                        focus={focusIndx === indx}
                        label={cron_syntax[indx].label} />
                </motion.div>
            ))}
        </motion.div>
    )
}
