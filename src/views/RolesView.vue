<template>
  <div id="content">
    <div id="img" style="margin-top: 14vh; margin-left: 7%">
      <img src="@/assets/introduce.png" alt="error" />
    </div>
    <div style="display: flex; flex-direction: row">
      <div ref="introduce" class="animated fadeInRight introduce">
        <div>
          <p>{{ this.dataSets[current].name }}</p>
          <div id="introduce_icon">
            <img src="@/assets/person_icon1.png" alt="error" />
          </div>
          <div>
            <div style="display: inline-block; width: 45px; height: 45px">
              <img class="img1" src="@/assets/CV.png" alt="error" />
            </div>
            <span>{{ this.dataSets[current].cv }}</span>
          </div>
          <div
            id="role_intro"
            v-html="characters(this.dataSets[current].introduction)"
          ></div>
        </div>
      </div>
      <div ref="img" id="img_show" class="animated fadeInLeft">
        <img :src="this.dataSets[current].img" alt="error" class="img2" />
        <img :src="this.dataSets[current].imgtro" alt="error" class="img3" />
      </div>
      <div class="btn-layout">
        <div ref="btn" @click="repeat"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      dataSets: [
        {
          id: 0,
          name: "卡芙卡",
          cv: "徐慧",
          introduction:
            "在星际和平公司的通缉档案里，卡芙卡只留下了名字和「爱好收集大衣」的记录。\n人们对这位星核猎手所知甚少，只知道她是「命运的奴隶」艾利欧最信任的成员之一。",
          img: require("@/assets/kafuka.png"),
          imgtro: require("@/assets/kafukaintro.png"),
        },
        {
          id: 1,
          name: "花火",
          cv: "赵爽",
          introduction:
            "「假面愚者」的成员之一，难以捉摸，不择手段。\n危险的戏剧大师，沉迷于扮演，身怀千张假面，能化万种面相。\n财富、地位、权力…于花火而言都不重要，能让她出手的，唯有「乐趣」。",
          img: require("@/assets/huahuo.png"),
          imgtro: require("@/assets/huahuointro.png"),
        },
        {
          id: 2,
          name: "黑天鹅",
          cv: "杨梦露",
          introduction:
            "「流光忆庭」的忆者，神秘优雅的占卜师。\n常挂着温柔的微笑，耐心聆听他人的言语，并借此走入「记忆」，掌握全盘信息。\n热衷于收集独一无二的记忆，背后的想法却难以看透。",
          img: require("@/assets/heitiane.png"),
          imgtro: require("@/assets/heitianeintro.png"),
        },
      ],
    };
  },
  methods: {
    repeat() {
      this.current = (this.current + 1) % this.dataSets.length;
      this.$refs.introduce.className = "introduce";
      this.$refs.img.className = "";
      window.requestAnimationFrame(() => {
        this.$refs.introduce.className = "animated fadeInRight introduce";
        this.$refs.img.className = "animated fadeInLeft";
        this.btn_repeat();
      });
    },
    btn_repeat() {
      this.$refs.btn.className = "";
      window.requestAnimationFrame(() => {
        this.$refs.btn.className = "animated slideInRight";
      });
    },
    characters(p) {
      return p.replace(/\n/g, "<br>");
    },
  },
  computed: {},
};
</script>

<style scoped>
#img_show {
  width: 40vw;
  height: 65vh;
  margin-left: 20px;
  padding: 10px;
  z-index: 1;
}
.btn-layout {
  margin-left: 20vh;
  display: flex;
  z-index: 10;
  align-items: center;
}
.btn-layout > div {
  width: 150px;
  height: 150px;
  background-color: #8d8a8a;
  border-radius: 75px;
  border: 7px solid #f3a403;
}
.img1 {
  object-fit: contain;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}
.img2 {
  object-fit: contain;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}
.img3 {
  object-fit: contain;
  width: 300px;
  height: 100px;
  transform: translateY(-300%) translateX(100%);
}
span {
  font-family: "STFangsong", serif;
  margin-left: 10px;
}
#role_intro {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 25px;
  font-family: "STFangsong", serif;
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
img {
  width: 14%;
  height: 4%;
  object-fit: fill;
}
.introduce {
  width: 40vh;
  height: 50%;
  margin-left: 20vh;
  margin-top: 4vh;
  z-index: 2;
}
#introduce_icon {
  margin: 0;
  width: 45px;
  height: 45px;
  padding-left: 20px;
}
#introduce_icon > img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.introduce > div {
  padding-top: 20px;
  font-family: "STXingkai", serif;
  font-size: 40px;
  color: white;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1.6) translateX(-10%);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}
</style>
