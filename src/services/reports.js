

import { writable ,readable} from "svelte/store"
export const salesReport = writable([])
export const salesReportLenght = writable(0)
export const reportComment = writable('')
export const assignedCashier = writable('')
export const preferredDate = writable(new Date())
export let isLoading = writable(true)
let globalUrl = 'https://www.smestoreph.com' //http://192.168.1.148:9091' ///
const storeID = import.meta.env.VITE_SECRET_API_KEY_APP_ID



const store = writable(0, () => {
    isLoading = false
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});


export const fetchReport = async(className,id)=>{
    let items = []
    const parameter = { "id": "Flux-Bouquet", "queryType": "all", "storeowner":storeID, "isAPI": true,number:20, "showLimit": true,"deliveryDate": "2023-01-01"}
    const request =  await fetch(`${globalUrl}/store/${className}`,
    {
        method: 'POST',
        body:JSON.stringify(parameter)
    })
    items  = await request.json()
    salesReport.set(items.results)
    salesReportLenght.set(items.results.length)
    isLoading.set(false)
    store 
}

export const fetchReportV2 = async(className,payload)=>{
    let items = []
    
    const request =  await fetch(`${globalUrl}/store/${className}`,
    {
        method: 'POST',
        body:JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    items  = await request.json()
    salesReport.set(items.results)
    salesReportLenght.set(items.results.length)
    return items
}
