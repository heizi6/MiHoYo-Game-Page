<template>
  <div id="content">
    <div><img id="img_12+" src="../assets/12+.png" alt="12+" /></div>
    <div>
      <a href="https://sr.mihoyo.com/?nav=home" target="_blank"
        ><img id="play" src="../assets/play.png" alt="12+"
      /></a>
    </div>
    <div id="gameDown">
      <div class="virtualization" v-for="(item, index) in img" :key="index">
        <img :src="item.img" alt="错误" />
      </div>
    </div>
    <div id="QR_code">
      <div><img src="../assets/QR_code_img1.png" alt="错误" /></div>
      <div><img src="../assets/QR_code_img2.png" alt="错误" /></div>
    </div>
    <div id="introduction">
      <p>应用名称：崩坏：星穹铁道</p>
      <p>开发者名称：上海米哈游海渊城科技有限公司</p>
      <p>当前版本：2.1.0 更新时间：2024.3.27</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        { img: require("@/assets/down1.png") },
        { img: require("@/assets/down2.png") },
        { img: require("@/assets/down3.png") },
        { img: require("@/assets/down4.png") },
      ],
    };
  },
};
</script>

<style scoped>
#play:hover {
  cursor: pointer;
}
.virtualization:hover {
  opacity: 0.7;
}
#div1 input {
  border-radius: 30px;
  border: none;
}
#img_12\+ {
  width: 80px;
  height: auto;
  position: absolute;
  margin-top: 600px;
  margin-left: 90%;
}
#play {
  width: 220px;
  height: auto;
  position: absolute;
  margin-top: 500px;
  transform: translateX(600px);
}
#gameDown {
  display: flex;
  width: 300px;
  height: 150px;
  position: absolute;
  margin-top: 500px;
  margin-left: 15%;
  justify-content: space-between;
  flex-wrap: wrap;
}

#gameDown > div {
  width: 45%;
  height: 35%;
  display: inline-block;
}

#gameDown > div img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

#QR_code {
  width: 200px;
  display: flex;
  height: 130px;
  position: absolute;
  margin-top: 507px;
  margin-left: 1%;
  justify-content: space-between;
}

#QR_code > div {
  width: 45%;
  height: 85%;
  display: inline-block;
  background-color: #fffa00;
}

#QR_code > div img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

#introduction {
  width: 400px;
  height: 130px;
  position: absolute;
  margin-top: 637px;
  transform: translateX(30px);
  color: aliceblue;
  line-height: 30px;
}

#content {
  width: 100vw;
  height: 100vh;
  margin: auto;
  filter: contrast(150%);
  position: relative;
  background: url("../assets/t8.png");
  object-fit: fill;
  overflow-y: hidden;
}
</style>
