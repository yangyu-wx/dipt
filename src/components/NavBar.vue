<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-logo">
        <router-link to="/" class="logo-link">
          <img src="../assets/logo1.png" alt="数据智能创新中心" class="logo-image">
          <span class="logo-text">数据智能创新中心</span>
        </router-link>
      </div>
      
      <!-- 桌面导航 -->
      <div class="navbar-menu">
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navItems" :key="item.path">
            <router-link 
              :to="item.path" 
              class="nav-link"
              active-class="active"
              :class="{ 'active': currentPath === item.path }"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <div class="navbar-toggle" @click="toggleMenu">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ 'menu-visible': menuVisible }">
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item" v-for="item in navItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="mobile-nav-link"
            @click="toggleMenu"
            :class="{ 'active': currentPath === item.path }"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
    
    <!-- 背景遮罩 -->
    <div class="menu-overlay" v-show="menuVisible" @click="toggleMenu"></div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuVisible: false,
      navItems: [
        { path: '/team', label: '团队介绍' },
        { path: '/research', label: '研究方向' },
        { path: '/achievements', label: '成果展示' },
        { path: '/cooperation', label: '合作交流' }
      ]
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
      // 防止移动端滚动
      if (this.menuVisible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    closeMenu() {
      this.menuVisible = false
      document.body.style.overflow = 'auto'
    },
    handleResize() {
      if (window.innerWidth > 768 && this.menuVisible) {
        this.closeMenu()
      }
    }
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  },
  // 监听窗口大小变化，在桌面模式下关闭菜单
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.logo-image {
  width: 50px;
  height:50px;
  margin-right: 15px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: url(../assets/head-bg.png) center repeat-x;
  background-size: auto 99%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.navbar-logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: opacity 0.3s ease;
}

.logo-text:hover {
  opacity: 0.8;
}

/* 桌面导航 */
.navbar-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4e6ef2;
}

.nav-link.active {
  color: #4e6ef2;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* 移动端菜单按钮 */
.navbar-toggle {
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease;
}

.navbar-toggle:hover {
  color: #4e6ef2;
}

/* 移动端菜单 */
.mobile-menu {
  position: fixed;
  top: 80px;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: calc(100vh - 80px);
  background: rgba(10, 25, 41, 0.98);
  backdrop-filter: blur(10px);
  z-index: 999;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu.menu-visible {
  transform: translateX(0);
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 20px 0;
}

.mobile-nav-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 15px 30px;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(78, 110, 242, 0.1);
  color: #4e6ef2;
  padding-left: 35px;
}

.mobile-nav-link.active {
  background: rgba(78, 110, 242, 0.1);
  color: #4e6ef2;
  border-left: 3px solid #4e6ef2;
}

/* 背景遮罩 */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 998;
  transition: opacity 0.3s ease;
}

/* 滚动时的导航栏样式 */
.navbar.scrolled {
  background: rgba(10, 25, 41, 0.98);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  
  .navbar-toggle {
    display: block;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .container {
    height: 70px;
  }
  
  .mobile-menu {
    top: 70px;
    height: calc(100vh - 70px);
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.1rem;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>