import { useEffect } from 'react';

interface InputProps {
    pos: string;
};

export default function NumberInput({ pos }: InputProps) {

    useEffect(() => {
        console.log(`Position within cron string: ${pos}`)
    }, []);

    return (
        <div className='w-[60px] h-[60px]'>
            <input
                className="bg-white bg-opacity-20 rounded-lg w-full h-full text-center text-3xl border-2 border-transparent
                placeholder-gray-200 placeholder:text-4xl placeholder:py-3
                focus:outline-none focus:border-white focus:border-2"
                maxLength={2}
                placeholder="*" />
        </div>
    )
}
