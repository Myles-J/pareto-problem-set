<script>
	import { problemSets } from '$lib/constants';
	import { Info } from 'lucide-svelte';
	import { Tooltip } from '@svelte-plugins/tooltips';
</script>

<h1 class="text-4xl font-bold">Parento Problem Set</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
	{#each problemSets as problemSet}
		<div class="flex flex-col gap-2 bg-zinc-100 p-4 rounded-lg shadow-sm">
			<h2 class="text-2xl font-bold bg-blue-200 p-2 rounded-md">{problemSet.group}</h2>
			<div class="flex flex-col gap-2">
				{#each problemSet.problems as problem}
					<div class="flex gap-2 items-center">
						<a href={problem.link} class="text-blue-500 hover:underline">
							{problem.title}
						</a>
						<span
							class={problem.difficulty === 'Easy'
								? 'bg-green-500 text-white p-1 text-xs rounded-md'
								: 'bg-yellow-500 text-white p-1 text-xs rounded-md'}>{problem.difficulty}</span
						>
						<Tooltip content={problem.description}>
							<Info class="text-blue-500 hover:underline size-4 cursor-pointer" />
						</Tooltip>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
