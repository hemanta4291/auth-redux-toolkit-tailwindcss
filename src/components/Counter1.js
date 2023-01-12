import React from 'react'

const Counter1 = (props) => {
  const {incrementByOne,children} = props
  console.log("counter1................")
  return (
    <div>
     <h2> Counter {children}</h2>

      <button className='bg-black text-white px-5 py-3 rounded-full' onClick={incrementByOne}>Increment by 1</button>
      </div>
  )
}

export default React.memo(Counter1)