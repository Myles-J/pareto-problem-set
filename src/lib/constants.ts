type Problem = {
	title: string;
	description: string;
	link: `https://leetcode.com/problems/${string}`;
	difficulty: "Easy" | "Medium" | "Hard";
};

type ProblemSet = {
	group: string;
	problems: Problem[];
};

export const problemSets: ProblemSet[] = [
	{
		group: "Arrays/Hashing",
		problems: [
			{
				title: "Contains Duplicate",
				description:
					"Given an array of integers, return whether or not it contains any duplicates.",
				link: "https://leetcode.com/problems/contains-duplicate/",
				difficulty: "Easy",
			},
			{
				title: "Valid Anagram",
				description:
					"Given two strings s and t, return whether or not they are anagrams.",
				link: "https://leetcode.com/problems/valid-anagram/",
				difficulty: "Easy",
			},
			{
				title: "Two Sum",
				description:
					"Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
				link: "https://leetcode.com/problems/two-sum/",
				difficulty: "Easy",
			},
			{
				title: "Group Anagrams",
				description: "Given an array of strings, group anagrams together.",
				link: "https://leetcode.com/problems/group-anagrams/",
				difficulty: "Medium",
			},
			{
				title: "Top K Frequent Elements",
				description:
					"Given a non-empty array of integers, return the k most frequent elements.",
				link: "https://leetcode.com/problems/top-k-frequent-elements/",
				difficulty: "Medium",
			},
			{
				title: "Valid Sudoku",
				description:
					"Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.",
				link: "https://leetcode.com/problems/valid-sudoku/",
				difficulty: "Medium",
			},
			{
				title: "Product of Array Except Self",
				description:
					"Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
				link: "https://leetcode.com/problems/product-of-array-except-self/",
				difficulty: "Medium",
			},
			{
				title: "Longest Consecutive Sequence",
				description:
					"Given an unsorted array of integers, find the length of the longest consecutive elements sequence.",
				link: "https://leetcode.com/problems/longest-consecutive-sequence/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Two Pointers",
		problems: [
			{
				title: "Valid Palindrome",
				description:
					"Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
				link: "https://leetcode.com/problems/valid-palindrome/",
				difficulty: "Easy",
			},
			{
				title: "Two Sum II - Input array is sorted",
				description:
					"Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.",
				link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
				difficulty: "Easy",
			},
			{
				title: "3Sum",
				description:
					"Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
				link: "https://leetcode.com/problems/3sum/",
				difficulty: "Medium",
			},
			{
				title: "Container With Most Water",
				description:
					"Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.",
				link: "https://leetcode.com/problems/container-with-most-water/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Sliding Window",
		problems: [
			{
				title: "Best Time to Buy and Sell Stock",
				description:
					"Say you have an array for which the ith element is the price of a given stock on day i.",
				link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
				difficulty: "Easy",
			},
			{
				title: "Longest Substring Without Repeating Characters",
				description:
					"Given a string, find the length of the longest substring without repeating characters.",
				link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
				difficulty: "Medium",
			},
			{
				title: "Longest Repearing Character Replacement",
				description:
					"Given a string, you can perform operations as follow: Delete some characters, Insert some characters, Replace some characters at random (with duplicates allowed).",
				link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Stack",
		problems: [
			{
				title: "Valid Parentheses",
				description:
					"Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
				link: "https://leetcode.com/problems/valid-parentheses/",
				difficulty: "Easy",
			},
			{
				title: "Min Stack",
				description:
					"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
				link: "https://leetcode.com/problems/min-stack/",
				difficulty: "Medium",
			},
			{
				title: "Daily Temperatures",
				description:
					"Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.",
				link: "https://leetcode.com/problems/daily-temperatures/",
				difficulty: "Medium",
			},
		],
	},
];
