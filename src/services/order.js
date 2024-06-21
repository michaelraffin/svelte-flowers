import { writable ,readable} from "svelte/store"
export const storeDetails = writable(null)
export const orderOrders = writable([])
export const orderLength = writable(0)
export let isLoading = writable(true)
const storeID = import.meta.env.VITE_SECRET_API_KEY_APP_ID
let globalUrl = 'https://www.smestoreph.com'  //'http://192.168.1.148:9091' //

let currentID  = storeID


// let mm = "6326a69c488d54029f6ccd8b"
// let ndz = "5ff00ddaeb2f5d0940dfa186"
// let flc = "60b1c9a9a001ef1e463d52c2"
let globalID = currentID
const store = writable(0, () => {
    isLoading = false
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});


export const fetchOrders = async(className,mobile)=>{
    let items = []



    const parameter ={
        "queryType": "custom",
        "number": 500,
        "isAPI": true,
        "queryData": {
            "$or": [
                {
                    "storeOwner.id": globalID
                },
                {
                    "ownerID": globalID
                }
                ,
                {
                    "storeDetails": mobile 
                }
            ]
        }
    }
    //  { 
    //     cName: "Category",
    //     cType: "Product",
    //     id: globalID,equalTo:true,  storeOwner: globalID}
    
    const request =  await fetch(`${globalUrl}/store/${className}`,
    {
        method: 'POST',
        body:JSON.stringify(parameter),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    items  = await request.json()
    orderOrders.set(items.results.reverse())
    orderLength.set(items.results.length)
    isLoading.set(false)
    store
    console.log('store orders',items.results)
}

export const updateStore = async(item,className)=>{
    let items = []
    let parameter = item 
    const updateUrl = `${globalUrl}/updateAdminV2/${className}/`
    const url = updateUrl
    const request =  await fetch(url,
    {
        method: 'POST',
        body:  JSON.stringify(parameter),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    items  = await request.json()
    return items
}