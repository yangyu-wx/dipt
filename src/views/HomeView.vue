<template>
  <div class="home-container">
    <!-- 全屏轮播图 -->
    <div class="carousel-wrapper">
      <el-carousel class="full-screen-carousel" height="100vh" trigger="click" indicator-position="none"
        :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <div class="carousel-item">
            <img :src="item.image" alt="轮播图" class="carousel-image">
            <div class="carousel-overlay"></div>
            <div class="carousel-content">
              <h1 class="animated-title">{{ item.title }}</h1>
              <p class="animated-desc">{{ item.description }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 核心价值展示 -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">核心价值</h2>
        <div class="values-grid">
          <div class="value-item" v-for="(value, index) in coreValues" :key="index">
            <div class="value-icon">
              <el-icon>
                <component :is="value.icon" />
              </el-icon>
            </div>
            
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      carouselItems: [
        {
          image: 'public/lunbo/ai1.jpg',
          title: '数据驱动未来',
          description: '探索人工智能与大数据分析的无限可能'
        },
        {
          image: 'public/lunbo/ai2.jpg',
          title: '智能改变世界',
          description: '前沿技术研究与创新应用'
        },
        {
          image: 'public/lunbo/ai3.jpg',
          title: '创新引领发展',
          description: '构建产学研协同创新生态'
        }
      ],
      coreValues: [
        {
          icon: 'DataLine',
          title: '数据智能',
          description: '利用先进的算法和模型，从海量数据中挖掘价值，驱动决策和创新。'
        },
        {
          icon: 'MagicStick',
          title: '技术创新',
          description: '持续探索人工智能、大数据等前沿技术，推动技术突破和应用落地。'
        },
        {
          icon: 'School',
          title: '人才培养',
          description: '培养具有国际视野和创新能力的数据科学、人工智能人才，为社会输送高端智力支持。'
        },
        {
          icon: 'Connection',
          title: '开放合作',
          description: '建立广泛的产学研合作网络，共同推动数据智能技术的发展和应用。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  position: relative;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.full-screen-carousel {
  width: 100%;
  height: 100vh;
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s ease;
}

.carousel-item:hover .carousel-image {
  transform: scale(1.05);
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 10, 40, 0.7));
  z-index: 1;
}

.carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.animated-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: fadeInUp 1s forwards 0.3s;
}

.animated-desc {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeInUp 1s forwards 0.6s;
}

.values-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0a1929 0%, #112540 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
  font-weight: 600;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  margin: 20px auto 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.value-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.value-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.value-icon {
  font-size: 3rem;
  color: #4e6ef2;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.value-item:hover .value-icon {
  transform: scale(1.1);
  color: #7b61ff;
}

.value-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.value-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .animated-title {
    font-size: 2.5rem;
  }

  .animated-desc {
    font-size: 1rem;
  }

  .values-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .animated-title {
    font-size: 2rem;
  }

  .value-item {
    padding: 30px 20px;
  }
}
</style>