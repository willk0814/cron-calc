import { useEffect } from 'react';

interface OutputProps {
    val: string;
    pos: string;
    focus: boolean;
    label: string;
}

export default function NumberOutput({ val, pos, focus, label }: OutputProps) {

    useEffect(() => {
        console.log(`Position within cron string: ${pos}`)
    }, []);
    return (
        <div className={`bg-white ${focus ? 'bg-opacity-40' : 'bg-opacity-20'} flex flex-row justify-between rounded-lg w-[300px] p-2`}>
            <div className={`bg-white bg-opacity-20 rounded-lg w-[45px] h-[45px] flex items-center justify-center border-2 ${focus ? 'border-white' : 'border-transparent'}`}>
                <h1 className="text-xl ">{val}</h1>
            </div>
            <h1 className="text-xl flex items-center justify-center">{label}</h1>
        </div>
    )
}
