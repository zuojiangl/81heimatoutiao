<template>
  <el-card>
    <!-- el-card具名插槽 -->
    <bread-crumb slot="header">
      <!-- 面包屑具名插槽 -->
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <div class="imgList">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row align="middle" class="operate" type="flex" justify="space-around">
              <i :style="{color:item.is_collected ? 'red' : ''}" @click="collectOrCancel(item)" class="el-icon-star-on"></i>
              <i @click="delMaterial(item)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :total="page.total"
            @current-change="changePage"
            background
            layout="prev, pager, next"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏素材" name="collect">
        <div class="imgList">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row align="middle" class="operate" type="flex" justify="space-around"></el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :total="page.total"
            @current-change="changePage"
            background
            layout="prev, pager, next"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        pageSize: 12,
        total: 0,
        currentPage: 1
      }
    }
  },
  methods: {
    collectOrCancel (item) {
      // console.log(item)
      let mess = item.is_collected ? '取消收藏' : '收藏'
      this.$confirm(`您是否要${mess}此图片?`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: `/user/images/${item.id}`,
          data: { collect: !item.is_collected }
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    delMaterial (item) {
      this.$confirm('你确定删除此图片吗？', '提示').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${item.id}`
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      let pageParams = {
        page: this.page.currentPage,
        per_page: this.page.pageSize
      }
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect', ...pageParams }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.imgList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 200px;
    margin: 20px 20px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      width: 100%;
      background-color: #f4f5f6;
      i {
        font-size: 22px;
      }
    }
  }
}
</style>
