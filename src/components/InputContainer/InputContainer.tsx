// Import React Hooks
import { useState } from 'react';

// Import Custom Component
import NumberInput from "./NumberInput";

// Import motion for animations
import { animate, AnimatePresence, motion } from 'framer-motion';

// Import Submit Icon
import { IoCopyOutline } from "react-icons/io5";


export default function InputContainer() {

    // SV to hold label state
    const [displayLabel, setDisplayLabel] = useState<string | null>(null)

    // -- Number Input Focus Funcs -- 
    // handle begin focus
    const handleFocus = (label: string) => {
        console.log(label)
        setDisplayLabel(label)
    }

    // handle end focus
    const handleBlur = () => {
        setDisplayLabel(null)
    }

    // cron schedule positions and signifigance
    const cron_syntax = [
        { key: 'minute', label: 'minute (0 - 59)' },
        { key: 'hour', label: 'hour (0 - 23)' },
        { key: 'day', label: 'day of the month (1 - 31)' },
        { key: 'month', label: 'month (1 - 12)' },
        { key: 'weekday', label: 'day of the week (0 - 6) (Sunday to Saturday)' }
    ];

    return (
        <div className="flex flex-col">
            {/* Title */}
            <h1 className="pb-4">Cron Syntax Helper</h1>

            <motion.div
                variants={{
                    initial: { opacity: 0, y: '20%' },
                    animate: {
                        opacity: 1, y: 0,
                        transition: { delay: 0.4, duration: 1 }
                    }
                }}
                initial='initial'
                animate='animate'
                className='bg-white bg-opacity-20 rounded-lg flex flex-col items-center pb-2 justify-center px-2'>

                {/* Number Inputs & Submit Button */}
                <div className='flex flex-row items-center space-x-2 mt-3 mb-1'>
                    {/* Number Inputs */}
                    {cron_syntax.map((item, indx) => (
                        <NumberInput
                            key={indx}
                            pos={item.key}
                            handleFocus={() => handleFocus(item.label)}
                            handleBlur={handleBlur} />
                    ))}

                    {/* Submit button */}
                    <button
                        className='bg-white bg-opacity-20 p-1 border-2 border-transparent 
                        hover:border-white hover:outline-none focus:outline-none'>
                        <IoCopyOutline size={35} color="white" />
                    </button>
                </div>

                {/* Positional Information Label */}
                {/* Fixed height container for label */}
                <AnimatePresence
                    key='label'>
                    {/* {displayLabel !== null && */}
                    <motion.div
                        key='label'
                        variants={{
                            initial: { height: 0, opacity: 0 },
                            animate: {
                                height: '30px', opacity: 1,
                                transition: { when: 'beforeChildren' }
                            },
                            exit: {
                                height: 0, opacity: 0,
                                transition: { when: 'afterChildren' }
                            }
                        }}
                        initial='initial'
                        animate={displayLabel !== null ? 'animate' : ''}
                        exit='exit'
                        className='flex flex-row w-full'>
                        {displayLabel}
                    </motion.div>
                </AnimatePresence>

            </motion.div>
        </div>
    )
}
