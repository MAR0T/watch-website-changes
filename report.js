// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { rename as mv } from 'node:fs/promises';

function showReport(updatedSites) {
	if (updatedSites.length === 0) {
		console.log('No new updates');
	}
	else {
		console.log('Updated websites:');
		for (const [ index, url ] of updatedSites.entries()) {
			console.log(`${index + 1}. ${url}`);
		}
	}	
}

async function saveState(currentScreenshotPath, previousScreenshotPath) {
	console.log('Current state set as previous');
	await mv(currentScreenshotPath, previousScreenshotPath);
}

export default showReport;

export {
	showReport,
	saveState
}