# watch-website-changes

Program to report updates on watched websites. It makes screenshots and compare them.
You can use it to check for changes of part of website with search results.

### Usage ###

1. Copy config.default.yml to config.yml
2. Configure there a list of websites you want to watch for changes inside. For each you should provide:

 * name - folder name for screenshots
 * url - full website url including query parameters of your search
 * selector - optional, element of HTML document you want to focus, e.g. #id or .class 

3. Run `node index.js`

### License ###

Copyright (C) 2022 Marek Tomczewski. This is a free software is licensed under the MIT License.