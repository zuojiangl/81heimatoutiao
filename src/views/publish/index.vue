<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <el-form>
      <el-form-item label="标题">
        <el-input style="width:400px" placeholder="文章名称"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="5" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="radio">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="2">三图</el-radio>
          <el-radio :label="3">无图</el-radio>
          <el-radio :label="4">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select v-model="channels.id" placeholder="请选择">
          <el-option
            v-for="item in channels"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 1,
      channels: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style>
</style>
