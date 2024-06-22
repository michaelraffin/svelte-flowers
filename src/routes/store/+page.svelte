<script>
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Calendar } from '$lib/components/ui/calendar';
	import { today, getLocalTimeZone } from '@internationalized/date';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';
	import Cart from '$lib/components/local/cart.svelte';
	import { fetchData } from '$lib/../services/axios';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Drawer from '$lib/components/ui/drawer';

	let value = today(getLocalTimeZone());
	let checked = false;
	let response = [];

	onMount(async () => {
		fetchData().then((item) => {
			response = item.results;
			console.log(response);
		});
	});
	function formatPeso(rate) {
		return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(rate);
	}
</script>

<div class="ml-20 mr-20 mt-20 flex items-center space-x-2">
	<!-- <p>Welcome to Dashboard</p> -->
	<!-- <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Accept terms and conditions
	</Label> -->
</div>
<div class="w-100 m-4 lg:m-20">
	<!-- <Calendar bind:value class="rounded-lg border " /> -->
</div>

<Skeleton class="h-[100px] w-[100px] " />
<div class="m-2 grid grid-cols-2 gap-4 lg:m-10 lg:grid-cols-4">
	{#each response as item}
		<a
			href="javascript:void(0);"
			class="group relative block overflow-hidden rounded-lg hover:shadow-lg"
		>
			<img
				src={item.imgUrl}
				alt=""
				class="absolute h-full w-full object-fill transition duration-500 group-hover:scale-105 sm:h-72"
			/>
			<button
				class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
			>
				<span class="sr-only">Wishlist</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
			</button>
			<div class="... backdrop-blur-sm backdrop-filter md:backdrop-blur-lg">
				<!-- <img
					src={item.imgUrl}
					alt=""
					class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
				/> -->
				<div />

				<img
					src={item.imgUrl}
					alt=""
					class="h-64 w-full rounded-lg object-contain transition duration-500 group-hover:scale-105 sm:h-72"
				/>
				<Badge variant="destructive" cl class="absolute left-2 top-8">New</Badge>
				<div class="relative rounded-lg border border-gray-50 bg-white p-6">
					<!-- <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> -->

					<h3 class="mt-4 text-xs font-medium text-gray-900">{item.title}</h3>

					<form class="mt-4">
						<Drawer.Root>
							<Drawer.Trigger
								class="w-full place-content-between  justify-center space-x-4 align-middle"
							>
								<div class="w-full justify-around lg:flex">
									<div class="hidden lg:block">
										<img
											alt="cc"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dr9he6yZ0uOJ9b1_bZuhxyLfEaQS67JXQw&usqp=CAU"
											class="m-2 h-2 w-4"
										/>
										<div class="justify-start text-left">
											<p class="text-lg">{formatPeso(parseInt(item.price))}</p>
											<div class="flex-row-2 flex content-center items-center align-middle">
												<p class="text-xs text-[#4C7B33]">
													{formatPeso(item.price * 0.15 + parseInt(item.price))}
												</p>
												<img
													alt="cc"
													src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1225-3kb6axel.png"
													class="m-2 h-2 w-4"
												/>
											</div>
										</div>
									</div>
									<button
										class="font-xs block h-8 w-full rounded-full bg-black p-2 text-xs text-white transition hover:scale-105 lg:w-1/4"
									>
										View
									</button>
								</div>
							</Drawer.Trigger>
							<Drawer.Content>
								<Drawer.Header>
									<Drawer.Title>{item.title}</Drawer.Title>
									<div class="flex justify-center">
										<img
											src={item.imgUrl}
											alt=""
											class="w-90 h-64 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
										/>
										<img
											src={item.imgUrl}
											alt=""
											class="w-90 h-1/2 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
										/>
									</div>
									<Drawer.Description class="text-xs">{item.subtitle}</Drawer.Description>
								</Drawer.Header>
								<Drawer.Footer>
									<Button class="rounded-full">Submit</Button>
									<Drawer.Close>Cancel</Drawer.Close>
								</Drawer.Footer>
							</Drawer.Content>
						</Drawer.Root>
					</form>
				</div>
			</div></a
		>
	{/each}
</div>

<!-- <div class="absolute bottom-2 left-0">Cart</div> -->
