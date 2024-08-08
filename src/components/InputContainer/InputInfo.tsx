interface Props {
    label: string | null;
    range: number[] | null;
};

export default function InputInfo({ label, range }: Props) {
    console.log(label)
    return (
        <div className="flex flex-row space-x-2 w-full">

            <div className='bg-gray-700 bg-opacity-70 rounded-md flex p-1'>
                <h1 className="text-xl">{range ? `[${range[0]} - ${range[1]}]` : ''}</h1>
            </div>

            <div className='bg-gray-700 bg-opacity-70 rounded-md flex p-1'>
                <h1 className="text-xl">{label ? `${label}` : ''}</h1>
            </div>
        </div>
    )
}
