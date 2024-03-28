import React, { createContext, useState } from "react";

 export const addpetresponsecontext=createContext()
 export const addrestaurantresponsecontext=createContext()

 
 

 
function Contextshare({children}) {
    const[addpetresponse,setaddpetresponse]=useState({})
    const[addrestaurantresponse,setaddrestaurantresponse]=useState({})


   
  return (
    <div>
<addpetresponsecontext.Provider value={{addpetresponse,setaddpetresponse}}>
 <addrestaurantresponsecontext.Provider value={{addrestaurantresponse,setaddrestaurantresponse}}>{children}</addrestaurantresponsecontext.Provider>
</addpetresponsecontext.Provider>

    </div>
  );
}

export default Contextshare;
