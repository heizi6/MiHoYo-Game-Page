<template>
  <transition name="slide-fade">
    <div class="loading" v-if="isVisible">
      <div class="loader"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoadingCom",
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = false;
    }, 1000);
  },
};
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
}
.loading {
  width: 100%;
  height: 100vh;
  padding-top: 30vh;
  position: fixed;
  z-index: 1000;
  background-color: #f3f3ed;
  transition: transform 2s ease, opacity 2s ease;
}
.loader:before {
  content: "";
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}
.loader:after {
  content: "";
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}
@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow324 {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
.slide-fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
