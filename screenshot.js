// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

async function makeScreenshotOfSelector(path, page, selector) {
	await page.waitForSelector(selector);
	const element = await page.$(selector);
	await element.screenshot({
		path
	});
}

async function makeScreenshotOfFullPage(path, page) {
	await page.screenshot({
		fullPage: true,
		path		
	});
}

async function makeScreenshot(path, page, selector) {
	if (selector) {
		await makeScreenshotOfSelector(path, page, selector);
		console.log(`Made a screenshot of element ${selector} on page ${page.url()}`);
	}
	else {
		await makeScreenshotOfFullPage(path, page);
		console.log(`Made full screenshot of page ${page.url()}`);	
	}
}

export default makeScreenshot;

export {
	makeScreenshotOfSelector,
	makeScreenshotOfFullPage,
	makeScreenshot
};
