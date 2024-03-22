<script lang="ts">
	let websites = [
		{
			title: 'Personal Portfolio',
			href: 'https://portfolio.nwrenger.dev',
			description: 'Ideally for visitors who want to know more about me and my projects!',
			disabled: false
		},
		{
			title: 'Math Practicing Website',
			href: 'https://quickmaths.nwrenger.dev',
			description:
				'Want to improve your skills at maths, especially at calculations, this is the best place for that!',
			disabled: false
		},
		{
			title: 'Shitboard (A Soundboard)',
			href: 'https://shitboard.nwrenger.dev',
			description: 'A Chaos-Fueled Soundboard App where creativity and permanence collide!',
			disabled: true
		}
	];
</script>

<div class="container space-y-8 flex flex-col items-center !max-w-6xl mx-auto p-4">
	<div class="grid grid-cols-2 gap-4 w-full">
		{#each websites as website}
			<a
				class="block card {!website.disabled ? 'card-hover' : 'opacity-50 pointer-events-none'} p-4"
				href={website.href}
			>
				<h3 class="h3">{website.title}</h3>
				<p>{website.description}</p>
			</a>
		{/each}
	</div>
</div>
