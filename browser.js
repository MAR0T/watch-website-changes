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