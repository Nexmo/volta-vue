import Vue, { createApp } from 'vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import App from './demo/App';

// get rid of the warnings for side-navigation
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:catchAll(.*)', component: new Vue() }],
});

createApp(App).use(router).mount('#app');
