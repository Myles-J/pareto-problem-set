<script>
	import { problemSets } from '$lib/constants';
	import { Info } from 'lucide-svelte';
	import { Tooltip } from '@svelte-plugins/tooltips';

	// Get unique problem types (groups)
	const problemTypes = ['All', ...new Set(problemSets.map((set) => set.group))];

	// Get unique difficulties
	const difficulties = [
		'All',
		...new Set(problemSets.flatMap((set) => set.problems.map((p) => p.difficulty)))
	];

	// Filter states
	let selectedType = 'All';
	let selectedDifficulty = 'All';

	// Filtered problem sets
	$: filteredProblemSets = problemSets
		.map((set) => ({
			...set,
			problems: set.problems.filter(
				(problem) => selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty
			)
		}))
		.filter(
			(set) => (selectedType === 'All' || set.group === selectedType) && set.problems.length > 0
		);
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8">Parento Problem Set</h1>
	<h2 class="text-xl mb-8">
		A collection of LeetCode problems curated by
		<a
			href="https://www.youtube.com/@AmanManazir"
			target="_blank"
			class="text-blue-600 hover:text-blue-800 font-medium transition-colors"
			aria-label="Aman Manazir YouTube Channel">Aman Manazir</a
		>
		for the purpose of improving your mastery of data structures and algorithms.
	</h2>

	<!-- Filter Controls -->
	<div class="flex flex-col sm:flex-row gap-4 mb-8">
		<div class="sm:w-48">
			<label for="type-filter" class="block text-sm font-medium text-gray-600 mb-2">
				Problem Type
			</label>
			<div class="relative">
				<select
					id="type-filter"
					bind:value={selectedType}
					class="block w-full pl-3 pr-8 py-1.5 text-sm text-gray-600 bg-gray-50/50 border border-gray-200
						   rounded-lg appearance-none cursor-pointer hover:bg-white
						   transition-colors focus:outline-none focus:border-gray-300 focus:bg-white"
				>
					{#each problemTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div class="sm:w-48">
			<label for="difficulty-filter" class="block text-sm font-medium text-gray-600 mb-2">
				Difficulty
			</label>
			<div class="relative">
				<select
					id="difficulty-filter"
					bind:value={selectedDifficulty}
					class="block w-full pl-3 pr-8 py-1.5 text-sm text-gray-600 bg-gray-50/50 border border-gray-200
						   rounded-lg appearance-none cursor-pointer hover:bg-white
						   transition-colors focus:outline-none focus:border-gray-300 focus:bg-white"
				>
					{#each difficulties as difficulty}
						<option value={difficulty}>{difficulty}</option>
					{/each}
				</select>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each filteredProblemSets as problemSet}
			<div
				class="flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
			>
				<h2 class="text-xl font-semibold bg-blue-50 text-blue-700 p-4 border-b border-blue-100">
					{problemSet.group}
				</h2>

				<div class="flex flex-col p-4 gap-3">
					{#each problemSet.problems as problem}
						<div class="flex items-center gap-3">
							<a
								href={problem.link}
								target="_blank"
								class="flex-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
								data-testid={`problem-link-${problem.title}`}
							>
								{problem.title}
							</a>

							<span
								class={`px-2 py-1 rounded-full text-xs font-medium
								${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
							>
								{problem.difficulty}
							</span>

							<Tooltip content={problem.description}>
								<Info
									class="text-gray-400 hover:text-gray-600 size-4 cursor-pointer transition-colors"
								/>
							</Tooltip>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
