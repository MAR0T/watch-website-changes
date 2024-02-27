// Copyright (C) 2022 Marek Tomczewski
//
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { exec } from  'node:child_process';

const notifyCommand = 'notify-send';

function showNotification(url, image) {
	const title = 'Updated site';
	const description = `URL: <span color='#f39c12'>${url}</span> `;
	let params = '-w';
	if (image) {
		params += ` -i '${image}'`; 
	}
	const execOptions = {
		//timeout: 5000
	};
	exec(`${notifyCommand} "${title}" "${description}" ${params}`, execOptions); // no callback, do not wait for results 
}

export default showNotification;

export {
	showNotification
}