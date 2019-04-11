var path = require('path');

module.exports = ({ config }) => {

	config.resolve={
		...config.resolve,
		alias: {
			Root: path.resolve(__dirname, '../'),
			Icons: path.resolve(__dirname, '../node_modules/@vonagevolta/core/dist/symbol/volta-icons.svg'),
			//FlagIcons: path.resolve(__dirname, '../dist/symbol/volta-flag-icons.svg'),
			//BrandIcons: path.resolve(__dirname, '../dist/symbol/volta-brand-icons.svg'),
			Components: path.resolve(__dirname, '../components/'),
			//ColorMap: path.resolve(__dirname, '../components/colors/colors.map.js')
			StorybookBase: path.resolve(__dirname, '../node_modules/@storybook/vue'),
			'vue$': 'vue/dist/vue.esm.js',
		}
	}

	return config;
}