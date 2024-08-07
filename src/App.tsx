import './App.css'
// Import React Hooks
import { useState } from 'react';
// Import Custom Components
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';
// Import Packages
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { motion } from 'framer-motion';

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
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#3F5EFB] to-[#FC466B]'>

      {/* Initial Content Container */}
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

          {/* Submit Button */}
          <button
            className='bg-white bg-opacity-20 p-1 rounded-md border-2 border-transparent focus:outline-none focus:border-white'>
            <MdSubdirectoryArrowLeft size={35} color='white' />
          </button>
        </div>
      </div>

      <motion.div
        className='flex flex-col mt-4 space-y-2'
        variants={{
          initial: { opacity: 0, y: '-10px' },
          animate: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.5, duration: 0.5 }
          }
        }}
        initial='initial'
        animate='animate' >
        {[1, 2, 3, 4, 5].map((val, indx) => (
          <motion.div
            variants={{
              initial: { opacity: 0, y: '-10px' },
              animate: {
                opacity: 1, y: 0,
                transition: { duration: 0.6 }
              }
            }}>
            <NumberOutput
              key={indx}
              pos={cron_syntax[val]} />
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default App
