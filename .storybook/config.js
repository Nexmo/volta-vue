import Vue from 'vue';
import '@vonagevolta/core/dist/css/volta.css'
import '@vonagevolta/core/dist/css/addons/volta-prism.css'
import 'prismjs'
import voltaTheme from '@vonagevolta/core/storybookVoltaTheme';
import { addDecorator, addParameters, configure } from '@storybook/vue';
import { withInfo, setDefaults, StorySource, Wrapper } from 'storybook-addon-vue-info'

//import Template from './template.vue'

// Global components
import VltButton from 'Components/buttons/VltButton.vue'
import Icon from 'Components/icon/VltIcon.vue'

Vue.component('vlt-button', VltButton)
//Vue.component('template', Template)

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/snippet-\w*/];

addParameters({
  options: {
  	brandTitle: 'Volta',
  	panelPosition: 'right',
  	theme: voltaTheme
  },
});

setDefaults({
  
})

//addDecorator(withInfo)

function loadStories() {
  require('@vonagevolta/core/components/vltStorybookGenerator.js');
}

configure(loadStories, module);