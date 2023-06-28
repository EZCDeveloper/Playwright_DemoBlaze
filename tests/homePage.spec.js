// @ts-check
const { test, expect } = require('@playwright/test')

test('TC_01. has title and logo name', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/)

  // Expect to Company Logo to have the correct name
  const nameLogo = page.locator('#nava')
  await expect(nameLogo).toHaveText(['PRODUCT STORE'])
})

test('TC_02. has navbar', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  // Expect navbar exist
  const navBar = page.locator('#navbarExample')
  await expect(navBar).toBeVisible()
})

test('TC_03. navbar contains Home text', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  // Expect navbar contains home text
  const homeNav = page.getByRole('link', { name: 'Home (current)' })
  await expect(homeNav).toHaveText(['Home (current)'])
})
