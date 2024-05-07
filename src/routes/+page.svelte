<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ImageLoader from './ImageLoader.svelte';
	import { websites } from '$lib';
</script>

<svelte:head>
	<title>dashboard</title>
	<meta name="description" content="This is a dashboard of all my up and running websites." />
</svelte:head>

<div class="grid w-full gap-4 md:grid-cols-2">
	{#each websites as { name, title, href, description, disabled }}
		<a
			{href}
			class={!disabled
				? 'h-full rounded-lg transition-all hover:scale-[1.01] hover:shadow-lg'
				: 'pointer-events-none opacity-50'}
			target="_blank"
		>
			<Card.Root class="!h-full">
				{#if !disabled}
					<ImageLoader
						src="./{name + '.png'}"
						alt={name}
						rounded="rounded-sm"
						height="h-auto"
						ratio="aspect-[8/3]"
					/>
				{/if}
				<Card.Header>
					<Card.Title>{title}</Card.Title>
					<Card.Description>{description}</Card.Description>
				</Card.Header>
			</Card.Root>
		</a>
	{/each}
</div>
