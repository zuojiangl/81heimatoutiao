<template>
  <el-card v-loading="loading">
    <!-- el-card具名插槽 -->
    <bread-crumb slot="header">
      <!-- 面包屑具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- el-card匿名插槽 -->
    <!-- 表格组件 -->
    <el-table :data="list" stripe>
      <el-table-column prop="title" width="500px" label="标题"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <el-button type="text">修改</el-button>
          <el-button
            @click="closeOrOpen(obj.row)"
            :style="{color: obj.row.comment_status ? '#E6A23C' : '#409EFF'}"
            type="text"
          >{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin:20px 0">
      <el-pagination :page-size="page.pageSize" :current-page="page.currentPage"  :total="page.total" @current-change="changePage" background layout="prev, pager, next"></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        pageSize: 10,
        total: 0,
        currentPage: 1
      },
      loading: false
    }
  },
  methods: {
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getComments()
    },
    closeOrOpen (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${mess}评论吗`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(() => {
          this.getComments()
        })
      })
    },
    // 查询评论列表数据
    getComments () {
      this.loading = true
      let pageParams = { page: this.page.currentPage,
        per_page: this.page.pageSize }
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          ...pageParams
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count// 获取总页数
        this.loading = false
      })
    },
    formatter (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
</style>
