import { problemSets } from "./lib/constants";

function DifficultyBadge({ difficulty }: { difficulty: "Easy" | "Medium" }) {
	const color =
		difficulty === "Easy"
			? "bg-green-900 text-green-100"
			: "bg-yellow-900 text-yellow-100";
	return (
		<span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
			{difficulty}
		</span>
	);
}

function App() {
	return (
		<div className="p-6 text-white bg-slate-800">
			<div className="mb-8 text-center flex flex-col gap-2">
				<h1 className="text-4xl font-bold">Pareto Problem Set</h1>
				<h2 className="text-2xl font-bold text-gray-300">
					A collection of LeetCode problems curated by{" "}
					<a
						href="https://www.youtube.com/@AmanManazir"
						target="_blank"
						rel="noreferrer"
						className="text-teal-600 hover:text-teal-500 font-medium transition-colors"
						aria-label="Aman Manazir YouTube Channel"
					>
						Aman Manazir
					</a>{" "}
					for the purpose of improving your mastery of data structures and
					algorithms.
				</h2>
			</div>

			<div className="space-y-10">
				{problemSets.map((set) => (
					<section key={set.group}>
						<h2 className="text-2xl font-semibold mb-4 border-b pb-2">
							{set.group}
						</h2>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{set.problems.map((problem) => (
								<li key={problem.title}>
									<a
										href={problem.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block bg-gray-900 rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-gray-800 transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 h-full"
										aria-label={`Go to ${problem.title} on LeetCode`}
									>
										<div>
											<span className="text-lg font-medium text-blue-300">
												{problem.title}
											</span>
											<p className="text-gray-300 text-sm mt-1">
												{problem.description}
											</p>
										</div>
										<DifficultyBadge difficulty={problem.difficulty} />
									</a>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</div>
	);
}

export default App;
