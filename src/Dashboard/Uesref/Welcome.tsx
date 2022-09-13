// import { useRef, useState } from "react";

import { useEffect, useRef } from "react"



// export const Welcome = () => {
//     const [myNum, setMyNum] = useState<any>(0);
//     const inputOne =useRef<any>();
//     const inputTwo =useRef<any>();
//     const getNumBox =()=>{
//         console.log("hello")
//         console.log(inputOne.current);
//         inputOne.current.style.width="400px";
//     }
//     const getTextBox =()=>{
//         console.log("hello")
//         console.log(inputTwo.current)
//     }
//     return (
//         <>
//             <input 
//             ref={inputOne}
//                 value={myNum}
//                 type="number"
//                 style={{width:"100px"}}
//         onChange={(e)=>setMyNum(e.target.value)}/>
//             <input
//             ref={inputTwo}
//                 value={myNum}
//                 type="text"onChange={(e)=>setMyNum(e.target.value)}
//             />
//             <h3>Value is:{myNum}</h3>
//             <button  ref={inputOne}
//                onClick={getNumBox}>Rupees</button>
//             <button onClick={getTextBox}>Rupees</button>

//         </>
//     );

// }
export default function Welcome() {
    const paraRef = useRef<null | HTMLParagraphElement>(null)
    useEffect(() => {
        console.log(paraRef.current?.innerHTML) // Hello World
      })
    return <p ref={paraRef}>Hello</p>
  }
