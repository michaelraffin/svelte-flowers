<script>
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Calendar } from '$lib/components/ui/calendar';
	import { today, getLocalTimeZone } from '@internationalized/date';
	import Cart from '$lib/components/local/cart.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	let value = today(getLocalTimeZone());
	let checked = false;
</script>

<div class="ml-20 mr-20 mt-20 flex items-center space-x-2">
	<Button>Click me</Button>
	<Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Accept terms and conditions
	</Label>
</div>
<div class="m-20 w-80">
	<Calendar bind:value class="rounded-md border" />
</div>
<Cart />
