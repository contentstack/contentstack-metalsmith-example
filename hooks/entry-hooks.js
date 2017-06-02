
/**
 * Removes mentioned keys from the passed entries
 * @param  {Object} entries 	Collection of entry objects
 * @param  {Object} file    	file read by metalsmith
 * @param  {Object} options 	Global config options
 * @return {Object}         	Return collection of entry objects after their keys have been deleted
 */

function removeKeys(entries, file, options) {
	const keys = ['publish_details', 'ACL', 'created_by', 'updated_by', '_version'];

	if(Array.isArray(entries)) {
		entries.forEach(entry => {
			keys.forEach(key => {
				if(entry[key])
					delete entry[key];
			});
		});
	}

	return entries;
}

module.exports = {
	remove: removeKeys
};