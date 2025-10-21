<template>
  <div class="team-container">
    <div class="page-header">
      <h1>研究团队</h1>
      <p>汇聚行业顶尖人才，引领数据智能创新</p>
    </div>

    <!-- 团队介绍 -->
    <section class="team-intro">
      <div class="container">
        <div class="intro-content">
          <h2>团队概述</h2>
          <p>数据智能创新中心成立于2019年，是专注于数据科学、人工智能和大数据分析的研究机构。团队由来自国内外知名高校和企业的专家学者组成，致力于推动数据智能技术的研发与应用。</p>
          <p>我们的研究涵盖机器学习、深度学习、自然语言处理、计算机视觉等多个领域，在学术研究和产业应用方面均取得了丰硕成果。</p>
        </div>
        <div class="intro-stats">
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">研究人员</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">学术论文</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">科研项目</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">8+</div>
            <div class="stat-label">合作企业</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员 -->
    <section class="team-members">
      <div class="container">
        <h2 class="section-title">核心成员</h2>
        <div class="members-grid">
          <div class="member-card" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image">
              <img :src="member.image" alt="" :alt="member.name">
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-title">{{ member.title }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-areas">
                <span class="area-tag" v-for="(area, idx) in member.researchAreas" :key="idx">{{ area }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
  data() {
    return {
      teamMembers: [
        {
          name: '张教授',
          title: '中心主任 / 首席科学家',
          image: 'https://picsum.photos/id/10/300/300',
          bio: '博士生导师，国家杰出青年科学基金获得者，在数据挖掘和机器学习领域拥有20年研究经验。',
          researchAreas: ['机器学习', '数据挖掘', '人工智能']
        },
        {
          name: '李博士',
          title: '副主任 / 研究员',
          image: 'https://picsum.photos/id/11/300/300',
          bio: '哈佛大学博士，曾任职于谷歌研究院，主要研究方向为深度学习和计算机视觉。',
          researchAreas: ['深度学习', '计算机视觉', '图像识别']
        },
        {
          name: '王教授',
          title: '研究员',
          image: 'https://picsum.photos/id/12/300/300',
          bio: '麻省理工学院博士后，在自然语言处理和知识图谱领域发表论文40余篇。',
          researchAreas: ['自然语言处理', '知识图谱', '语义理解']
        },
        {
          name: '赵博士',
          title: '副研究员',
          image: 'https://picsum.photos/id/13/300/300',
          bio: '斯坦福大学博士，专注于强化学习和智能决策系统研究，获得多项国际大奖。',
          researchAreas: ['强化学习', '智能决策', '多智能体系统']
        },
        {
          name: '陈博士',
          title: '高级工程师',
          image: 'https://picsum.photos/id/14/300/300',
          bio: '前阿里巴巴技术专家，在大数据平台架构和分布式计算方面经验丰富。',
          researchAreas: ['大数据', '分布式计算', '系统架构']
        },
        {
          name: '刘教授',
          title: '研究员',
          image: 'https://picsum.photos/id/15/300/300',
          bio: '清华大学博士，主要研究方向为隐私保护机器学习和联邦学习。',
          researchAreas: ['隐私计算', '联邦学习', '安全机器学习']
        }
      ]
    }
  }
}
</script>

<style scoped>
.team-container {
  background: linear-gradient(135deg, #0a1929 0%, #112540 100%);
  color: white;
  min-height: 100vh;
}

.page-header {
  background: url('https://picsum.photos/id/20/1920/600') center/cover no-repeat;
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

.team-intro {
  padding: 80px 0;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.intro-content h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #4e6ef2;
}

.intro-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 15px;
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: center;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #7b61ff;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.team-members {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d1d31 0%, #142c4a 100%);
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

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.member-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.member-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-image img {
  transform: scale(1.1);
}

.member-info {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-name {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #4e6ef2;
}

.member-title {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
}

.member-bio {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
  flex: 1;
}

.member-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.area-tag {
  background: rgba(78, 110, 242, 0.2);
  color: #4e6ef2;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(78, 110, 242, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 80px 0;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .intro-content h2 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .members-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .intro-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .member-info {
    padding: 20px;
  }
}
</style>