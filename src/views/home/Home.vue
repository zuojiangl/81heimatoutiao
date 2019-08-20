<template>
  <div class="home">
    <!-- 最外层容器 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside style="width:200px;height:100vh;background-color:#323745">
        <layout-aside></layout-aside>
      </el-aside>
      <!-- 内部容器区域 -->
      <el-container>
        <!-- 顶部容器 -->
        <el-header>顶部</el-header>
        <!-- 主要内容区域 -->
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import layoutAside from '../../components/home/layout-aside'
export default {
  name: 'home',
  components: {
    'layout-aside': layoutAside
  }
}
</script>
