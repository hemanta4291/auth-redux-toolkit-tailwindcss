import React from 'react'

const Counter2 = (props) => {
  const {incrementByFive,children} = props
  console.log("counter 2 ...............")
  return (
    <div>
      <h2>Counter {children}</h2>

      <button className='bg-black text-white px-5 py-3 rounded-full' onClick={incrementByFive}>Increment by 5</button>
      </div>
  )
}

export default React.memo(Counter2)