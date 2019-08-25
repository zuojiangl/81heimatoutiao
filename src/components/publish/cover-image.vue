<template>
  <div class="cover-image">
    <div  @click="clickImg(index)" class="cover-item" v-for="(item,index) in images" :key="index">
      <img :src="item ? item: defaultImg" alt="">
    </div>
    <el-dialog :visible="showDialog" @close="showDialog = false">
      <select-images @selectOneImg="selectImg"></select-images>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      showDialog: false,
      selectIndex: -1
    }
  },
  methods: {
    clickImg (index) {
      this.showDialog = true
      this.selectIndex = index
    },
    selectImg (url) {
      this.$emit('updateImages', url, this.selectIndex)
      this.showDialog = false
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image {
  display: flex;
  .cover-item {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc ;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
