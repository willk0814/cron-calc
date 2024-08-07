// Import styles
import './App.css'

// Import React Hooks
// import { useState } from 'react';

// Import Custom Components
import InputContainer from './components/InputContainer/InputContainer';
// import OutputContainer from './components/OutputContainer/OutputContainer';

// Import motion for animations
// import { motion } from 'framer-motion';

function App() {

  return (
    <div
      className='bg-gradient-to-br from-[#3F5EFB] to-[#FC466B]
      w-[100vw] h-[100vh] flex flex-col space-y-2 items-center justify-center '>

      {/* Input Content Container */}
      <InputContainer />

      {/* Output Content Container */}

    </div>
  )
}

export default App
