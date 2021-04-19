<template>
  <!-- 我的简历页面 -->
  <div class="container" v-if="!showCreate">
    <div class="title">
      <span>我的简历</span>
    </div>
    <el-divider></el-divider>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="专业技能" prop="ability">
              <el-input size="medium" v-model="form.ability" placeholder="请填写专业技能"></el-input>
            </el-form-item>
            <el-form-item label="工作经历" prop="work_experience">
              <el-input size="medium" v-model="form.work_experience" placeholder="请填写工作经历"></el-input>
            </el-form-item>
            <el-form-item label="项目经历" prop="project_experience">
              <el-input size="medium" v-model="form.project_experience" placeholder="请填写项目经历"></el-input>
            </el-form-item>
            <el-form-item label="教育经历" prop="education_experience">
              <el-input size="medium" v-model="form.education_experience" placeholder="请填写教育经历"></el-input>
            </el-form-item>
            <el-form-item label="个人总结" prop="personal_summary">
              <el-input size="medium" v-model="form.personal_summary" placeholder="请填写个人总结"></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>

  <!-- 创建简历 -->
  <resume-create v-else @createClose="createClose"></resume-create>
</template>

<script>
import {Resume} from '@/model/resume'
import ResumeCreate from '@/view/resume/resume-create'

export default {
  components: {
    ResumeCreate,
  },
  data() {
    return {
      loading: false,
      form: {
      },
      showCreate: false,
    }
  },
  async mounted() {
    try {
      this.loading = true
      const res = await Resume.getByUserId(this.$store.getters.user.id)
      this.form = res
      this.loading = false
    } catch (error) {
      this.loading = false
      console.log(error)
      // 还未创建简历，会来到简历创建页面
      this.showCreate = true
    }
  },
  methods: {
    async submitForm() {
      // 获取到当前登录求职者的用户id
      this.form.user_id = this.$store.getters.user.id
      const res = await Resume.update(this.form.user_id, this.form)
      if (res.code < window.MAX_SUCCESS_CODE) {
        this.$message.success(`${res.message}`)
      }
      // 刷新页面，获取修改后的最新信息
      this.loading = true
      const result = await Resume.getByUserId(this.$store.getters.user.id)
      this.form = result
      this.loading = false
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async createClose() {
      this.showCreate = false
      // 再次访问接口填充表单数据
      this.loading = true
      const res = await Resume.getByUserId(this.$store.getters.user.id)
      this.form = res
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 0;
}

.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;

    .back {
      float: right;
      margin-right: 40px;
      cursor: pointer;
    }
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
