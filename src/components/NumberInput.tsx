import { useEffect } from 'react';

interface InputProps {
    pos: string;
};

export default function NumberInput({ pos }: InputProps) {

    useEffect(() => {
        console.log(`Position within cron string: ${pos}`)
    }, []);

    return (
        <div>
            <input
                className="bg-white bg-opacity-20 rounded-lg w-[60px] text-center p-2 text-3xl border-2 border-transparent
                placeholder-white placeholder:text-3xl
                focus:outline-none focus:border-white focus:border-2"
                placeholder="*" />
        </div>
    )
}
