import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
import './assets/scss/base.css'

/*import {ApiClient, SendSmtpEmail} from '@sendinblue/client';

const apiInstance = new ApiClient();
apiInstance.setApiKey(import.meta.env.VITE_SMTP_KEY);

 */

const app = createApp(App)
app.use(router)
app.mount('#app')
