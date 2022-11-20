<script lang="ts">
	import { comandanteClickSize } from 'src/stores';
</script>

<label class="block">
	<span class="text-sm font-medium text-gray-700">comandante click size (mm)</span>
	<input
		type="number"
		class="block mt-1 w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
		placeholder="0"
		max="50"
		disabled
		bind:value={$comandanteClickSize}
	/>
</label>
