import React, { createContext, useState } from 'react'

 export const addpetresponsecontext=createContext()

 

 
function Contextshare({children}) {
    const[addpetresponse,setaddpetresponse]=useState({})


   
  return (
    <div>
<addpetresponsecontext.Provider value={{addpetresponse,setaddpetresponse}}>
   {children}
</addpetresponsecontext.Provider>

    </div>
  )
}

export default Contextshare