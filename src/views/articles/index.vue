<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:40px">
      <el-form-item label="文章状态">
        <el-radio v-model="radio" label="1">全部</el-radio>
        <el-radio v-model="radio" label="2">草稿</el-radio>
        <el-radio v-model="radio" label="3">待审核</el-radio>
        <el-radio v-model="radio" label="4">审核通过</el-radio>
        <el-radio v-model="radio" label="5">审核失败</el-radio>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期选择">
        <el-date-picker
          v-model="value1"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      value1: ''
    }
  }
}
</script>

<style>
</style>
