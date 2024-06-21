import { writable ,readable} from "svelte/store"
let url =  'https://www.smestoreph.com' //'http://172.165.10.195:9091' ///
let globalUrl = 'https://www.smestoreph.com' ///'http://192.168.254.105:9091' ///

export let imageResponse = writable(null)

export const upload = async(item)=>{
    let parameter = item
    let result = {}
    const formData = new FormData();
    formData.append('imageFile', item);
    var options = { content: formData };
    let response =   await fetch(`${url}/upload`,
    {
        method: 'POST',
        body:   formData
    })
    const data = await response.json();
    return data

}

async function uploadFunction(imgBase64) {
    const data = {}
    const imgData = imgBase64.split(',');
    data["imageFile"] = imgData[1];
    console.log('imageFile',data);

    let calling = await fetch(`${url}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return calling
};
