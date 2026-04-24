import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test("home page loads", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Wait for page to be fully loaded
  await page.waitForLoadState("networkidle");

  // Verify the page is reachable
  expect(page.url()).toContain("/");
});

test("home page has no axe violations", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Wait for page to be fully loaded
  await page.waitForLoadState("networkidle");

  // Run axe accessibility scan
  const results = await new AxeBuilder({ page }).analyze();

  // Log violations for debugging
  if (results.violations.length > 0) {
    console.log(`Found ${results.violations.length} violations`);
    results.violations.forEach((v) => {
      console.log(`- ${v.id}: ${v.description}`);
    });
  }

  // Assert no violations found
  expect(results.violations).toHaveLength(0);
});
