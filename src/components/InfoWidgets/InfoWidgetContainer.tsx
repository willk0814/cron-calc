// motion to animate render
import { motion } from 'framer-motion';

export default function InfoWidgetContainer() {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, y: '-10%' },
                animate: {
                    opacity: 1, y: 0,
                    transition: { when: 'beforeChildren', staggerChildren: 0.3, delay: 1.2 }
                }
            }}
            initial='initial'
            animate='animate'
            className='flex flex-col space-y-2 w-full'>
            {[1, 2, 3].map((val, indx) => (
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-10%' },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    key={val + indx}
                    className="bg-white bg-opacity-20 rounded-lg flex-1 h-[200px] p-3">
                    Test
                </motion.div>
            ))}
        </motion.div>
    )
}
