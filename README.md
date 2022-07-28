# watch-website-changes

Program to report updates on watched websites. It makes screenshots and compare them.
You can use it to check for changes of part of website with search results.

### Usage ###

1. Based on **config.default.yml** prepare a configuration file with a list of websites you want to watch for changes.
   For each position you should provide:

 * name - folder name for screenshots
 * url - full website url including query parameters of your search
 * selector - optional, element of HTML document you want to focus, e.g. #id or .class 

2. Name your configuration file **config.yml** and put it near **index.js** or provide custom path in **CONFIG** environment variable.
3. Optionally you can provide in **DATA_DIR** environment variable a custom path where screenshots of watched webpages will be stored.
4. Run `CONFIG=<config_path> DATA_DIR=<data_directory> node index.js` where environment variables are fully optional.

### License ###

Copyright (C) 2022 Marek Tomczewski. This is a free software is licensed under the MIT License.