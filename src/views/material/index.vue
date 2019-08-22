<template>
  <el-card>
    <!-- el-card具名插槽 -->
    <bread-crumb slot="header">
      <!-- 面包屑具名插槽 -->
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click='changeTab'>
    <el-tab-pane label="全部素材" name="all">
      <div class="imgList">
        <el-card class="img-card" v-for="item in list" :key="item.id">
          <img :src="item.url" alt="">
          <el-row align="middle" class="operate" type="flex" justify="space-around">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-delete-solid"></i>
          </el-row>
        </el-card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="收藏素材" name="collect">
      <div class="imgList">
        <el-card class="img-card" v-for="item in list" :key="item.id">
          <img :src="item.url" alt="">
          <el-row align="middle" class="operate" type="flex" justify="space-around">
          </el-row>
        </el-card>
      </div>
    </el-tab-pane>
  </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    changeTab () {
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect' }
      }).then(result => {
        this.list = result.data.results
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
    }
  }
}
</style>
