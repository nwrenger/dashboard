<script lang="ts">
	let websites = [
		{
			name: 'protfolio',
			title: 'Personal Portfolio',
			href: 'https://portfolio.nwrenger.dev',
			description: 'Ideally for visitors who want to know more about me and my projects!',
			disabled: false
		},
		{
			name: 'quickmaths',
			title: 'Math Practicing Website',
			href: 'https://quickmaths.nwrenger.dev',
			description:
				'Want to improve your skills at maths, especially at calculations, this is the best place for that!',
			disabled: false
		},
		{
			name: 'shitboard',
			title: 'Shitboard (A Soundboard)',
			href: 'https://shitboard.nwrenger.dev',
			description: 'A Chaos-Fueled Soundboard App where creativity and permanence collide!',
			disabled: true
		}
	];
</script>

<svelte:head>
	<title>dashboard</title>
	<meta name="description" content="This is a dashboard of all my up and running websites." />
</svelte:head>

<div class="container space-y-8 flex flex-col items-center !max-w-6xl mx-auto p-4">
	<div class="grid md:grid-cols-2 gap-4 w-full">
		{#each websites as website}
			<a
				class="overflow-hidden block card {!website.disabled
					? 'card-hover'
					: 'opacity-50 pointer-events-none'}"
				href={website.href}
			>
				{#if !website.disabled}
					<header>
						<img
							src="./{website.name + '.png'}"
							class="bg-black/50 w-full aspect-[8/3]"
							alt="img"
						/>
					</header>
				{/if}
				<div class="p-4">
					<h3 class="h3">{website.title}</h3>
					<p>{website.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
