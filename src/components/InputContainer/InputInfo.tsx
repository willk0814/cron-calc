import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    display: boolean;
    label: string | null;
    range: number[] | null;
};

export default function InputInfo({ display, label, range }: Props) {

    return (
        <AnimatePresence
            key='label'>

            {/* Expanding Container for Input Info */}
            <motion.div
                key='label'
                variants={{
                    initial: { height: 0, opacity: 0 },
                    animate: {
                        height: '45px', opacity: 1,
                        transition: { when: 'beforeChildren' }
                    },
                    exit: {
                        height: 0, opacity: 0,
                        transition: { when: 'afterChildren' }
                    }
                }}
                initial='initial'
                animate={display ? 'animate' : ''}
                exit='exit'
                className='flex flex-row items-center w-full'>

                {/* Row Container for Info Tiles */}
                <div className="flex flex-row space-x-2 w-full">

                    {/* Range Info */}
                    <div className='bg-gray-700 bg-opacity-70 rounded-md flex py-1'>
                        <h1
                            className="text-xl font-bold text-green-500">
                            {range ? `［${range[0]} - ${range[1]}］` : ''}
                        </h1>
                    </div>

                    {/* Label Info */}
                    <div className='bg-gray-700 bg-opacity-70 rounded-md flex p-1 px-2'>
                        <h1
                            className="text-xl font-bold text-orange-300">
                            {label ? `${label}` : ''}
                        </h1>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
