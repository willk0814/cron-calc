import './App.css'
import NumberInput from './components/NumberInput'

function App() {

  // cron schedule positions and signifigance
  const cron_syntax: { [key: number]: string } = {
    1: 'minutes',
    2: 'hour',
    3: 'day',
    4: 'month',
    5: 'weekday'
  }

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-br from-[#3F5EFB] to-[#FC466B]'>

      {/* Content Container */}
      <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded-lg flex flex-col items-center justify-center p-4'>
        {/* Title */}
        <h1 className='text-6xl pb-4'>Cron Syntax Helper</h1>

        {/* Number Inputs Container */}
        <div className='flex flex-row items-center space-x-2'>
          {[1, 2, 3, 4, 5].map((val, indx) => (
            <NumberInput
              key={indx}
              pos={cron_syntax[val]} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
