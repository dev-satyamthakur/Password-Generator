import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed === true) {
      str += "0123456789";
    }

    if (charsAllowed === true) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random()  * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charsAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-bold mb-2 text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='number' defaultChecked={numbersAllowed} onChange={() => { setNumbersAllowed(!numbersAllowed) }} />
            <label htmlFor="number" className='select-none'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='character' defaultChecked={charsAllowed} onChange={() => { setCharsAllowed(!charsAllowed) }} />
            <label htmlFor="character" className='select-none'>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
