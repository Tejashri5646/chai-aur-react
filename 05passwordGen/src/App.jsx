import {useState, useCallback, useEffect,useRef} from 'react';
import './App.css'

function App() {
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charactersAllowed, setCharacterAllowed] = useState(false);
const [password,setPassword] = useState("");

// UseRef
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charactersAllowed) str+= "!@#$%^&*()";

  for(let i=1;i<= length;i++){
    let char = Math.floor(Math.random()*str.length +1)
    pass += str.charAt(char)
   
  }
  setPassword(pass)
},[length,numberAllowed,charactersAllowed,setPassword]);

const copyPassword = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,49);
  window.navigator.clipboard.writeText(password)
}, [password])
useEffect(()=>{passwordGenerator()}
,[length,numberAllowed.charactersAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-20 text-gray-200 bg-gray-700'>
      <h1 className='text-2xl text-center py-2 mb-4  text-white'>Password Generator</h1>
        <div className='outline-none flex rounded-lg overflow-hidden  gap-2'>
          <input type="text" value={password} className='outline-none w-full mb-5 py-1 px-3 rounded-lg text-gray-800' placeholder='password' ref={passwordRef} readOnly/>
        <button onClick={copyPassword} className='outline-none h-9 rounded-md bg-indigo-800 text-white px-2 py-0.1 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-4'>
            <input type="range" name='' id='' min={8} max={50} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}}/>
            <label >Length: {length}</label>

          
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}/>Numbers &nbsp;
            <input type="checkbox" defaultChecked={charactersAllowed} id='numberInput' onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}/>Characters
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
