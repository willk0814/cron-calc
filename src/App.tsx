// Import styles
import './App.css'

// Import React Hooks
import { useState } from 'react';

// Import Custom Components
import InputContainer from './components/InputContainer/InputContainer';
import OutputContainer from './components/OutputContainer/OutputContainer';
import InfoWidgetContainer from './components/InfoWidgets/InfoWidgetContainer';

// Import motion for animations
// import { motion } from 'framer-motion';

function App() {

  // SV to hold cron string
  const [cronString, setCronString] = useState<string[]>(['', '', '', '', ''])

  // SV to hold focus indx
  const [focusIndx, setFocusIndx] = useState<number | null>(null);

  // function to handle setting cron string
  const handleUpdateCronString = (tmpString: string[]) => {
    const formattedTmpString = tmpString.map(val => val === '' ? '﹡' : val);
    console.log('called w/ tmpString: ', formattedTmpString)
    setCronString(formattedTmpString)
  }

  const handleChangeFocus = (indx: number | null) => {
    setFocusIndx(indx);
  }


  return (
    <div
      className='bg-gradient-to-br from-[#3F5EFB] to-[#FC466B]
      w-[100vw] h-[100vh] flex flex-col space-y-5 items-center justify-start pt-8'>

      {/* Input Content Container */}
      <InputContainer
        handleUpdateCronString={handleUpdateCronString}
        handleChangeFocus={handleChangeFocus} />

      {/* Output Content Container */}
      <OutputContainer
        cronString={cronString}
        focusIndx={focusIndx} />

      {/* Additional Output & Links */}
      <InfoWidgetContainer />

    </div>
  )
}

export default App
