<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import {
		AppShell,
		storePopup,
		type PopupSettings,
		popup,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const profile: PopupSettings = {
		event: 'click',
		target: 'profileContents',
		placement: 'bottom'
	};
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- Page Container -->
		<div class="page-container !max-w-6xl mx-auto grid grid-cols-[1fr_auto] items-center gap-4 p-4">
			<button type="button" class="btn-icon" use:popup={profile} title="dashboard">
				<img class=" max-w-full rounded-sm aspect-square shadow-xl" src="./favicon.png" alt="nw" />
			</button>

			<div class="card p-4 w-72 shadow-xl z-10" data-popup="profileContents">
				<div class="space-y-4">
					<div>
						<div class="flex">
							<span class="font-bold flex-auto">dashboard</span>
							<a
								class="anchor"
								href="https://github.com/nwrenger/dashboard"
								target="_blank"
								title="Repository"><i class="fa-solid fa-up-right-from-square" /></a
							>
						</div>
						<div class="flex">
							<span class="opacity-50 flex-auto">nwrenger</span>
							<a class="anchor" href="https://github.com/nwrenger" target="_blank" title="Profile"
								><i class="fa-solid fa-up-right-from-square" /></a
							>
						</div>
					</div>
					<p>This is a dashboard of all my up and running websites.</p>
				</div>
				<div class="arrow bg-surface-100-800-token" />
			</div>
			<LightSwitch
				class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl shadow-xl"
				ring="ring-none"
			/>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
