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
            <div class="stat-icon"><i class="el-icon-document"></i></div>
            <div class="stat-number">120+</div>
            <div class="stat-label">学术论文</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="el-icon-medal"></i></div>
            <div class="stat-number">30+</div>
            <div class="stat-label">专利技术</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="el-icon-cpu"></i></div>
            <div class="stat-number">50+</div>
            <div class="stat-label">软件著作权</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="el-icon-trophy"></i></div>
            <div class="stat-number">15+</div>
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
              <el-tab-pane label="2023年">
                <div class="papers-grid">
                  <div class="paper-card" v-for="(paper, index) in papers2023" :key="index">
                    <div class="paper-info">
                      <h3 class="paper-title">{{ paper.title }}</h3>
                      <p class="paper-authors">{{ paper.authors }}</p>
                      <p class="paper-venue"><span class="venue-tag">{{ paper.venue }}</span></p>
                      <p class="paper-abstract">{{ paper.abstract }}</p>
                      <div class="paper-links">
                        <a href="#" class="link-btn">PDF</a>
                        <a href="#" class="link-btn">代码</a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="2022年">
                <div class="papers-grid">
                  <div class="paper-card" v-for="(paper, index) in papers2022" :key="index">
                    <div class="paper-info">
                      <h3 class="paper-title">{{ paper.title }}</h3>
                      <p class="paper-authors">{{ paper.authors }}</p>
                      <p class="paper-venue"><span class="venue-tag">{{ paper.venue }}</span></p>
                      <p class="paper-abstract">{{ paper.abstract }}</p>
                      <div class="paper-links">
                        <a href="#" class="link-btn">PDF</a>
                        <a href="#" class="link-btn">代码</a>
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
        <h2 class="section-title">专利技术</h2>
        <div class="patents-grid">
          <div class="patent-card" v-for="(patent, index) in patents" :key="index">
            <div class="patent-header">
              <span class="patent-type">{{ patent.type }}</span>
              <span class="patent-date">{{ patent.date }}</span>
            </div>
            <h3 class="patent-title">{{ patent.title }}</h3>
            <p class="patent-desc">{{ patent.description }}</p>
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
            <div class="project-image">
              <img :src="project.image" alt="{{ project.title }}">
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-funding">{{ project.funding }}</p>
              <p class="project-period">项目周期：{{ project.period }}</p>
              <p class="project-desc">{{ project.description }}</p>
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
      papers2023: [
        {
          title: '基于图神经网络的大规模知识图谱推理方法研究',
          authors: 'Zhang L, Li J, Wang H, et al.',
          venue: 'IEEE Transactions on Knowledge and Data Engineering',
          abstract: '本研究提出了一种基于图神经网络的知识图谱推理方法，能够有效处理大规模知识图谱中的复杂推理任务，在多个标准数据集上取得了显著优于现有方法的性能。',
          year: 2023
        },
        {
          title: '面向隐私保护的联邦学习优化算法',
          authors: 'Liu Y, Chen M, Zhao K, et al.',
          venue: 'NeurIPS 2023',
          abstract: '针对联邦学习中的隐私保护和通信效率问题，提出了一种新型的优化算法，在保证模型性能的同时，显著降低了通信开销和隐私泄露风险。',
          year: 2023
        },
        {
          title: '多模态预训练语言模型的跨语言理解能力研究',
          authors: 'Wang Z, Zhang X, Li Y, et al.',
          venue: 'ACL 2023',
          abstract: '深入研究了多模态预训练语言模型在跨语言理解任务中的表现，发现了其关键优势和局限性，并提出了针对性的改进方法。',
          year: 2023
        }
      ],
      papers2022: [
        {
          title: '基于深度学习的医疗影像诊断系统设计与实现',
          authors: 'Chen W, Wang J, Liu B, et al.',
          venue: 'Nature Medicine',
          abstract: '开发了一套基于深度学习的医疗影像诊断系统，能够辅助医生进行疾病诊断，提高诊断准确率和效率，已在多家医院进行临床试验。',
          year: 2022
        },
        {
          title: '大规模时序数据的异常检测算法研究',
          authors: 'Li H, Zhang Q, Wang S, et al.',
          venue: 'ICML 2022',
          abstract: '提出了一种适用于大规模时序数据的异常检测算法，能够实时识别数据中的异常模式，在金融、交通等领域有广泛应用前景。',
          year: 2022
        },
        {
          title: '智能推荐系统中的公平性与多样性平衡研究',
          authors: 'Zhao M, Liu L, Chen X, et al.',
          venue: 'WWW 2022',
          abstract: '研究了智能推荐系统中公平性与多样性之间的平衡问题，提出了一种新的优化框架，能够在保证推荐效果的同时，提升系统的公平性和多样性。',
          year: 2022
        }
      ],
      patents: [
        {
          title: '一种基于深度学习的智能问答方法及系统',
          type: '发明专利',
          date: '2023-08',
          number: 'ZL202110456789.0',
          description: '本发明涉及一种基于深度学习的智能问答方法及系统，能够理解用户的自然语言问题，并从海量知识库中检索相关信息，生成准确的回答。'
        },
        {
          title: '一种面向大数据平台的数据安全防护系统',
          type: '发明专利',
          date: '2023-05',
          number: 'ZL202110345678.1',
          description: '本发明提供了一种面向大数据平台的数据安全防护系统，包括数据加密、访问控制、异常检测等多个模块，能够全方位保障数据安全。'
        },
        {
          title: '一种多模态数据融合分析方法',
          type: '发明专利',
          date: '2022-12',
          number: 'ZL202010678901.2',
          description: '本发明涉及一种多模态数据融合分析方法，能够有效整合文本、图像、音频等多种数据类型，提取更全面的特征信息。'
        },
        {
          title: '一种基于强化学习的智能决策系统',
          type: '发明专利',
          date: '2022-09',
          number: 'ZL202010567890.3',
          description: '本发明提供了一种基于强化学习的智能决策系统，能够在复杂环境中自主学习最优决策策略，适用于智能控制、资源调度等场景。'
        }
      ],
      projects: [
        {
          title: '国家重点研发计划：大数据驱动的智能决策理论与方法',
          funding: '国家自然科学基金重点项目',
          period: '2023-2026',
          description: '研究大数据环境下智能决策的理论基础和方法体系，开发面向复杂系统的智能决策支持系统。',
          image: 'https://picsum.photos/id/40/600/400'
        },
        {
          title: '面向医疗健康的人工智能辅助诊断系统研发',
          funding: '产学研合作项目',
          period: '2022-2024',
          description: '开发基于深度学习的医疗影像辅助诊断系统，提高疾病早期诊断的准确率和效率。',
          image: 'https://picsum.photos/id/41/600/400'
        },
        {
          title: '智慧城市大数据分析平台建设',
          funding: '地方政府重点项目',
          period: '2021-2023',
          description: '构建智慧城市大数据分析平台，实现城市运行数据的实时监测、分析和智能决策。',
          image: 'https://picsum.photos/id/42/600/400'
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
  background: url('https://picsum.photos/id/22/1920/600') center/cover no-repeat;
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
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
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