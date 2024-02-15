export async function fetchData(): Promise<any> {
	try {
		let payload = {
			id: 'Flux-Bouquet', //'VALENTINESDAY', //
			queryType: 'filter',
			storeOwner: '60b1c9a9a001ef1e463d52c2', //'5ff00ddaeb2f5d0940dfa186', //
			isAPI: false,
			showLimit: true,
			number: 100,
			deliveryDate: '2024-03-20'
		};
		const response = await fetch('https://www.smestoreph.com/productV2/Product', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' // Adjust content type as per your API requirements
			},
			body: JSON.stringify(payload)
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
