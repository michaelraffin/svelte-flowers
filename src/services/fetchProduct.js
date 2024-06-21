

import { writable ,readable} from "svelte/store"
export const products = writable([])
export const productLength = writable(0)
export let isLoading = writable(true)
let globalUrl = 'https://www.smestoreph.com'  //'http://192.168.1.148:9091' ///
const storeID = import.meta.env.VITE_SECRET_API_KEY_APP_ID
let mm = "6326a69c488d54029f6ccd8b"
let ndz = "5ff00ddaeb2f5d0940dfa186"
let flc = "60b1c9a9a001ef1e463d52c2"

export let global_id = storeID

const store = writable(0, () => {
    isLoading = false
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});


export const fetchProducts = async(className)=>{
    let items = []
    const parameter = { "id": "park", "queryType": "filter", "storeOwner": global_id, "isAPI": true,number:200, "showLimit": false,"deliveryDate": "2023-02-10"}
    const request =  await fetch(`${globalUrl}/store/${className}`,
    {
        method: 'POST',
        // body:JSON.stringify(parameter),
        // headers: {
        //     'Content-Type': 'application/json'
        //   }
    })
    items  = await request.json()
    products.set(items.results)
    productLength.set(items.results.length)
    isLoading.set(false)
}