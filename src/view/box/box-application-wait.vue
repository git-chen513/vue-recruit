<template>
  <div class="container">
    <div class="header">
      <div class="title">待处理的申请</div>
    </div>
    <el-table stripe v-loading="loading" :data="tableData">
      <el-table-column prop="title" label="职位名称" width="250"></el-table-column>
      <el-table-column prop="position_city" label="工作地点" width="250"></el-table-column>
      <el-table-column prop="salary_down,salary_up" label="薪资" width="250">
        <template slot-scope="scope">
          {{scope.row.salary_down}}-{{scope.row.salary_up}}  
        </template>
      </el-table-column>
      <el-table-column prop="name" label="所属公司" width="250"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click.prevent="handleCancel(scope.row)" type="danger" plain size="mini">撤销申请</el-button>
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
</template>

<script>
import {Application} from '@/model/application'

export default {
  data() {
    return {
      tableData: [],
      totalNums: 0,
      currentPage: 1,
      pageCount: 10,
      refreshPagination: true,
    }
  },
  async created() {
    this.loading = true
    this.getByUserId()
    this.loading = false
  },
  methods: {
    async getByUserId() {
      const page = this.currentPage - 1
      const count = this.pageCount
      // 待处理：state=0
      const applications = await Application.getByUserId(this.$store.getters.user.id, 0)
      this.tableData = applications.items
      this.totalNums = applications.total
    },
    // 切换table页
    async handleCurrentChange(val) {
      this.currentPage = val
      this.loading = true
      this.getByUserId()
      this.loading = false
    },
    // 撤销申请
    handleCancel(val) {
        this.$confirm('是否撤销申请?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await Application.delete(val.id)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.getByUserId()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
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

