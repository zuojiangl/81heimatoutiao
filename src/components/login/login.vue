<template>
  <div class="login">
      <el-card class="card">
          <img src="../../assets/img/logo_index.png" alt="">
          <el-form>
              <el-form-item>
                  <el-input placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input style="width:240px" placeholder="请输入验证码"></el-input>
                  <el-button style="float:right">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                  <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" style="width:100px">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login {
    background-image: url('../../assets/img/login_bg.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .card {
        width: 400px;
        height: 330px;
        img {
            width: 200px;
            height: 45px;
            margin-bottom: 20px;
        }
    }
}
</style>
