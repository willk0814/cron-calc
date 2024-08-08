// Import React Hooks
import { useState, useEffect } from 'react';

// Import Custom Component
import NumberInput from "./NumberInput";

// Import motion for animations
import { motion } from 'framer-motion';

// Import Submit Icon
import { IoCopyOutline } from "react-icons/io5";
import InputInfo from './InputInfo';

interface Props {
    handleUpdateCronString: (tmpString: string[]) => void;
    handleChangeFocus: (indx: number | null) => void;
}


export default function InputContainer({ handleUpdateCronString, handleChangeFocus }: Props) {

    // SV to hold label state
    const [toggleLabel, setToggleInfo] = useState<boolean>(false);
    const [displayLabel, setDisplayLabel] = useState<string | null>(null);
    const [displayRange, setDisplayRange] = useState<number[] | null>(null);

    // SV to hold cron strinng
    const [cronString, setCronString] = useState<string[]>(['', '', '', '', ''])

    // SV to hold validity of cron string
    const [validString, setValidString] = useState<boolean>(false);

    // SV to hold focus indx
    const [focusIndx, setFocusIndx] = useState<number | null>(null);

    // cron schedule positions and signifigance
    const cron_syntax = [
        { key: 'minute', label: 'minute', range: [0, 59] },
        { key: 'hour', label: 'hour', range: [0, 23] },
        { key: 'day', label: 'day of the month', range: [1, 31] },
        { key: 'month', label: 'month', range: [1, 12] },
        { key: 'weekday', label: 'day of the week', range: [0, 6] }
    ];


    // --- Number Input Focus Funcs ---
    // handle begin focus
    const handleFocus = (indx: number) => {
        setFocusIndx(indx);
        setDisplayLabel(cron_syntax[indx].label);
        setDisplayRange(cron_syntax[indx].range);
        setToggleInfo(true);
    }

    // handle end focus
    const handleBlur = () => {
        setFocusIndx(null);
        setToggleInfo(false);
    }
    // --- End Number Input Focus Funcs ---

    // --- cronString functions ---
    // handle edits made to the cron string
    const handleEditString = (value: string, indx: number) => {
        setCronString(prev => {
            const newCron = [...prev];
            newCron[indx] = value === '*' ? '﹡' : value;
            return newCron;
        });
    }

    // copy cron string
    const copyToClipboard = () => {
        const formattedCronString = cronString.map(val => val === '' ? '*' : val).join(' ');
        navigator.clipboard.writeText(formattedCronString)
            .then(() => {
                alert('Cron string copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }

    // check to confirm each proposed input is within range
    const checkString = (tmpString: string[]) => {
        for (let i = 0; i < tmpString.length; i++) {
            const val = tmpString[i];
            if (val) {
                const num_val = parseInt(val, 10);
                const range = cron_syntax[i].range;
                if (num_val < range[0] || num_val > range[1]) {
                    return false;
                }

            }
        }
        return true;
    }
    // --- End cronString functions ---

    useEffect(() => {
        setValidString(checkString(cronString));
        handleUpdateCronString(cronString);
    }, [cronString]);

    useEffect(() => {
        handleChangeFocus(focusIndx);
    }, [focusIndx])

    return (
        <div className="flex flex-col items-center">
            {/* Title */}
            <h1 className="text-center text-3xl sm:text-6xl pb-4">Cron Syntax Helper</h1>

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
                className='bg-white bg-opacity-20 rounded-lg flex flex-col items-start pb-2 justify-center px-2 w-[95vw] max-w-fit'>

                {/* Number Inputs & Submit Button */}
                <div className='flex flex-row items-center space-x-2 mt-3 mb-1'>
                    {/* Number Inputs */}
                    {cron_syntax.map((item, indx) => (
                        <NumberInput
                            key={indx}
                            // pos={item.key}
                            handleFocus={() => handleFocus(indx)}
                            handleBlur={handleBlur}
                            value={cronString[indx]}
                            onChange={(value) => handleEditString(value, indx)}
                            range={item.range} />
                    ))}

                    {/* Submit button */}
                    <button
                        className='bg-white bg-opacity-20 p-1 border-2 border-transparent 
                        hover:border-white hover:outline-none focus:outline-none
                        disabled:bg-gray-400 disabled:hover:border-transparent'
                        disabled={!validString}
                        onClick={copyToClipboard}>
                        <IoCopyOutline size={35} color="white" />
                    </button>
                </div>

                {/* Positional Information Label */}
                <InputInfo
                    display={toggleLabel}
                    label={displayLabel}
                    range={displayRange} />
            </motion.div>
        </div>
    )
}
