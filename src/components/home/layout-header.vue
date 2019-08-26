<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="16" class="left-header">
      <i @click="openOrClose" :class="currentClass"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right-header">
      <img :src="user.photo ? user.photo : defaultImg" alt />
      <el-dropdown trigger="click" @command="commandActive">
        <span class="el-dropdown-link">
          {{user.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      currentClass: 'el-icon-s-fold',
      user: {

      },
      defaultImg: '../../assets/img/avatar.jpg'
    }
  },
  methods: {
    openOrClose () {
      eventBus.$emit('collopseOrClose')
      this.currentClass = this.currentClass === 'el-icon-s-fold' ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
    getUserInfo () {
      let userInfo = window.localStorage.getItem('user-info')// 获取本地储存的token
      let token = userInfo ? JSON.parse(userInfo).token : {} // 获取token
      token && this.$axios({
        url: '/user/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(result => {
        this.user = result.data
      })
    },
    commandActive (command) {
      if (command === 'account') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/zuojiangl/81heimatoutiao'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
    eventBus.$on('uploaduserInfo', () => {
      this.getUserInfo()
    })
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
