<template>
  <div class="login">
      <el-card class="card">
          <img src="../../assets/img/logo_index.png" alt="">
          <el-form :model="ruleForm" :rules="rules" ref="loginForm">
              <el-form-item prop="mobile">
                  <el-input v-model="ruleForm.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input v-model="ruleForm.code" style="width:240px" placeholder="请输入验证码"></el-input>
                  <el-button style="float:right">发送验证码</el-button>
              </el-form-item>
              <el-form-item prop="check">
                  <el-checkbox v-model="ruleForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button @click="login" type="primary" style="width:100px">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
// import { log } from 'util'
export default {
  data () {
    var func = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('请同意协议'))
      }
    }
    return {
      ruleForm: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [{
          required: true, message: '手机号不能为空', trigger: 'blur'
        }, {
          message: '手机号格式不对', pattern: /^1[3456789]\d{9}$/, trigger: 'blur'
        }
        ],
        code: [{
          required: true, message: '验证码不能为空', trigger: 'blur'
        }, {
          message: '验证码长度必须为6个数字', pattern: /^\d{6}$/, trigger: 'blur'
        }
        ],
        check: [{
          validator: func
        }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          console.log('前端校验成功')
        }
      })
    }
  }
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
