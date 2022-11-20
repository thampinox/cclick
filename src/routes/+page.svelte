<script lang="ts">
	import type { IGrinder } from 'src/models';
	import { grinders, comandanteClickSize } from 'src/stores';

	let comandanteClicks: number;
	let selectedGrinder: IGrinder;

	$: selectedGrinderClicks =
		(defaultToZero(comandanteClicks) * $comandanteClickSize) /
		defaultToZero(selectedGrinder?.clickSizeInMm);

	$: roundedSelectedGrinderClicks = Math.round(selectedGrinderClicks);

	const defaultToZero = (number: number) => number || 0;
</script>

<label class="block">
	<span class="text-sm font-medium text-gray-700">comandante clicks</span>
	<input
		type="number"
		class="block mt-1 w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
		placeholder="0"
		max="50"
		bind:value={comandanteClicks}
	/>
</label>

<label class="block mt-3">
	<span class="text-sm font-medium text-gray-700">grinder</span>
	<select
		class="block mt-1 w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
		bind:value={selectedGrinder}
	>
		{#each $grinders as grinder}
			<option value={grinder}>{grinder.name}</option>
		{/each}
	</select>
</label>

<h2 class="my-12 text-center">~{roundedSelectedGrinderClicks} {selectedGrinder?.name} clicks</h2>
