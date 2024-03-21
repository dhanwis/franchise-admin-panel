import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


// add delivery
export const adddeliveryboyAPI=async(reqbody,reqheader)=>{
    return await commonAPI(`POST`,`${BASE_URL}/deliveryboys/adddeliveryboy`,reqbody,reqheader)
}



// get deliveryboy
export const deliverboyAPI=async()=>{
    return await commonAPI(`GET`,`${BASE_URL}/deliveryboys/getboy`)
}


// edit delivery boy
export const editdeliveryboyAPI = async(boyid,reqBody,reqheader)=>{
   console.log(boyid);
    return await commonAPI('PUT',`${BASE_URL}/deliveryboys/updateboy/${boyid}`,reqBody,reqheader)
 }


// delete delivery
export const deletedeliveryboyAPI = async(boyId,reqheader)=>{

    return await commonAPI('DELETE',`${BASE_URL}/deliveryboys/remove/${boyId}`,reqheader)
 }


//  add restaurant

export const addRestaurantAPI=async(reqbody,reqheader)=>{
    return  await commonAPI('POST',`${BASE_URL}/restaurants/addrestaurant`,reqbody,reqheader)
  
  
  }

//   get restaurant
export const getallRestaurantAPI=async()=>{
    return await commonAPI(`GET`,`${BASE_URL}/restaurants/getrestaurant`)
}


  

