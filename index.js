// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/* EXTERNAL DEPENDENCIES */
import * as puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';
import { exit } from 'process';
import path from 'path';

/* INTERNAL DEPENDENCIES */
import makeScreenshot from './screenshot.js';
import checkImageDifferences from './imageDiff.js';
import { renderPageInViewport } from './browser.js';
import { readWatchList } from './watchlist.js';
import { showReport, saveState } from './report.js'

/* CONFIGURATION */
const dataDir = './data';
const configPath = './config.yml';
const currentScreenshotPath = './current.png';
const previousScreenshotPath = './previous.png';
const imageDifferencesPath = './diff.png';
const viewportSize = {
	width: 1920,
	height: 1080
};

async function ensureDirectoryExist(dir) {
	await mkdir(dir, { recursive: true });
}

/* CORE LOGIC */

// TODO: Save metadata (like last time checked for each page) about screenshot locations
// TODO: Command line option to open image with diff
(async () => {
	await ensureDirectoryExist(dataDir);
	const watchList = await readWatchList(configPath);
	const browser = await puppeteer.launch();
	const updatedSites = [];
	for (const element of watchList) {
		const { name, url, selector } = element;
		const dir = path.join(dataDir, name);
		await ensureDirectoryExist(dir);
		const currentScreenshotFullPath = path.join(dir, currentScreenshotPath);
		const previousScreenshotFullPath = path.join(dir, previousScreenshotPath);
		const imageDifferencesFullPath = path.join(dir, imageDifferencesPath);
		const page = await renderPageInViewport(browser, url, viewportSize);
		await makeScreenshot(currentScreenshotFullPath, page, selector);	
		const changed = await checkImageDifferences(currentScreenshotFullPath, previousScreenshotFullPath, imageDifferencesFullPath);
		if (changed) {
			updatedSites.push(url);
		}
		await saveState(currentScreenshotFullPath, previousScreenshotFullPath);
	};
	await browser.close();
	showReport(updatedSites);
})();
