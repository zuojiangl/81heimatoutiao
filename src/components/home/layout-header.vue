<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="16" class="left-header">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right-header">
      <img :src="user.photo ? user.photo : defaultImg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{user.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {

      },
      defaultImg: '../../assets/img/avatar.jpg'
    }
  },
  methods: {
    getUserInfo () {
      let userInfo = window.localStorage.getItem('user-info')// 获取本地储存的token
      let token = userInfo ? JSON.parse(userInfo).token : {} // 获取token
      token && this.$axios({
        url: '/user/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(result => {
        this.user = result.data.data
      })
    }

  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  padding: 12px 0;
  .left-header {
    font-size: 16px;
    display: flex;
    align-items: center;
    i {
      font-size: 24px;
      margin-right: 5px;
    }
  }
  .right-header {
      display: flex;
      align-items: center;
      img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
      }
  }
}
</style>
