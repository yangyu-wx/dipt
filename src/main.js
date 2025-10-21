import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建Vue应用实例
const app = createApp(App)

// 注册路由
app.use(router)

// 注册Element Plus
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
