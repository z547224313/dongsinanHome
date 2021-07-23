<template>
  <div class="top">
    <div class="img">
      <img :src="img" alt="" />
    </div>
    <div class="title">
      <span class="zh">北京市东城区东四南街道</span>
      <span class="en">Dongsi South Street, Dongcheng District, Beijing</span>
    </div>
  </div>
</template>

<script>
import img from "@/assets/images/info/u187.png";
export default {
  name: "Top",
  data() {
    return {
      img: img,
    };
  },
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 130px;
  background-color: #bd1a2d;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 700;
    .zh {
      font-size: 32px;
    }
    .en {
      font-size: 14px;
      margin-top: 15px;
    }
  }
}
</style>
