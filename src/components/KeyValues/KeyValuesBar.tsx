// Import motion for render annimation
import { motion } from 'framer-motion';

export default function KeyValuesBar() {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, y: '20%' },
                animate: {
                    opacity: 1, y: 0,
                    transition: { delay: 0.1, duration: 1 }
                }
            }}
            initial='initial'
            animate='animate'
            className='flex flex-row w-[95vw] max-w-[750px] bg-white bg-opacity-20 p-2 rounded-lg space-x-2'>

            <div className='bg-gray-500 bg-opacity-70 rounded-md p-1 px-2 flex flex-row items-center space-x-2 w-full justify-between'>
                <h1 className='text-xl'>any value</h1>
                <div className='bg-gray-700 bg-opacity-70 rounded-md p-1 px-2'>
                    <h1 className='text-2xl text-blue-300'>﹡</h1>
                </div>
            </div>


            <div className='bg-gray-500 bg-opacity-70 rounded-md p-1 px-2 flex flex-row items-center space-x-2 w-full justify-between'>
                <h1 className='text-xl'>range</h1>
                <div className='bg-gray-700 bg-opacity-70 rounded-md p-1 px-2'>
                    <h1 className='text-2xl text-blue-300'>-</h1>
                </div>
            </div>

            <div className='bg-gray-500 bg-opacity-70 rounded-md p-1 px-2 flex flex-row items-center space-x-2 w-full justify-between'>
                <h1 className='text-xl'>list seperator</h1>
                <div className='bg-gray-700 bg-opacity-70 rounded-md p-1 px-2'>
                    <h1 className='text-2xl text-blue-300'>,</h1>
                </div>
            </div>

            <div className='bg-gray-500 bg-opacity-70 rounded-md p-1 px-2 flex flex-row items-center space-x-2 w-full justify-between'>
                <h1 className='text-xl'>step values</h1>
                <div className='bg-gray-700 bg-opacity-70 rounded-md p-1 px-2'>
                    <h1 className='text-2xl text-blue-300'>/</h1>
                </div>
            </div>
        </motion.div>
    )
}
