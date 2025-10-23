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
          <p>数据智能创新中心成立于2023年，是专注于数据科学、人工智能和大数据分析的研究机构。团队由来自国内知名高校和企业的专家学者组成，致力于推动数据智能技术的研发与应用。</p>
          <p>我们的研究涵盖大数据即使、机器学习、深度学习、自然语言处理、计算机视觉、软件技术等多个领域，在学术研究和产业应用方面均取得了丰硕成果。</p>
        </div>
        <div class="intro-stats">
          <div class="stat-item">
            <div class="stat-number">40+</div>
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
            <div class="stat-number">10+</div>
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
          name: '刘海龙',
          title: '中心主任',
          image: '/mamber/liuhailong.jpg',
          bio: '副教授，计算机工程硕士，河北软件职业技术学院教务处处长，兼任全国计算机与电商专委会常务委员。近三年在国内外期刊发表论文10余篇；主要参与编写教材3部，其中一部获评国家规划教材，承担市厅级以上课题5项，出版专著1部；发表实用新型专利1项，软件著作权4项；曾获国家级教学成果二等奖；指导学生参加全国职业技能大赛区块链技术应用、大数据技术应用赛项省赛一等奖两项，获省级优秀指导老师称号；曾获保定市优秀共产党员等荣誉。',
          researchAreas: ['机器学习', '数据挖掘', '人工智能']
        },
        {
          name: '耿兴隆',
          title: '中心副主任',
          image: '/mamber/gengxinglong.jpg',
          bio: '副教授，硕士，河北软件职业技术学院软件工程系副主任，人工智能技术应用专业群带头人，微软银牌讲师，河北省高级“双师型”教师。兼任全国电子商务职业教育教学指导委员会委员，河北省首批技工教育和职业培训教学指导委员会委员，保定市科协科技创新智库专家，中国教育发展战略学会人工智能与机器人教育专业委员会委员，博雅大数据学院特聘讲师。曾获河北省职业院校技能大赛教学能力比赛二等奖。',
          researchAreas: ['大模型应用', '嵌入式开发', '机器学习']
        },
        {
          name: '石彦芳',
          title: '中心副主任',
          image: '/mamber/shiyanfang.jpg',
          bio: '教授，硕士，软件开发工作室负责人，河北省高校黄大年式教师团队成员，河北省职业技能大赛软件测试赛项裁判长，河北省计算机教育研究会会员，河北软件职业技术学院学术委员会委员。主要研究方向为人工智能与大模型开发、软件项目管理，曾主持河北省教育厅“基于Three.js与Alot技术的智慧楼宇综合管理平台设计”、河北省人力资源与社会保障厅“AI大模型赋能软件技能人才培养，解决产业转型背景下人才质量提升问题”、保定市科技局“数理统计在排水管道维护管理系统中的分析与研究”等项目。',
          researchAreas: ['大模型应用', '人工智能', '软件技术']
        },
        {
          name: '刘丽华',
          title: '学术带头人',
          image: '/mamber/liulihua.jpg',
          bio: '副教授，硕士，河北软件职业技术学院专任教师，软件开发工作室核心开发人员。主要研究方向为人工智能与智慧交通、软件开发与测试，主持“基于语义Web物流系统的研究”、“基于云计算的数据挖掘平台的研究与应用”等多项市厅级课题，公开发表《Application of K-means supported by clustered systems in big data association rule mining》、《计算机软件在化学化工数据处理中的应用》等学术论文10余篇。',
          researchAreas: ['大数据技术', '软件技术']
        },
        {
          name: '郝艳荣',
          title: '学术带头人',
          image: '/mamber/haoyanrong.jpg',
          bio: '副教授，硕士，河北软件职业技术学院软件技术专业（软件测试方向）带头人，软件开发工作室核心开发人员，“双师”型素质教师，全国职业院校技能大赛一等奖优秀指导教师，河北省职业院校技能大赛一等奖优秀指导教师，省级教学创新团队成员，国家级职业教育教学成果二等奖团队成员。从事软件技术专业教学工作10年，企业项目开发经验与教学经验丰富；参与软件技术专业、人工智能技术应用专业、大数据技术应用专业省级教学资源库建设.',
          researchAreas: ['软件技术', '人工智能', '系统测试']
        },
        {
          name: '何惠',
          title: '学术带头人',
          image: '/mamber/hehui.jpg',
          bio: '工学博士，河北软件职业技术学院专任教师。参与国家863计划项目课题“固体电解质纳米相变存储器研制”、“高密度存储与磁电子材料关键技术”、“基于超薄BiFeO3隧道结忆阻器的制备与类脑行为及其物理机制研究”，参与国家自然基金面上项目“基于外延铪基薄膜畴壁调控忆阻器仿神经网络计算与物理机制研究”，在《Nature Communications》、《Advanced Functional Materials》等期刊发表SCI论文10余篇。',
          researchAreas: ['智能体开发', '联邦学习','电路设计']
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
  background: url('../assets/bg/team-bg.jpg') center/cover no-repeat;
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
  object-fit: contain;
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