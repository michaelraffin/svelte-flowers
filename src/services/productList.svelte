<script>
    import {onMount} from 'svelte'
    let items = []

    onMount(async ()=>{
        const parameter = { "id": "Flux-Bouquet", "queryType": "filter", "storeOwner": "5ff00ddaeb2f5d0940dfa186", "isAPI": false, "showLimit": true }
        const request =  await fetch('https://www.smestoreph.com/store/Product',
        {
			method: 'POST',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			},body:JSON.stringify(parameter)
		})
        items  = await request.json()
        console.log('request',items.results)
    })
</script>