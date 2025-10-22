<template>
  <div class="achievements-container">
    <div class="page-header">
      <h1>成果展示</h1>
      <p>学术研究与技术创新成果</p>
    </div>

    <!-- 成果概览 -->
    <section class="achievements-overview">
      <div class="container">
        <div class="overview-content">
          <h2>研究成果</h2>
          <p>数据智能创新中心在数据科学、人工智能等领域取得了丰硕的研究成果，包括学术论文、专利、软件著作权、科研项目等。这些成果反映了我们在前沿技术研究和应用方面的实力和贡献。</p>
        </div>
        <div class="achievements-stats">
          <div class="stat-item">
            <div class="stat-icon"><el-icon>
                <Document />
              </el-icon></div>
            <div class="stat-number">80+</div>
            <div class="stat-label">学术论文</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><el-icon>
                <Medal />
              </el-icon></div>
            <div class="stat-number">30+</div>
            <div class="stat-label">专利技术</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><el-icon>
                <Cpu />
              </el-icon></div>
            <div class="stat-number">50+</div>
            <div class="stat-label">软件著作权</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><el-icon>
                <Trophy />
              </el-icon></div>
            <div class="stat-number">40+</div>
            <div class="stat-label">科研项目</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 论文成果 -->
    <section class="papers-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">代表性论文</h2>
          <div class="section-tabs">
            <el-tabs v-model="activeTab">
              <el-tab-pane label="2025年">
                <div class="papers-grid">
                  <div class="paper-card" v-for="(paper, index) in papers2025" :key="index">
                    <div class="paper-info">
                      <h3 class="paper-title">{{ paper.title }}</h3>
                      <p class="paper-authors">{{ paper.authors }}</p>
                      <p class="paper-venue"><span class="venue-tag">{{ paper.venue }}</span></p>
                      <div class="paper-links">
                        <span href="#" class="link-btn">{{ paper.type }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="2024年">
                <div class="papers-grid">
                  <div class="paper-card" v-for="(paper, index) in papers2024" :key="index">
                    <div class="paper-info">
                      <h3 class="paper-title">{{ paper.title }}</h3>
                      <p class="paper-authors">{{ paper.authors }}</p>
                      <p class="paper-venue"><span class="venue-tag">{{ paper.venue }}</span></p>
                      <div class="paper-links">
                        <span href="#" class="link-btn">{{ paper.type }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </section>

    <!-- 专利成果 -->
    <section class="patents-section">
      <div class="container">
        <h2 class="section-title">知识产权</h2>
        <div class="patents-grid">
          <div class="patent-card" v-for="(patent, index) in patents" :key="index">
            <div class="patent-header">
              <span class="patent-type">{{ patent.type }}</span>
              <span class="patent-date">{{ patent.date }}</span>
            </div>
            <h3 class="patent-title">{{ patent.title }}</h3>
            <div class="patent-number">专利号：{{ patent.number }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目成果 -->
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">科研项目</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index">

            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-funding">{{ project.funding }}</p>
              <p class="project-period">项目时间：{{ project.period }}</p>
              <p class="project-desc">{{ project.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AchievementsView',
  data() {
    return {
      activeTab: '0',
      papers2025: [
        {
          title: 'Artificial vision system design and implementation  Journal of Materials Chemistry C',
          authors: '何惠',
          venue: 'Journal of Materials Chemistry C',
          type: 'SCI',
          year: 2025
        },
        {
          title: 'CdSe quantum dots photoelectric memristors for simulating biological visual system behavior',
          authors: '何惠',
          venue: 'Applied Physics Letters',
          type: 'SCI',
          year: 2025
        },
        {
          title: 'Corn Leaf Spot Disease Recognition Based on Improved YOLOv8',
          authors: '姚竟发',
          venue: 'Agriculture-Basel',
          type: 'SCI',
          year: 2025
        },
        {
          title: 'Surface detection method of glass fibre composites based on computer vision',
          authors: '石彦芳',
          venue: 'International Journal of Modelling Identification and Control',
          type: 'EI',
          year: 2025
        }, {
          title: 'Estimation of pile settlement applying hybrid ALO-MLP and GOA-MLP approaches',
          authors: '胡金扣',
          venue: 'Journal of Applied Science and Engineering',
          type: 'EI',
          year: 2025
        },

      ],
      papers2024: [
        {
          title: 'A Hamming Weight Calculation of Binary String in One nMOS TransistorOne Ag/HfO2/Black Phosphorus/Pt Memristor',
          authors: '何惠',
          venue: 'IEEE Transactions On Electron Devices',
          type: 'SCI',
          year: 2024
        },
        {
          title: 'An intelligent model approach for leakage detection of modiffed atmosphere pillow bags',
          authors: '姚竟发',
          venue: 'Engineering Applications of Artiffcial Intelligence',
          type: 'SCI',
          year: 2024
        },
        {
          title: 'Improved YOLOv5 Network for Detection of Peach Blossom Quantity',
          authors: '姚竟发',
          venue: 'Agriculture-Basel',
          type: 'SCI',
          year: 2024
        },
        {
          title: 'Human activities recognition from video images by using convolutional neural network',
          authors: '王丹',
          venue: 'Journal of Intelligent & Fuzzy Systems',
          type: 'EI',
          year: 2024
        },
      ],
      patents: [
        {
          "title": "一种智慧交通监测识别与调控方法及系统",
          "type": "发明专利",
          "date": "2025-06",
          "number": "第7981637号"
        },
        {
          "title": "一种基于3d虚拟仿真的场景展示系统及方法",
          "type": "发明专利",
          "date": "2024-11",
          "number": "第7517577号"
        },

        {
          "title": "分级认证系统及方法",
          "type": "发明专利",
          "date": "2024-07",
          "number": "CN118802166A"
        },
        {
          "title": "物联网组网优化技术",
          "type": "发明专利",
          "date": "2024-05",
          "number": "CN118801960A"
        },
        {
          "title": "一种基于机器视觉的汽车漆膜缺陷检测装置",
          "type": "实用新型专利",
          "date": "2025-01",
          "number": "第22291636号"
        },
        {
          "title": "E 波段微波通信信号处理装置",
          "type": "实用新型专利",
          "date": "2024-06",
          "number": "CN222814225U"
        },
        {
          "title": "一种交通信号灯防绿冲突装置",
          "type": "实用新型专利",
          "date": "2023-01",
          "number": "第18312990号"
        },
        {
          "title": "一种车载低频射频检测装置",
          "type": "实用新型专利",
          "date": "2023-10",
          "number": "第19813001号"
        },
        {
          "title": "一种磁钢连接式交通护栏",
          "type": "实用新型专利",
          "date": "2023-12",
          "number": "第20101751号"
        },
        {
          "title": "城市魔方交通信号控制机",
          "type": "外观设计专利",
          "date": "2023-07",
          "number": "第8149487号"
        }
      ],
      projects: [
        {
          "title": "医疗大数据分析与人工智能在疾病预测和诊断中的应用",
          "funding": "河北省教育厅",
          "period": "2023.11",
          "type": "纵向课题"
        },
        {
          "title": "基于深度学习技术的智慧就业推荐系统研究与实现",
          "funding": "河北省教育厅",
          "period": "2023.12-2025.12",
          "type": "纵向课题"
        },
        {
          "title": "生成式人工智能下高职院校网络舆情风险和应对策略研究",
          "funding": "河北省教育厅",
          "period": "2023.11-2025.5",
          "type": "纵向课题"
        },
        {
          "title": "绿色建筑发展背景下建筑钢结构用多功能防火涂料的研发与应用",
          "funding": "河北省教育厅",
          "period": "2024.12",
          "type": "纵向课题"
        },

        {
          "title": "机器视觉技术在智能制造领域中的基础研究",
          "funding": "保定市科技局",
          "period": "2023.11-2024.12",
          "type": "纵向课题"
        },
        {
          "title": "智能制造领域机器视觉应用研究",
          "funding": "保定市科技局",
          "period": "2023.11-2024.12",
          "type": "纵向课题"
        },
        {
          "title": "保定市基于全生命周期的智能建造BIM5D技术应用研究",
          "funding": "保定市科技局",
          "period": "2024.4",
          "type": "纵向课题"
        },
        {
          "title": "基于Three.js与AIoT技术的智慧楼宇综合管理平台设计",
          "funding": "河北省教育厅",
          "period": "2023.11-2025.12",
          "type": "纵向课题"
        },
        {
          "title": "智慧城市背景下老年人可穿戴式监护设备软件系统的设计研究",
          "funding": "河北省教育厅",
          "period": "2023.11-2025.12",
          "type": "纵向课题"
        },
        {
          "title": "“特种兵学校”系列图书项目",
          "funding": "河北少年儿童出版社有限责任公司",
          "period": "2024.3.11",
          "type": "横向课题"
        },
        {
          "title": "动动移动信号灯微信小程序",
          "funding": "维特瑞交通科技有限公司",
          "period": "2024.6-2024.10",
          "type": "横向课题"
        },
        {
          "title": "计算机性能优化方案设计及测试",
          "funding": "保定市莲池区宗敏电子商行",
          "period": "2023.12-2024.6",
          "type": "横向课题"
        },
        {
          "title": "“快乐农场”劳动教学服务系统",
          "funding": "九州永定农业股份有限公司",
          "period": "2023.8-2024.7",
          "type": "横向课题"
        }
      ]
    }
  }
}
</script>

<style scoped>
.achievements-container {
  background: linear-gradient(135deg, #0a1929 0%, #112540 100%);
  color: white;
  min-height: 100vh;
}

.page-header {
  background: url('../assets/bg/reward.jpg') center/cover no-repeat;
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

.achievements-overview {
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

.achievements-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:hover {
  transform: translateY(-10px);
  background: rgba(78, 110, 242, 0.1);
}

.stat-icon {
  font-size: 3rem;
  color: #7b61ff;
  margin-bottom: 20px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.papers-section,
.patents-section,
.projects-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d1d31 0%, #142c4a 100%);
  margin-bottom: 40px;
}

.projects-section {
  margin-bottom: 0;
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

.papers-grid,
.patents-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.paper-card,
.patent-card,
.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.paper-card:hover,
.patent-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.paper-title,
.patent-title,
.project-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: #4e6ef2;
}

.paper-authors {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.venue-tag {
  background: rgba(78, 110, 242, 0.2);
  color: #4e6ef2;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.paper-abstract {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 15px 0;
  font-size: 0.95rem;
}

.paper-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.link-btn {
  background: #4e6ef2;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.link-btn:hover {
  background: #7b61ff;
  transform: translateY(-2px);
}

.patent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.patent-type {
  background: rgba(123, 97, 255, 0.2);
  color: #7b61ff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.patent-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.patent-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 15px 0;
  font-size: 0.95rem;

}

.patent-number {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 15px;
}

.project-image {
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-funding {
  color: #7b61ff;
  margin-bottom: 10px;
  font-size: 1rem;
}

.project-period {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.project-desc {
  height: 30px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  width: 90px;
  text-align: center;
  border-radius: 20px;
  background-color: #7b61ff;
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

  .papers-grid,
  .patents-grid,
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .stat-item {
    padding: 30px 20px;
  }

  .paper-card,
  .patent-card,
  .project-card {
    padding: 25px 20px;
  }
}
</style>