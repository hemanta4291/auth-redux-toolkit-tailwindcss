import React, { useState,useCallback,useMemo } from 'react'
import Counter1 from '../components/Counter1'
import Counter2 from '../components/Counter2'
import Navigation from '../components/Navigation'
import Title from '../components/Title'

const Home = () => {
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount+1)
  },[])
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount+5)
  },[])

  // const evenOrOdd = useMemo(() => {
  //   let i = 0;
  //   while(i<10000000) i += 1
  //   return count1 % 2 === 0
  // },[count1])

  return (
    <div className='layout_home'>
      <Navigation/>
      <Title/>
      {/* <h1 className='text-2xl'>{evenOrOdd ? "even" : "Odd"}</h1> */}
      <Counter1 incrementByOne={incrementByOne}>
        {count1}
      </Counter1>
      <Counter2 incrementByFive={incrementByFive}>
        {count2}
      </Counter2>

    </div>
  )
}

export default Home