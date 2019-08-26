<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">账户管理</template>
    </bread-crumb>
    <el-form label-width="100px">
      <el-form-item label="用户名">
        <el-input style="width:300px" ></el-input>
      </el-form-item>
      <el-form-item  label="用户简介">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item  label="用户邮箱">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号">
        <el-input style="width:300px"  disabled></el-input>
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

}
</script>

<style lang="less" scoped>
  .head-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    right: 400px;
    top:150px;
  }
</style>
