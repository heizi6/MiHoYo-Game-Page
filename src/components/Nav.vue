<script>
export default {
  name: "NavCom",
};
</script>

<template>
  <header id="nav_all">
    <div id="icon" style="width: 100%">
      <img src="../assets/t7.png" alt="mouse" />
    </div>
    <div id="navigation">
      <div id="nav">
        <ul>
          <li><router-link to="/Home">首页</router-link></li>
          <li><router-link to="/News">新闻</router-link></li>
          ssssssssssssssz
          <li><router-link to="/Roles">角色</router-link></li>
          <li><router-link to="/Discourse">论坛</router-link></li>
          <li>
            <a href="https://www.miyoushe.com/sr/" target="_blank">社区</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="game"><p>下载游戏</p></div>
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#nav_all {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2;
}
#navigation {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 6;
  background: rgba(28, 26, 26, 0.85);
  text-decoration: none;
}
ul {
  line-height: 41px;
  align-content: center;
}
li {
  float: left;
  list-style: none;
  width: 80px;
  margin: 0 30px 0 30px;
}
li a {
  width: 100%;
  display: block;
  font-size: 22px;
  color: white;
  margin-top: 16px;
  text-decoration: none;
  border-bottom: 80px;
  text-align: center;
}
a:hover {
  color: #fffa00;
}
li:hover {
  border-bottom: solid yellow;
}
#icon img {
  width: 200px;
  height: 100px;
  position: fixed;
  float: left;
  margin-left: 70px;
  margin-right: 130px;
  z-index: 7;
}
#nav {
  opacity: 0.6;
  margin-left: 300px;
}
#game {
  width: 200px;
  height: 80px;
  position: fixed;
  background-color: #efa330;
  border-bottom-left-radius: 30px;
  z-index: 6;
  left: 90%;
}
#game p {
  font-size: 25px;
  margin-left: 27%;
  margin-top: 20px;
}
</style>
