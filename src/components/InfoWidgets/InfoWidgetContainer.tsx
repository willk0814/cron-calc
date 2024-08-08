// motion to animate render
import { motion } from 'framer-motion';

export default function InfoWidgetContainer() {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, x: '-10%' },
                animate: {
                    opacity: 1, x: 0,
                    transition: { when: 'beforeChildren', staggerChildren: 0.3, delay: 1.2 }
                }
            }}
            initial='initial'
            animate='animate'
            className='w-[95vw] max-w-[650px] flex flex-row space-x-2'>
            {[1, 2, 3].map((val, indx) => (
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: '-10%' },
                        animate: { opacity: 1, x: 0 }
                    }}
                    key={val + indx}
                    className="bg-white bg-opacity-20 rounded-lg flex-1 h-[200px]">
                </motion.div>
            ))}
        </motion.div>
    )
}
