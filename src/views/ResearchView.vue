<template>
  <div class="research-container">
    <div class="page-header">
      <h1>研究方向</h1>
      <p>前沿技术探索与创新应用</p>
    </div>

    <!-- 研究方向概览 -->
    <section class="research-overview">
      <div class="container">
        <div class="overview-content">
          <h2>研究概述</h2>
          <p>数据智能创新中心致力于数据科学与人工智能领域的前沿研究，重点关注以下几个研究方向。我们的研究既有理论层面的创新，也注重实际应用场景的落地，旨在推动数据智能技术的发展和应用。</p>
        </div>
        <div class="research-areas">
          <div class="area-item" v-for="(area, index) in researchAreas" :key="index" @click="scrollToDetail(area.id)">
            <div class="area-icon">
              <el-icon>
                <component :is="area.icon"></component>
              </el-icon>
            </div>
            <h3 class="area-title">{{ area.title }}</h3>
            <p class="area-desc">{{ area.brief }}</p>
            <div class="area-arrow">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 研究方向详情 -->
    <section class="research-details">
      <div class="container">
        <div class="detail-item" :id="area.id" v-for="(area, index) in researchAreas" :key="index">
          <div class="detail-header">
            <div class="detail-icon"> <el-icon>
                <component :is="area.icon"></component>
              </el-icon></div>
            <h2 class="detail-title">{{ area.title }}</h2>
          </div>
          <div class="detail-content">
            <div class="detail-text">
              <p v-for="(paragraph, idx) in area.details" :key="idx">{{ paragraph }}</p>
              <div class="research-topics">
                <h4>研究课题：</h4>
                <ul>
                  <li v-for="(topic, tIdx) in area.topics" :key="tIdx">{{ topic }}</li>
                </ul>
              </div>
            </div>
            <div class="detail-image">
              <img :src="area.image" :alt="area.title">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 研究方法 -->
    <section class="research-methods">
      <div class="container">
        <h2 class="section-title">研究方法与特色</h2>
        <div class="methods-grid">
          <div class="method-item" v-for="(method, index) in researchMethods" :key="index">
            <div class="method-number">{{ index + 1 }}</div>
            <h3 class="method-title">{{ method.title }}</h3>
            <p class="method-desc">{{ method.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResearchView',
  data() {
    return {
      researchAreas: [
        {
          "id": "heterogeneous-dataset",
          "icon": "DataAnalysis",
          "title": "高质量异构数据集构建技术",
          "brief": "聚焦交通、教育、康养陪伴三大行业，构建覆盖数据全生命周期的高质量异构数据集技术体系，提供标准化、可定制化数据支撑。",
          "image": "/sucai/research1.jpg",
          "details": [
            "本研究为河北省数据智能技术创新中心建设提供数据底座，围绕三大典型行业，开展多源异构数据实时/批量采集、统一存储、智能预处理与质量提升技术研究，突破行业数据集成与治理关键瓶颈。",
            "开发高可用集群数据集构建与管理平台，形成覆盖数据全生命周期的技术体系，构建高质量行业数据集，支撑区域产业数字化转型与数据资源规范流通。"
          ],
          "topics": [
            "多源异构数据统一采集存储",
            "智能数据预处理与质量提升",
            "行业数据集标准化构建",
            "数据集全生命周期管理",
            "数据资源规范流通技术"
          ]
        },
        {
          "id": "vertical-llm",
          "icon": "Promotion",
          "title": "多模态垂类大模型构建技术",
          "brief": "基于行业高质量数据集，攻克垂类大模型定制、动态知识库构建与多维度评估技术，解决通用大模型行业应用短板。",
          "image": "/sucai/research2.jpg",
          "details": [
            "聚焦智慧交通、职业教育、智能陪伴等领域，采用垂域多模态适配与LoRA等PEFT微调技术，注入领域知识，实现低算力成本的模型行业化定制。",
            "构建RAG动态知识库保障信息时效性，建立'自动化+人工'多维度评估体系，形成持续反馈优化闭环，为智能体精准决策提供核心模型支撑。"
          ],
          "topics": [
            "垂类多模态模型微调",
            "领域知识注入技术",
            "RAG动态知识库构建",
            "模型增量更新管理",
            "多维度模型评估体系"
          ]
        },
        {
          "id": "agent-service",
          "icon": "Cpu",
          "title": "智能体驱动增值服务技术",
          "brief": "突破传统模型服务局限，构建智能体核心驱动的增值服务平台，推动数据智能从工具辅助向业务伙伴升级。",
          "image": "/sucai/research3.jpg",
          "details": [
            "围绕重点领域攻关垂直场景智能体构建与集成技术，实现从意图识别到任务执行的闭环赋能，建立智能体自治运维与价值评估体系，保障行为可控可信。",
            "打造低代码编排与云边端协同平台，降低智能体构建门槛，实现跨域资源高效调度，形成自主演进、协同运作的智能体服务生态。"
          ],
          "topics": [
            "垂直场景智能体构建",
            "智能体自治运维技术",
            "低代码智能体编排",
            "云边端协同调度",
            "智能体服务生态构建"
          ]
        }
      ],
      researchMethods: [
        {
          title: '理论研究与创新',
          description: '深入研究数据智能领域的基础理论问题，提出新的模型、算法和方法，推动学科发展。'
        },
        {
          title: '原型系统开发',
          description: '将理论研究成果转化为原型系统，验证算法的有效性和实用性。'
        },
        {
          title: '实际场景应用',
          description: '与企业和行业合作，将研究成果应用于实际场景，解决实际问题。'
        },
        {
          title: '国际合作与交流',
          description: '与国际顶尖研究机构和学者开展合作研究，参与国际学术交流。'
        }
      ]
    }
  },
  methods: {
    scrollToDetail(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.research-container {
  background: linear-gradient(135deg, #0a1929 0%, #112540 100%);
  color: white;
  min-height: 100vh;
}

.page-header {
  background: url('../assets/bg/research.jpg') center/cover no-repeat;
  padding: 120px 0;
  text-align: center;
  position: relative;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(10, 25, 41, 0.9), rgba(17, 37, 64, 0.85));
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  font-weight: 700;
}

.page-header p {
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
  color: rgba(255, 255, 255, 0.9);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.research-overview {
  padding: 80px 0;
}

.overview-content {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.overview-content h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #4e6ef2;
}

.overview-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.area-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.area-item:hover {
  transform: translateY(-10px);
  background: rgba(78, 110, 242, 0.1);
  border-color: #4e6ef2;
}

.area-item:hover .area-arrow {
  transform: translateX(5px);
}

.area-icon {
  font-size: 2.5rem;
  color: #4e6ef2;
  margin-bottom: 20px;
}

.area-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.area-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.area-arrow {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: #4e6ef2;
  transition: transform 0.3s ease;
}

.research-details {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d1d31 0%, #142c4a 100%);
}

.detail-item {
  margin-bottom: 80px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.detail-icon {
  font-size: 2rem;
  color: #7b61ff;
  margin-right: 20px;
}

.detail-title {
  font-size: 2rem;
  font-weight: 600;
}

.detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.detail-text p {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.research-topics {
  margin-top: 30px;
}

.research-topics h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #4e6ef2;
}

.research-topics ul {
  list-style: none;
  padding: 0;
}

.research-topics li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: rgba(255, 255, 255, 0.8);
}

.research-topics li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #7b61ff;
  font-size: 1.2rem;
}

.detail-image {
  overflow: hidden;
  border-radius: 10px;
}

.detail-image img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.detail-image:hover img {
  transform: scale(1.05);
}

.research-methods {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  margin: 20px auto 0;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.method-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.method-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.method-number {
  position: absolute;
  top: -20px;
  right: 30px;
  font-size: 8rem;
  font-weight: 700;
  color: rgba(78, 110, 242, 0.1);
  line-height: 1;
}

.method-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: #4e6ef2;
}

.method-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .overview-content h2 {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .detail-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .detail-item {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .area-item,
  .method-item {
    padding: 25px 20px;
  }
}
</style>