import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

  const [inputValue, setInputValue] = useState("");

  const previousInputValue = useRef("")

  useEffect(() => {

    previousInputValue.current = inputValue

  }, [inputValue]);


  return (
    <React.Fragment>
      <h2>USEREF</h2>
      <input 
        type="text"
        value={inputValue}
        onChange = { (event) => setInputValue(event.target.value)}  
        
      />

      <h5>Current value: {inputValue}</h5>
      <h5>Previous value: {previousInputValue.current}</h5>

    
    </React.Fragment>
  )
}

export default UseRef