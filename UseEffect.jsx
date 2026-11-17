import React, { useEffect, useState } from 'react'










const UseEffect = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    
    // No Dependency UseEffect:

    //  useEffect(() => {
    //    console.log("I am No Dependency UseEffect");
       
    //  }, )
     

     //Empty Dependency UseEffect:

    //  useEffect(() => {
       
    //  console.log("I am Empty Dependency UseEffect");
     
       
    //  }, [])



     //Dependency UseEffect:

    //  useEffect(() => {
       
    //  console.log("I am Dependency UseEffect");
     
       
    //  }, [count2])
     
     
     //Re-render Cleanup:

     useEffect(() => {
       
     console.log("Re-rendered");

       return () => {
         console.log("Re-render cleanup");
         
       }
     }, )
     





    const Increment1 =()=> {
        setCount1((curr) => curr +1)
    }

    const Increment2 = () => {
        setCount2((curr) => curr+1)
    }
  

    

  return (
    <div>


        <h1>count1: {count1}</h1>
        <h1>count2 :{count2}</h1>
        <button onClick={Increment1}> Click1</button> <br />
        <button onClick={Increment2}>Click2</button>
    </div>
  )
}

export default UseEffect