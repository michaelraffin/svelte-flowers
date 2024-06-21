

import { writable ,readable} from "svelte/store"
export const products = writable([])
export const productLength = writable(0)
export let isLoading = writable(true)
export const selectedDropDownItem = writable(null)
export let isProductManagement = writable(false)
let globalUrl = 'https://www.smestoreph.com' ///'http://192.168.1.148:9091' ///
const storeID = import.meta.env.VITE_SECRET_API_KEY_APP_ID



const store = writable(0, () => {
    isLoading = false
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});


export const sendSMS = async(parameter)=>{
    try {
        
    let items = []
    var storeOwner = storeID 
    isLoading.set(true)
    
    // const parameter = { "mobile": mobile,  "message":message}
    const request =  await fetch(`${globalUrl}/sendMessage`,
    {
        method: 'POST',
        body:JSON.stringify(parameter),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    items  = await request.json()
    isLoading.set(false)
    return items
    } catch (error) {
        
    }
}
// fetchProducts()

