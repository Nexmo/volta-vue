import { addDecorator, addParameters, configure } from '@storybook/vue';
import Vue from 'vue';
import '@vonagevolta/core/dist/css/volta.css'
import '@vonagevolta/core/dist/css/addons/volta-prism.css'
import voltaTheme from '@vonagevolta/core/storybookVoltaTheme';

addParameters({
  options: {
  	brandTitle: 'Volta',
  	panelPosition: 'right',
  	theme: voltaTheme
  },
});

/*const req = require.context('@vonagevolta/core/components', true, /story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}*/

function loadStories() {
  require('@vonagevolta/core/components/buttons/buttons.story.js');
}

configure(loadStories, module);