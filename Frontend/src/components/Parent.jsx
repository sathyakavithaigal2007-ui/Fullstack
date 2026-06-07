import React from 'react'
import Child from './Child'

const Parent = () => {
  return (

    <div>
      <Child
        name="sathya"
        age={18}
        marks={[90, 90, 98, 99, 99]}
        person={{ name: "sathya", dept: "CT" }}
      />
    </div>

  )
}

export default Parent