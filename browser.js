// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

async function renderPageInViewport(browser, url, viewportSize) {
	const page = await browser.newPage();
	await page.setViewport(viewportSize);
	await page.goto(url, {
		waitUntil: 'networkidle0'
	});
	return page;
}

export default renderPageInViewport;

export {
	renderPageInViewport
}