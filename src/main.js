import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/sass/style.css'
const app = createApp(App);

app.use(Antd);
app.use(store);
app.use(router);
app.mount('#app');
