const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');

const PAHTS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	// Entry accepts a path or an object of entries.
	// The build chapter contains an example of latter.
	entry: PAHTS.app,
	output: {
		path: PAHTS.build,
		filename: 'bundle.js'
	},
	plugins: [
		new HTMLwebpackPlugin({
			title: 'Kanban app'
		})
	]
};