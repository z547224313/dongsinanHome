<template>
  <div class="notice">
    <top />
    <div class="nav">
      <div class="content">
        <span v-for="item in navTitle" :key="item">{{ item }}</span>
      </div>
    </div>
    <div class="main">
      <NoticeItem
        v-for="item in navTitle"
        :key="item"
        :title="item"
        :msg="msg"
      />
    </div>
    <Bottom />
  </div>
</template>

<script>
import Top from "@/components/Top";
import NoticeItem from "@/components/notice/NoticeItem";
import Bottom from "@/components/Bottom";
export default {
  name: "Notice",
  components: { NoticeItem, Top, Bottom },
  data() {
    return {
      navTitle: ["公告", "通知", "政策", "热点"],
      msg: [
        {
          title: "史家胡同风貌保护协会招新啦！",
          date: "2021/5/10",
        },
        {
          title: "东四南历史街区的创新治理与更新！",
          date: "2021/5/10",
        },
        {
          title: " 星星计划 | 万象更新！东四南大街开锣！",
          date: "2021/5/10",
        },
        {
          title:
            "星星计划 | 致商户-你有一份“橱窗提升”工具包待领取 。快来领啊快来领！",
          date: "2021/5/10",
        },
        {
          title: "建设研讨会将在2021年4月30号于党建服务中心召开",
          date: "2021/5/10",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.notice {
  .nav {
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #fff6e2;
    border: 1px solid #f7ce8c;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    .content {
      margin: 0 auto;
      width: 800px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
    }
  }
  .main {
    width: var(--content);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
