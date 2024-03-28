import React, { createContext, useState } from "react";

<<<<<<< HEAD
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

=======
export const addpetresponsecontext = createContext();

function Contextshare({ children }) {
  const [addpetresponse, setaddpetresponse] = useState({});
  

  return (
    <div>
      <addpetresponsecontext.Provider
        value={{ addpetresponse, setaddpetresponse }}
      >
        {children}
      </addpetresponsecontext.Provider>
>>>>>>> 2d1354b8f57fb53d4e205c63c7fb991a8e9c7cdd
    </div>
  );
}

export default Contextshare;
