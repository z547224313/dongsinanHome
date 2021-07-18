<template>
  <div class="Home">
    <div class="top">
      <div class="bg"></div>
      <div class="title">
        <span>北京市东城区东四南街道</span>
        <span class="eng"
          >Dongsi South Street, Dongcheng District, Beijing</span
        >
      </div>
      <div class="weather">
        <span style="margin-right: 15px">{{ getDate }}</span>
        <span style="margin-right: 15px">{{ getWeek }}</span>
        <span style="margin-right: 15px">{{ temperature }}</span>
        <span>晴</span>
      </div>
    </div>
    <div class="content">
      <div class="main">
        <div class="nav">
          <span>首页</span>
          <span>通知</span>
          <span>政策</span>
          <span>党建</span>
          <span>魅力东四南</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      temperature: "30℃/12℃",
    };
  },
  computed: {
    getDate() {
      moment.locale("zh-cn");
      return moment().format("LL");
    },
    getWeek() {
      return moment().format("dddd");
    },
  },
};
</script>

<style scoped lang="scss">
.Home {
  width: 100%;
  .top {
    height: 545px;
    position: relative;
  }
  .bg {
    position: absolute;
    height: 545px;
    width: 100%;
    background: url("../assets/images/home/logo背景图_u5.png") no-repeat;
    background-size: cover;
    opacity: 0.55;
  }
  .title {
    top: 110px;
    color: #bd1a2d;
    font-weight: 700;
    text-align: center;
    position: relative;
    z-index: 999;
    font-size: 51px;
    .eng {
      display: block;
      font-size: 21px;
    }
  }
  .weather {
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 80px;
    height: 40px;
    width: 420px;
    line-height: 40px;
    background-color: rgba(242, 242, 242, 0.51);
    span {
      font-size: 21px;
      font-weight: 700;
      color: #bd1a2d;
    }
  }
  .content {
    height: 550px;
    background-color: #bd1a2d;
    .main {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      padding: 40px 0;
      .nav {
        font-size: 30px;
        font-weight: 400;
        color: #fff;
        display: flex;
        justify-content: space-between;
        span {
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
