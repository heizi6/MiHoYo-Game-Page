<script>
export default {
  methods: {},
  data() {
    return {
      imgList: [
        { imageUrl: require("../assets/Carouselchart0.jpg"), id: 1 },
        { imageUrl: require("../assets/Carouselchart1.png"), id: 2 },
        { imageUrl: require("../assets/Carouselchart2.png"), id: 3 },
        { imageUrl: require("../assets/Carouselchart3.jpg"), id: 4 },
        { imageUrl: require("../assets/Carouselchart4.png"), id: 5 },
        { imageUrl: require("../assets/Carouselchart5.jpg"), id: 6 },
      ],
    };
  },
};
</script>

<template>
  <div id="content">
    <div id="ring"><img src="../assets/yinghe.png" alt="error" /></div>
    <div id="img">
      <el-carousel
        :interval="4000"
        type="card"
        height="350px"
        class="el-carousel"
      >
        <el-carousel-item
          v-for="item in imgList"
          :key="item.id"
          class="el-carousel-item"
        >
          <img :src="item.imageUrl" alt="error" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
#ring {
  position: absolute;
  padding-top: 15vh;
  padding-left: 7vh;
  transform: scale(0.6);
}
.el-carousel {
  width: 100vh;
}
.el-carousel {
  margin-top: 15vh;
}
#content {
  width: 100%;
  height: 100vh;
  margin: auto;
  filter: contrast(150%);
  position: relative;
  background: url("../assets/background.jpg");
  object-fit: fill;
  overflow: hidden;
}
.carousel-image {
  width: 100%; /* 设置图片宽度为父元素的100% */
  height: 100%; /* 根据宽度等比缩放高度 */
  object-fit: fill;
}
#img {
  transform: scale(1.4);
  padding: 120px 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
