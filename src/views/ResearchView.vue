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
              <i :class="area.icon"></i>
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
            <div class="detail-icon"><i :class="area.icon"></i></div>
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
              <img :src="area.image" alt="{{ area.title }}">
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
          id: 'machine-learning',
          icon: 'el-icon-connection',
          title: '机器学习与数据挖掘',
          brief: '开发高效的机器学习算法和数据挖掘技术，从海量数据中提取有价值的信息和知识。',
          image: 'https://picsum.photos/id/30/600/400',
          details: [
            '本方向主要研究如何设计和实现高效的机器学习算法，特别是针对大规模、高维度、多模态数据的处理方法。我们关注算法的可解释性、鲁棒性和可扩展性，以及在实际应用中的性能优化。',
            '重点研究领域包括但不限于：深度学习、强化学习、迁移学习、联邦学习、主动学习等。我们的研究既有理论创新，也注重实际应用，成果已在智能推荐、异常检测、预测分析等多个领域得到应用。'
          ],
          topics: [
            '大规模深度学习模型优化',
            '联邦学习与隐私保护',
            '自监督学习与少样本学习',
            '时序数据挖掘与预测',
            '图神经网络与关系学习'
          ]
        },
        {
          id: 'nlp',
          icon: 'el-icon-chat-line-round',
          title: '自然语言处理',
          brief: '研究如何使计算机理解、处理和生成人类语言，实现人机自然语言交互。',
          image: 'https://picsum.photos/id/31/600/400',
          details: [
            '自然语言处理是人工智能的重要分支，本方向致力于开发能够理解和生成自然语言的智能系统。我们研究各种语言处理任务，如文本分类、情感分析、命名实体识别、关系抽取、机器翻译、问答系统等。',
            '近年来，我们特别关注预训练语言模型的优化与应用，以及多语言和跨模态语言处理技术。我们的研究成果已应用于智能客服、内容分析、信息检索等实际场景。'
          ],
          topics: [
            '大语言模型优化与应用',
            '多语言处理与机器翻译',
            '情感分析与意见挖掘',
            '知识图谱与语义理解',
            '对话系统与智能交互'
          ]
        },
        {
          id: 'computer-vision',
          icon: 'el-icon-picture',
          title: '计算机视觉',
          brief: '研究如何使计算机能够理解和解释图像和视频数据，模拟人类视觉系统的功能。',
          image: 'https://picsum.photos/id/32/600/400',
          details: [
            '计算机视觉是人工智能领域的重要研究方向，本方向致力于开发能够从图像和视频中提取信息的算法和系统。我们研究图像分类、目标检测、语义分割、姿态估计、行为识别等核心任务。',
            '我们特别关注多模态视觉理解、视频分析、场景理解等前沿问题，以及在安防、自动驾驶、医疗影像等领域的应用。我们的研究团队在国际计算机视觉顶级会议上发表了多篇论文。'
          ],
          topics: [
            '多模态图像理解',
            '视频分析与行为识别',
            '目标检测与跟踪',
            '医学影像分析',
            '3D视觉与重建'
          ]
        },
        {
          id: 'big-data',
          icon: 'el-icon-data-line',
          title: '大数据分析与处理',
          brief: '研究大规模数据的高效存储、处理和分析技术，为数据驱动决策提供支持。',
          image: 'https://picsum.photos/id/33/600/400',
          details: [
            '随着数据规模的爆炸式增长，大数据分析与处理技术变得越来越重要。本方向研究分布式计算、云计算、流计算等大规模数据处理技术，以及数据可视化、数据质量管理等关键问题。',
            '我们开发了多个大数据分析平台和工具，支持PB级数据的高效处理和分析。我们的研究成果已应用于互联网、金融、医疗、交通等多个领域，为企业和政府的决策提供了有力支持。'
          ],
          topics: [
            '分布式数据处理框架',
            '实时流数据处理',
            '数据可视化技术',
            '数据质量评估与管理',
            '大数据系统性能优化'
          ]
        },
        {
          id: 'ai-ethics',
          icon: 'el-icon-shield',
          title: '人工智能伦理与安全',
          brief: '研究人工智能技术发展中的伦理问题、安全风险和监管策略。',
          image: 'https://picsum.photos/id/34/600/400',
          details: [
            '随着人工智能技术的广泛应用，伦理问题和安全风险日益凸显。本方向研究AI公平性、透明度、隐私保护、安全性等问题，以及相关的政策和监管框架。',
            '我们的研究旨在确保人工智能技术的发展符合伦理标准和社会价值观，促进AI技术的负责任创新和应用。我们与法律、哲学、社会学等领域的专家合作，开展跨学科研究。'
          ],
          topics: [
            'AI公平性与偏见消除',
            '算法透明度与可解释性',
            '隐私保护机器学习',
            'AI安全与对抗性防御',
            'AI伦理政策与监管'
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
  background: url('https://picsum.photos/id/21/1920/600') center/cover no-repeat;
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