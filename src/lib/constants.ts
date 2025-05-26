type Problem = {
	title: string;
	description: string;
	link: `https://leetcode.com/problems/${string}`;
	difficulty: "Easy" | "Medium";
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
	{
		group: "Binary Search",
		problems: [
			{
				title: "Binary Search",
				description:
					"Given an array of integers sorted in ascending order, find an element in the array that is equal to a given number.",
				link: "https://leetcode.com/problems/binary-search/",
				difficulty: "Easy",
			},
			{
				title: "find Minimum in Rotated Sorted Array",
				description:
					'Follow up for "Find Minimum in Rotated Sorted Array": What if duplicates are allowed?',
				link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
				difficulty: "Medium",
			},
			{
				title: "Search in Rotated Sorted Array",
				description:
					"Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.",
				link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Linked List",
		problems: [
			{
				title: "Reverse Linked List",
				description: "Reverse a singly linked list.",
				link: "https://leetcode.com/problems/reverse-linked-list/",
				difficulty: "Easy",
			},
			{
				title: "Merge Two Sorted Lists",
				description:
					"Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.",
				link: "https://leetcode.com/problems/merge-two-sorted-lists/",
				difficulty: "Easy",
			},
			{
				title: "Reorder List",
				description:
					"Given a singly linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…",
				link: "https://leetcode.com/problems/reorder-list/",
				difficulty: "Medium",
			},
			{
				title: "Remove Nth Node From End of List",
				description:
					"Given a linked list, remove the nth node from the end of list and return its head.",
				link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
				difficulty: "Easy",
			},
			{
				title: "Linked List Cycle",
				description: "Given a linked list, determine if it has a cycle in it.",
				link: "https://leetcode.com/problems/linked-list-cycle/",
				difficulty: "Easy",
			},
			{
				title: "LRU Cache",
				description:
					"Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.",
				link: "https://leetcode.com/problems/lru-cache/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Trees",
		problems: [
			{
				title: "Invert Binary Tree",
				description: "Invert a binary tree.",
				link: "https://leetcode.com/problems/invert-binary-tree/",
				difficulty: "Easy",
			},
			{
				title: "Maximum Depth of Binary Tree",
				description: "Given a binary tree, find its maximum depth.",
				link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
				difficulty: "Easy",
			},
			{
				title: "Diameter of Binary Tree",
				description:
					"Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
				link: "https://leetcode.com/problems/diameter-of-binary-tree/",
				difficulty: "Easy",
			},
			{
				title: "Balanced Binary Tree",
				description: "Given a binary tree, determine if it is height-balanced.",
				link: "https://leetcode.com/problems/balanced-binary-tree/",
				difficulty: "Easy",
			},
			{
				title: "Same Tree",
				description:
					"Given two binary trees, write a function to check if they are equal or not.",
				link: "https://leetcode.com/problems/same-tree/",
				difficulty: "Easy",
			},
			{
				title: "Subtree of Another Tree",
				description:
					"Given two binary trees, write a function to check if the first tree is a subtree of the second tree.",
				link: "https://leetcode.com/problems/subtree-of-another-tree/",
				difficulty: "Easy",
			},
			{
				title: "Lowest Common Ancestor of a Binary Search Tree",
				description:
					"Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
				link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
				difficulty: "Medium",
			},
			{
				title: "Binary Tree Level Order Traversal",
				description:
					"Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).",
				link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
				difficulty: "Medium",
			},
			{
				title: "Binary Tree Right Side View",
				description:
					"Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
				link: "https://leetcode.com/problems/binary-tree-right-side-view/",
				difficulty: "Medium",
			},
			{
				title: "Count Good Nodes in Binary Tree",
				description:
					"Given a binary tree, count the number of nodes that have a value greater than or equal to x.",
				link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
				difficulty: "Medium",
			},
			{
				title: "Validate Binary Search Tree",
				description:
					"Given a binary tree, determine if it is a valid binary search tree (BST).",
				link: "https://leetcode.com/problems/validate-binary-search-tree/",
				difficulty: "Medium",
			},
			{
				title: "Kth Smallest Element in a BST",
				description:
					"Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.",
				link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Heap/Priority Queue",
		problems: [
			{
				title: "Kth Largest Element in a Stream",
				description:
					"Design a data structure that supports the following two operations: add an element, and get the kth largest element.",
				link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
				difficulty: "Easy",
			},
			{
				title: "Last Stone Weight",
				description:
					"We have a collection of stones, each stone has a positive integer weight.  Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  Return the sum of the weights of the last two stones smashed together.",
				link: "https://leetcode.com/problems/last-stone-weight/",
				difficulty: "Medium",
			},
			{
				title: "Kth Largest Element in an Array",
				description:
					"Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
				link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
				difficulty: "Medium",
			},
		],
	},
	{
		group: "Graph",
		problems: [
			{
				title: "Number of Islands",
				description:
					"Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
				link: "https://leetcode.com/problems/number-of-islands/",
				difficulty: "Medium",
			},
			{
				title: "Max Area of Island",
				description:
					"Given a non-empty 2D array grid of 0's and 1's, find the maximum area of an island. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
				link: "https://leetcode.com/problems/max-area-of-island/",
				difficulty: "Medium",
			},
			{
				title: "Clone Graph",
				description:
					"Clone an undirected graph. Each node in the graph contains a label (int) and a list (List[Node]) of its neighbors.",
				link: "https://leetcode.com/problems/clone-graph/",
				difficulty: "Medium",
			},
			{
				title: "Pacific Atlantic Water Flow",
				description:
					'Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.',
				link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
				difficulty: "Medium",
			},
			{
				title: "Surrounded Regions",
				description:
					"Given a 2d board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.",
				link: "https://leetcode.com/problems/surrounded-regions/",
				difficulty: "Medium",
			},
			{
				title: "Course Schedule",
				description:
					"There are a total of n courses you have to take, labeled from 0 to n - 1.",
				link: "https://leetcode.com/problems/course-schedule/",
				difficulty: "Medium",
			},
			{
				title: "Course Schedule II",
				description:
					"There are a total of n courses you have to take, labeled from 0 to n - 1.",
				link: "https://leetcode.com/problems/course-schedule-ii/",
				difficulty: "Medium",
			},
		],
	},
];
