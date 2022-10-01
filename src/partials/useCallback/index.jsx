import React, { useCallback, useState } from 'react'
import List from './LIst'

const UseCallback = () => {

    const [number, setNumber] = useState(1)
    
    
    const getItems = useCallback(
      () => {
        return [number,number+1,number+2]
      },
      [number],
    )
    


    return (
        <div>
            <h2>USE CALLBACK</h2>
            <input type="number" value={number} 
                onChange = {
                    event => {
                        if(event.target.value){
                            setNumber(parseInt(event.target.value))
                        }else{
                            setNumber(0)
                        }
                    }
                } />
              
              <List getItems={getItems} />
        </div>


        
    )
}

export default UseCallback