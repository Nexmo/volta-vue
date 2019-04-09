var path = require('path');

module.exports = ({ config }) => {

	config.resolve={
		...config.resolve,
		alias: {
			Root: path.resolve(__dirname, '../'),
			//Icons: path.resolve(__dirname, '../dist/symbol/volta-icons.svg'),
			//FlagIcons: path.resolve(__dirname, '../dist/symbol/volta-flag-icons.svg'),
			//BrandIcons: path.resolve(__dirname, '../dist/symbol/volta-brand-icons.svg'),
			Components: path.resolve(__dirname, '../components/'),
			//ColorMap: path.resolve(__dirname, '../components/colors/colors.map.js')
		}
	}

	return config;
}