// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { access, rm } from 'node:fs/promises';
import pngVisualCompare from 'png-visual-compare'

const compareImages = pngVisualCompare.default;

async function checkImageDifferences(currentScreenshotPath, previousScreenshotPath, imageDifferencesPath) {
    try {
		const previousVersionExist = await access(previousScreenshotPath);
		console.log('Compare with previous version');
		const changedPixelsCount = compareImages(currentScreenshotPath, previousScreenshotPath, {
			diffFilePath: imageDifferencesPath
		});
		if (changedPixelsCount === 0) {
			console.log('Screenshots are identical.');
            await rm(imageDifferencesPath, {
                force: true // ignore error when already does not exist
            });
            return false;
		}
		else {
			console.log('Page has changed!');
            return true;
		}
	}
	catch (e) {
		console.log('No previous version exist yet');
        return true;
	}    
}

export default checkImageDifferences;