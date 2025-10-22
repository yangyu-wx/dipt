<template>
  <div class="cooperation-container">
    <div class="page-header">
      <h1>合作交流</h1>
      <p>携手合作，共创未来</p>
    </div>

    <!-- 合作理念 -->
    <section class="cooperation-vision">
      <div class="container">
        <div class="vision-content">
          <h2>合作理念</h2>
          <p>河北软件职业技术学院数据智能创新中心秉持开放合作的理念，致力于构建产学研协同创新生态。我们欢迎与高校、企业、科研机构等开展多形式的合作，共同推动数据智能技术的发展和应用。</p>
        </div>
        <div class="vision-image">
          <img src="../assets/hezuo.jpg" alt="合作交流">
        </div>
      </div>
    </section>

    <!-- 合作方式 -->
    <section class="cooperation-modes">
      <div class="container">
        <h2 class="section-title">合作方式</h2>
        <div class="modes-grid">
          <div class="mode-card" v-for="(mode, index) in cooperationModes" :key="index">
            <div class="mode-icon">
              <el-icon>
                <component :is="mode.icon" />
              </el-icon>
            </div>
            <h3 class="mode-title">{{ mode.title }}</h3>
            <p class="mode-desc">{{ mode.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2 class="section-title">联系我们</h2>
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon"><el-icon>
                  <Location />
                </el-icon></div>
              <div class="info-text">
                <h4>地址</h4>
                <p>河北省保定市莲池区东风东路999号</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon"><el-icon>
                  <Phone />
                </el-icon></div>
              <div class="info-text">
                <h4>电话</h4>
                <p>0312-5097654</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon"><el-icon>
                  <Message />
                </el-icon></div>
              <div class="info-text">
                <h4>邮箱</h4>
                <p>wangxiang@hbsi.edu.cn</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <el-form :model="contactForm" label-position="top">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="您的姓名" prop="name">
                    <el-input v-model="contactForm.name" placeholder="请输入您的姓名"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="联系邮箱" prop="email">
                    <el-input v-model="contactForm.email" placeholder="请输入您的邮箱"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="合作意向" prop="subject">
                    <el-input v-model="contactForm.subject" placeholder="请简要描述您的合作意向"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="详细信息" prop="message">
                    <el-input v-model="contactForm.message" type="textarea" :rows="4" placeholder="请输入详细信息"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item>
                    <el-button type="primary" class="submit-btn" @click="submitForm">提交信息</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CooperationView',
  data() {
    return {
      cooperationModes: [
        {
          icon: 'Search',
          title: '联合研究',
          description: '共同申请科研项目，开展前沿技术研究，发表高水平学术论文，联合培养学生。'
        },
        {
          icon: 'Connection',
          title: '技术合作',
          description: '针对企业实际需求，提供技术咨询、方案设计、系统开发等服务，共同解决技术难题。'
        },
        {
          icon: 'School',
          title: '人才培养',
          description: '开展联合培训、实习实践、学术讲座等活动，培养数据科学领域的专业人才。'
        },
        {
          icon: 'Share',
          title: '资源共享',
          description: '共享数据集、计算资源、实验环境等，降低研发成本，提高创新效率。'
        }
      ],
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里可以添加表单验证和提交逻辑
      this.$message.success('信息提交成功，我们将尽快与您联系！')
      // 重置表单
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.cooperation-container {
  background: linear-gradient(135deg, #0a1929 0%, #112540 100%);
  color: white;
  min-height: 100vh;
}

.page-header {
  background: url('../assets/bg/hezuo.jpg') center/cover no-repeat;
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

.cooperation-vision {
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.vision-content {
  flex: 1;
  padding-right: 60px;
}

.vision-content h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #4e6ef2;
}

.vision-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.vision-image {
  flex: 1;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
}

.vision-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.vision-image:hover img {
  transform: scale(1.05);
}

.cooperation-modes {
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

.modes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.mode-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.mode-card:hover {
  transform: translateY(-10px);
  background: rgba(78, 110, 242, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.mode-icon {
  font-size: 3rem;
  color: #7b61ff;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.mode-card:hover .mode-icon {
  transform: scale(1.1);
}

.mode-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.mode-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

.cooperation-cases {
  padding: 80px 0;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.case-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.case-image {
  height: 200px;
  overflow: hidden;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .case-image img {
  transform: scale(1.05);
}

.case-info {
  padding: 25px;
}

.case-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: #4e6ef2;
}

.case-partner {
  color: #7b61ff;
  margin-bottom: 15px;
  font-size: 1rem;
}

.case-desc {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d1d31 0%, #142c4a 100%);
}

.contact-content {
  max-width: 900px;
  margin: 0 auto;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-icon {
  font-size: 2rem;
  color: #4e6ef2;
  margin-right: 20px;
}

.info-text h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.info-text p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  padding: 40px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.el-form-item__label {
  color: white !important;
  font-size: 1rem !important;
}

.el-input__wrapper {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.el-input__inner {
  color: white !important;
  background-color: transparent !important;
}

.submit-btn {
  background: linear-gradient(90deg, #4e6ef2, #7b61ff);
  border: none;
  padding: 12px 40px;
  font-size: 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(78, 110, 242, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 80px 0;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .cooperation-vision {
    flex-direction: column;
    padding: 60px 0;
  }

  .vision-content {
    padding-right: 0;
    margin-bottom: 40px;
  }

  .vision-image {
    width: 100%;
    height: 300px;
  }

  .vision-content h2 {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cases-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .contact-form {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .mode-card,
  .info-item {
    padding: 25px 20px;
  }
}
</style>