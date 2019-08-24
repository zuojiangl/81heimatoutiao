<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <el-form ref="myForm" :model="formData" :rules="rules" label-width="50px" class="publish-form">
      <el-form-item prop="title" label="标题">
        <el-input style="width:400px" placeholder="文章名称" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item prop="content" label="内容">
        <el-input v-model="formData.content" type="textarea" :rows="5" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item v-model="formData.cover" prop="cover" label="封面">
        <el-radio-group v-model="radio">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="2">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="channel_id" label="频道">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option
            v-for="item in channels"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="publish" type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 1,
      channels: [],
      formData: {
        title: '',
        content: '',
        channel_id: null,
        cover: 0 // 默认无图
      },
      rules: {
        title: [{ required: true, message: '标题内容不能为空' }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    publish () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
        }
      })
    },
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

<style lang="less" scoped>
.publish-form {
  margin-left: 40px;
}
</style>
