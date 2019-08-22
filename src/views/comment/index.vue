<template>
  <el-card>
    <!-- el-card具名插槽 -->
    <bread-crumb slot="header">
    <!-- 面包屑具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- el-card匿名插槽 -->
    <!-- 表格组件 -->
    <el-table :data="list">
      <el-table-column width="500px" label="标题"></el-table-column>
      <el-table-column label="评论状态"></el-table-column>
      <el-table-column label="总评论数"></el-table-column>
      <el-table-column label="粉丝评论数"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
