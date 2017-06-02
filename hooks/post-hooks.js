"use strict";

const _ = require('lodash');

/**
 * Allows the file calling this hook to get entries from Contentstack's products content type
 * @param  {Object} currFile The current file invoking the hook.
 * @param  {Object} files    Collection of all files
 * @param  {Object} options  Global config options
 * @return {Object}          Contents of current file after applying the `hook's` logic.
 */

function fetchProducts(currFile, files, options) {
	currFile.products = [];

	files.forEach(file => {
		if(file === true)
			return file;
		const fileNames = _.keys(file);

		fileNames.forEach(fileName => {
			// file[fileName] won't have entries option if its an entry_template file!
			if(file[fileName] && file[fileName].contentstack && file[fileName].contentstack.content_type === "products" && file[fileName].entries) {
				currFile.products = file[fileName].entries;
			}
		});
	});

	return currFile;
}

module.exports = {
	fetchProducts
};
