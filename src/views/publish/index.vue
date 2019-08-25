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
        <quill-editor style="width:800px;height:400px;margin-bottom:100px" v-model="formData.content" type="textarea" :rows="5" placeholder="请输入内容"></quill-editor>
      </el-form-item>
      <el-form-item v-model="formData.cover.type" prop="cover" label="封面">
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
        <el-button @click="publish(false)" type="primary">发布</el-button>
        <el-button @click="publish(true)">存入草稿</el-button>
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
        cover: { type: 0, images: [] } // 默认无图
      },
      rules: {
        title: [{ required: true, message: '标题内容不能为空' },
          { min: 5, max: 30, message: '标题内容必须在5-30个字符之间' }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },
  methods: {
    getArticleById () {
      let { articleId } = this.$route.params
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.formData = result.data
      })
    },
    publish (draft) {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          let { articleId } = this.$route.params
          let method = articleId ? 'put' : 'post'
          let url = articleId ? `/articles/${articleId}` : '/articles'
          this.$axios({
            method,
            url,
            data: this.formData,
            params: { draft }
          }).then(result => {
            this.$router.push('/home/articles')
          })
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
    let { articleId } = this.$route.params
    articleId && this.getArticleById()
    this.getChannels()
  }
}
</script>

<style lang="less" scoped>
.publish-form {
  margin-left: 40px;
}
</style>
