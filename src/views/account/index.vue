<template>
  <el-card class="parent">
    <bread-crumb slot="header">
      <template slot="title">账户管理</template>
    </bread-crumb>
    <el-form label-width="100px" v-model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.name" style="width:300px" ></el-input>
      </el-form-item>
      <el-form-item  label="用户简介">
        <el-input v-model="formData.intro" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item  label="用户邮箱">
        <el-input v-model="formData.email" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input v-model="formData.mobile" style="width:300px"  disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存信息</el-button>
      </el-form-item>
    </el-form>
    <img class="head-image" src="../../assets/img/404.png" alt="">
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      }
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.parent {
  position:relative;
  .head-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: 500px;
    top:100px;
  }
}
</style>
