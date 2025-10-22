<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主内容区 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>数据智能创新中心</h2>
            <p>探索数据智能，引领科技创新</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h3>快速链接</h3>
              <ul>
                <li><router-link to="/team">团队介绍</router-link></li>
                <li><router-link to="/research">研究方向</router-link></li>
                <li><router-link to="/achievements">成果展示</router-link></li>
                <li><router-link to="/cooperation">合作交流</router-link></li>
              </ul>
            </div>
            <div class="link-group">
              <h3>联系方式</h3>
              <ul>
                <li>地址：河北省保定市莲池区东风东路999号</li>
                <li>电话：0312-5097654</li>
                <li>邮箱：wangxiang@hbsi.edu.cn</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} 河北软件职业技术学院 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}

/* 应用容器 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主内容区 */
.main-content {
  flex: 1;
}

/* 页脚样式 */
.footer {
  background: #0a1929;
  color: white;
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-logo h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-logo p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.footer-links {
  display: flex;
  gap: 60px;
}

.link-group h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: 12px;
}

.link-group a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: #4e6ef2;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    margin-top: 70px;
  }

  .footer-content {
    flex-direction: column;
    gap: 40px;
  }

  .footer-links {
    gap: 40px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-links {
    flex-direction: column;
    gap: 30px;
  }

  .footer-logo h2 {
    font-size: 1.5rem;
  }
}
</style>
