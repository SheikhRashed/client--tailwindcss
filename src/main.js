import { createApp } from 'vue';
import App from './App.vue';
// import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel';
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';
import './assets/css/index.css';

const app = createApp(App);

// app.use(VueCollapsiblePanel).mount('#app');
createApp(App).mount('#app');
