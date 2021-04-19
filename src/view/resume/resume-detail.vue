<template>
  <div class="container">
    <div class="title">
      <span>简历详细信息</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
    </div>
    <el-divider></el-divider>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="专业技能" prop="ability">
              <el-input size="medium" v-model="form.ability" placeholder="请填写专业技能" disabled></el-input>
            </el-form-item>
            <el-form-item label="工作经历" prop="work_experience">
              <el-input size="medium" v-model="form.work_experience" placeholder="请填写工作经历" disabled></el-input>
            </el-form-item>
            <el-form-item label="项目经历" prop="project_experience">
              <el-input size="medium" v-model="form.project_experience" placeholder="请填写项目经历" disabled></el-input>
            </el-form-item>
            <el-form-item label="教育经历" prop="education_experience">
              <el-input size="medium" v-model="form.education_experience" placeholder="请填写教育经历" disabled></el-input>
            </el-form-item>
            <el-form-item label="个人总结" prop="personal_summary">
              <el-input size="medium" v-model="form.personal_summary" placeholder="请填写个人总结" disabled></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <!--通过申请的状态属性state来控制通过按钮和不通过按钮是否显示-->
              <el-button type="primary" @click="handlePass('form')" v-if="this.applicationState==0">通 过</el-button>
              <el-button @click="handleFail('form')" v-if="this.applicationState==0">不通过</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {Resume} from '@/model/resume'
import {Application} from '@/model/application'

export default {
  // 定义变量
  props: {
    detailResumeID: {
      type: Number,
    },
    applicationID: {
      type: Number,
    },
    applicationState: {
      type: Number,
    }
  },
  data() {
    return {
      loading: false,
      form: {
      },
    }
  },
  async mounted() {
    try {
      this.loading = true
      const res = await Resume.getById(this.detailResumeID)
      this.form = res
      this.loading = false
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  },
  methods: {
    async handlePass(val) {
        const res = await Application.updateState(this.applicationID, 1)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.$message.success(`${res.message}`)
          // 返回查询所有未处理简历的页面
          this.$emit('detailClose')
        }
    },
    async handleFail(val) {
        const res = await Application.updateState(this.applicationID, 2)
        if (res.code < window.MAX_SUCCESS_CODE) {
            this.$message.success(`${res.message}`)
            // 返回查询所有未处理简历的页面
            this.$emit('detailClose')
        }
    },
    back() {
      this.$emit('detailClose')
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
