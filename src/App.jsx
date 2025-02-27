import { useEffect, useState } from "react"


function App() {
  const[date,setDate]=useState(new Date())
  const clock=()=>{
    setInterval(()=>setDate(new Date()),1000)

  }
  useEffect(()=>{
    // code to run when component mount 
    clock()
    return
    //code to run when component unmount
    function clearUp(){
      clearInterval(clock)
    }
  },[])
   // code to run when component update, in the empty dependance array
  return (

    <div className="w-full h-lvh bg-black">

      <div className="flex justify-center items-center font-semibold text-yellow-200 pt-10">
      <h1>Date: {date.toLocaleDateString()}</h1>
      </div>
      <div className="flex justify-center items-center font-semibold text-sky-400">
      <h1>Time: {date.toLocaleTimeString()}</h1>
      </div>
    
    </div>
  )
}

export default App
