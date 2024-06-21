

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


const fetchProducts = async()=>{
    let items = []
    var storeOwner = storeID 
    const parameter = { "id": "Flux-Bouquet", "queryType": "filter", "storeOwner": storeOwner, "isAPI": true,number:200, "showLimit": false,"deliveryDate": "2023-01-01"}
    const request =  await fetch(`${globalUrl}/productV2/Product`,
    {
        method: 'POST',
        body:JSON.stringify(parameter),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    items  = await request.json()
    products.set(items.results)
    productLength.set(items.results.length)
    isLoading.set(false)
    store
    console.log('xxxx',items.results.length)
}
fetchProducts()