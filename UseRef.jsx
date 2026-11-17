// import React, { useEffect, useState } from 'react'

// import './App.css'

// import React, { useEffect, useRef} from 'react'


// const UseRef = () => {
  
// const Ref = useRef(0);
// const spanRef = useRef(null);

// useEffect(() => {
//   console.log("UseRef component Re-rendered");

// })

//   const increment =()=>{
//     Ref.current++;
//     spanRef.current.innerText=Ref.current;
  
//   }
//   return (
//     <div>
//       <h1>UseRef</h1>
//       <button onClick={increment}>
//         <span ref ={spanRef}>0</span>
//       </button>
//     </div>
//   )
  
// }

// useEffect(() => {
  
//   console.log("UseRef component Re-rendered");

// }, )
 
//   return (
//     <div>
//       <h1>UseRef</h1>

//       <button onClick={handleclick}>
//         <span ref = {spanRef}>0</span>
//       </button>
//     </div>
//   )
// }

// 


import React ,{useRef} from 'react'

const UseRef =()=>{

  const Ref1 =  useRef(0)
  const Ref2 = useRef(0)
  const Ref3 = useRef(0)


  const handleclick=(ref)=>{

    Ref1.current.style.backgroundColor = ""
    Ref2.current.style.backgroundColor = ""
    Ref3.current.style.backgroundColor = ""
    


    ref.current.focus();
    ref.current.style.backgroundColor = "green"
    


  }


  return (
    <div>
      <input type="text" ref={Ref1}/><br />
      <button onClick={()=>handleclick(Ref1)}>Click1</button><br /><br />

      <input type="text" ref={Ref2}/><br />
      <button onClick={()=>handleclick(Ref2)}>Click2</button><br /><br />
    
    <input type="text" ref={Ref3}/><br />
      <button onClick={()=>handleclick(Ref3)}>Click3</button>
    
    
    </div>
  )
}

export default UseRef
