// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import yaml from 'yaml';
import { readFile } from 'node:fs/promises';


async function readWatchList(configPath) {
	try {
		const text = await readFile(configPath, {
			encoding: 'utf-8'
		});
		const config = await yaml.parse(text);
		return config.watch_list;
	}
	catch (e) {
		console.log(`Failed to read and parse watch list from config at ${configPath}: ${e.message}`);
		exit(1);
	}
}

export default readWatchList;

export {
	readWatchList
}