import { useState } from 'react';

interface InputProps {
    // pos: string;
    handleFocus: () => void;
    handleBlur: () => void;
    value: string;
    onChange: (value: string) => void;
    range: number[];
};

export default function NumberInput({ handleFocus, handleBlur, value, onChange, range }: InputProps) {

    // SV to hold out of bounds
    const [outOfBounds, setOutOfBounds] = useState<boolean>(false);

    // function to handle change to input value
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input_str = e.target.value;
        // confirm value is not empty
        if (input_str) {
            const input_val = parseInt(input_str, 10);

            // confirm value is in bounds
            if (input_val < range[0] || input_val > range[1]) {
                setOutOfBounds(true);
            } else {
                setOutOfBounds(false);
            }
        } else {
            setOutOfBounds(false);
        }
        // call parent handler
        onChange(input_str)
    }

    return (
        <div className='w-[60px] h-[60px]'>
            <input
                className={`bg-white bg-opacity-20 rounded-lg w-full h-full text-center text-4xl 
                border-2 ${outOfBounds ? 'border-red-600' : 'border-transparent'}
                placeholder-gray-200 placeholder:py-3
                focus:outline-none focus:${outOfBounds ? 'border-red-600' : 'border-white'} focus:border-2`}
                maxLength={2}
                placeholder="﹡"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChange={handleChange} />
        </div>
    )
}
