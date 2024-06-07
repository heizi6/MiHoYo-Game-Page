<template>
  <div id="content">
    <div id="speak">
      <div v-for="(item, index) in intro" :key="index" id="show">
        <span>{{ item.name }}</span
        >: &nbsp;<span>{{ item.msg }}</span
        >&nbsp;<span>{{ item.data }}</span
        >&nbsp;
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DiscoursePage",
  data() {
    return {
      intro: {},
    };
  },
  async mounted() {
    await axios
      .get("/data/list")
      .then((res) => {
        console.log(res);
        this.intro = res.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {},
  created() {
    console.log("我创建了");
  },
  destroyed() {
    console.log("我销毁了");
  },
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  margin: auto;
  filter: contrast(150%);
  position: relative;
  background: url("../assets/background.jpg");
  object-fit: contain;
  color: #d3dce6;
}
#show {
  height: 5vh;
  width: auto;
  padding-left: 5vw;
}
#speak {
  padding-top: 20vh;
}
</style>
