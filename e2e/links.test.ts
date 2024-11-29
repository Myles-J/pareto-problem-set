import { test, expect } from "@playwright/test";
import { problemSets } from "../src/lib/constants";

test.describe("Problem Set Links", () => {
	for (const set of problemSets) {
		test(`All problem links for ${set.group} should be valid`, async ({
			page,
		}) => {
			// Get unique links from the current problem set

			const links = set.problems.map((problem) => problem.link);

			// Test each link
			for (const link of links) {
				const response = await page.goto(link);

				// Verify the response status is successful (2xx) or redirect (3xx)
				expect(response?.status()).toBeLessThan(400);

				// Verify we're on LeetCode
				expect(page.url()).toContain("leetcode.com");
			}
		});
	}

	test("should load and display all problem links on the page", async ({
		page,
	}) => {
		// Go to the main page
		await page.goto("/");

		// Check each problem link exists in the DOM
		for (const set of problemSets) {
			for (const problem of set.problems) {
				const link = await page.getByTestId(`problem-link-${problem.title}`);
				await expect(link).toBeVisible();
				expect(await link.getAttribute("href")).toBe(problem.link);
			}
		}
	});
});
