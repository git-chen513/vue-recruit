<template>
  <div class="container" v-if="!showDetail">
    <div class="header">
      <div class="title">未处理的简历</div>
    </div>
    <el-table stripe v-loading="loading" :data="tableData">
      <el-table-column prop="nickname" label="名字" width="250"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="250"></el-table-column>
      <el-table-column prop="title" label="职位名称" width="250"></el-table-column>
      <el-table-column prop="grade" label="简历分数" width="250"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click.prevent="handleDetail(scope.row)" type="primary" plain size="mini">查看简历</el-button>
          <el-button @click.prevent="handlePass(scope.row)" type="success" plain size="mini">通过</el-button>
          <el-button @click.prevent="handleFail(scope.row)" type="warning" plain size="mini">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :background="true"
        :page-size="pageCount"
        :current-page="currentPage"
        v-if="refreshPagination"
        layout="prev, pager, next, jumper"
        :total="totalNums"
      ></el-pagination>
    </div>
  </div>
  <!-- 简历详情页 -->
  <resume-detail v-else @detailClose="detailClose" :detailResumeID="detailResumeID" :applicationID="applicationID" :applicationState="applicationState"></resume-detail>
</template>

<script>
import {Application} from '@/model/application'
import ResumeDetail from '@/view/resume/resume-detail'

export default {
  components: {
    ResumeDetail,
  },
  data() {
    return {
      showDetail: false,
      tableData: [],
      totalNums: 0,
      currentPage: 1,
      pageCount: 10,
      refreshPagination: true,
      detailResumeID: 0,
      applicationID: 0,
      applicationState: 0,
    }
  },
  async created() {
    this.loading = true
    this.getByHrId()
    this.loading = false
  },
  methods: {
    async getByHrId() {
      const page = this.currentPage - 1
      const count = this.pageCount
      // 未处理：state=0
      const applications = await Application.getByHrId(this.$store.getters.user.id, 0)
      this.tableData = applications.items
      this.totalNums = applications.total
    },
    // 切换table页
    async handleCurrentChange(val) {
      this.currentPage = val
      this.loading = true
      this.getByHrId()
      this.loading = false
    },
    handleDetail(val) {
      this.showDetail = true
      this.detailResumeID = val.resume_id
      this.applicationID = val.id
      this.applicationState = val.state
    },
    async handlePass(val) {
        const res = await Application.updateState(val.id, 1)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.$message.success(`${res.message}`)
          // 刷新页面
          this.getByHrId()
        }
    },
    async handleFail(val) {
        const res = await Application.updateState(val.id, 2)
        if (res.code < window.MAX_SUCCESS_CODE) {
            this.$message.success(`${res.message}`)
            // 刷新页面
            this.getByHrId()
        }
    },
    rowClick() {},
    detailClose() {
      this.showDetail = false
      this.getByHrId()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      height: 59px;
      line-height: 59px;
      color: $parent-title-color;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }
}
</style>

