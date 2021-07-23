<template>
  <div class="notice-item">
    <div class="top">
      <span class="title">{{ title }}</span>
      <span class="more">更多></span>
    </div>
    <div class="content">
      <div class="content-item" v-for="item in msg" :key="item.title">
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeItem",
  props: {
    title: String,
    msg: Array,
  },
};
</script>

<style scoped lang="scss">
.notice-item {
  width: 50%;
  padding: 40px 20px;
  box-sizing: border-box;
  .top {
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 32px;
      font-weight: 700;
      color: #333;
      &::before {
        content: "";
        width: 4px;
        height: 20px;
        background-color: #bd1a2d;
        display: inline-block;
        margin-right: 15px;
      }
    }
    .more {
      color: #999;
      font-size: 12px;
      font-weight: 250;
      cursor: pointer;
    }
  }
  .content {
    &-item {
      display: flex;
      justify-content: space-between;
      position: relative;
      color: #333333;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 40px;
      .title {
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
      }
      &::before {
        content: "•";
        position: absolute;
        left: -10px;
      }
    }
  }
}
</style>
