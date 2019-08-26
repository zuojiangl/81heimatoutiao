<template>
  <div class="home">
    <!-- 最外层容器 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :style="{width}" style="min-height:100vh;background-color:#323745">
        <layout-aside></layout-aside>
      </el-aside>
      <!-- 内部容器区域 -->
      <el-container>
        <!-- 顶部容器 -->
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <!-- 主要内容区域 -->
        <el-main style="padding:0 0">
          <!-- 二级路由容器 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
import eventBus from '../../utils/eventBus'
export default {
  name: 'home',
  components: {
    // 'layout-aside': layoutAside,
    // 'layout-header': layoutHeader
  },
  data () {
    return {
      width: '200px'
    }
  },
  created () {
    eventBus.$on('collopseOrClose', () => {
      this.width = this.width === '200px' ? '60px' : '200px'
    })
  }
}
</script>
