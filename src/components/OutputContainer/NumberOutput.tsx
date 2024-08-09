interface OutputProps {
    val: string;
    // pos: string;
    focus: boolean;
    label: string;
}

export default function NumberOutput({ val, focus, label }: OutputProps) {

    return (
        <div className={`bg-white ${focus ? 'bg-opacity-40' : 'bg-opacity-20'} flex flex-row justify-between items-center rounded-lg w-[300px] p-2`}>

            {/* Value container */}
            <div className={`bg-white bg-opacity-20 rounded-lg w-[45px] h-[45px] flex items-center justify-center border-2 ${focus ? 'border-white' : 'border-transparent'}`}>
                <h1 className="text-xl ">{val}</h1>
            </div>

            {/* Info Container */}

            <div className='bg-gray-700 bg-opacity-70 rounded-md flex p-1 px-2'>
                <h1 className="text-lg font-bold text-blue-300">{val === '﹡' ? `Every ${label}` : `On ${label} ${val}`}</h1>
            </div>
        </div>
    )
}
