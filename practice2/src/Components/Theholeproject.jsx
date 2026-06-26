import React, { useRef } from 'react'

function Theholeproject() {
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  const handleClick = () => {
    buttonRef.current.textContent = inputRef.current.value
  }

  return (
    <div className='flex flex-col w-[500px] h-[200px] bg-blue-600/60 justify-center items-center rounded-3xl'>
      <input type="text"
      className='bg-white w-[300px] h-auto justify-center items-center m-6 text-center'
      ref={inputRef} />

      <button 
      className='bg-red-500 rounded-3xl w-[300px]' ref={buttonRef} onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default Theholeproject