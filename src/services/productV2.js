

import { writable ,readable} from "svelte/store"
export const products = writable([])
export const productLength = writable(0)
export let isLoading = writable(true)
export const selectedDropDownItem = writable(null)
export let isProductManagement = writable(false)

let globalUrl = 'https://www.smestoreph.com' ///'http://192.168.254.105:9091' ///


 

export const UploaderProduct = async(item)=>{
    const request =  await fetch(`${globalUrl}/addItem/Inventory`,
    {
        method: 'POST',
        body:JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
          }
    })
return  request

}