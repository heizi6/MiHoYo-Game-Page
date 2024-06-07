<template>
  <div id="app" class="no-select">
    <Nav></Nav>
    <Loading></Loading>
    <keep-alive :include="View">
      <router-view></router-view>
    </keep-alive>
    <!--    <div:style="{ left: mouseX + 'px', top: mouseY + 'px' }"class="follower"></div>-->
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Nav,
    Loading,
  },
  data() {
    return {
      //缓存组件name
      View: ["DiscoursePage"],
      mouseX: 0,
      mouseY: 0,
      cursorUrl: require("../src/assets/cursor.png"),
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.getElementById("app").style.cursor = "none"; // Hide cursor
  },
  destroyed() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.getElementById("app").style.cursor = "auto"; // Restore cursor
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.pageX - 15;
      this.mouseY = event.pageY - 15;
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100vh;
}
* {
  cursor: default;
  margin: 0;
  padding: 0;
}
.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
.follower {
  width: 34px;
  height: 34px;
  position: absolute;
  border-radius: 50%;
  z-index: 10; /* 降低 z-index 值 */
  pointer-events: none; /* 允许鼠标事件穿透 */
  background: url("@/assets/cursor.png") center;
}
</style>
