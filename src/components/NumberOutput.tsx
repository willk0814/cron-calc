import { useEffect } from 'react';

interface OutputProps {
    pos: string;
}

export default function NumberOutput({ pos }: OutputProps) {

    useEffect(() => {
        console.log(`Position within cron string: ${pos}`)
    }, []);
    return (
        <div
            className='bg-white bg-opacity-20 flex flex-row justify-between rounded-lg w-[300px] p-2'>
            <h1 className="text-3xl">*</h1>
            <h1 className="text-2xl">minute (0-59)</h1>
        </div>
    )
}
