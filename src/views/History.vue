<template>
<div class="history">
  <Top/>
  <div class="main">
    <div class="data-form">
      <div class="img">
        <img :src="cover1" alt="no pic">
      </div>
      <div class="data-form-content">
        <div class="data-form-content-title">
          <span>传承红色基因，牢记初心使命</span>
        </div>
        <div class="data-form-content-item" @click="detailClick()" v-for="item in msg" :key="item.title">
          <span>{{item.title}}</span> <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="data-form">
      <div class="img">
        <img :src="cover2" alt="no pic">
      </div>
      <div class="data-form-content">
        <div class="data-form-content-title">
          <span>践行先烈精神，勿忘屈辱图自强</span>
        </div>
        <div class="data-form-content-item" @click="detailClick()" v-for="item in msg" :key="item.title">
          <span>{{item.title}}</span> <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="list">
        <div class="list-title">
          <span>党员活动通知：</span>
        </div>
        <div class="list-item" v-for="item in notice" @click="detailClick()" :key="item.title">
          <span> {{item.title}}</span> <span>{{item.date}}</span>
        </div>
      </div>
      <div class="notice-img">

      </div>
    </div>
  </div>
  <bottom/>
</div>
</template>

<script>
import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
import cover1 from '@/assets/images/party/u237.png'
import cover2 from '@/assets/images/party/u239.png'
export default {
  name: "History",
  components: {Top, Bottom},
  data(){
    return {
      cover1:cover1,
      cover2:cover2,
      msg:[
        {
          title:'党的一大：红船精神开天辟地，伟大的中国共产党诞生了',
          date:'2021/06/20',
        },
        {
          title: '党的二大：制定革命纲领，指引中国革命',
          date:'2021/06/18',
        },
        {
          title: '党的三大：建立民族统一战线，国共第一次合作',
          date: '2021/06/16',
        },
        {
          title: '党的四大：无产阶级领导权和工农联盟，更加完善中国民主革命内容',
          date: '2021/06/16',
        },
        {
          title: '党的五大：中央监察委员会成立，党的纪律检查制度正式创立',
          date: '2021/06/14',
        },
        {
          title:'党的一大：红船精神开天辟地，伟大的中国共产党诞生了',
          date:'2021/06/20',
        },
        {
          title: '党的二大：制定革命纲领，指引中国革命',
          date:'2021/06/18',
        },
        {
          title: '党的三大：建立民族统一战线，国共第一次合作',
          date: '2021/06/16',
        },
        {
          title: '党的四大：无产阶级领导权和工农联盟，更加完善中国民主革命内容',
          date: '2021/06/16',
        },
      ],
      notice: [
        {
          title: '活动日6：创先争优惠于民',
          date: '2021/06/04',
        },
        {
          title: '活动日5：弘扬雷锋精神、服务社区百姓',
          date: '2021/05/04',
        },
        {
          title: '活动日4：庆三八志愿服务活动',
          date: '2021/04/05',
        },
        {
          title: '活动日3：新战士上门“认亲”，倾情京老助残',
          date: '2021/06/04',
        },
        {
          title: '活动日2：开展诚信宣传活动',
          date: '2021/06/04',
        },
        {
          title: '活动日1：召开社区党建工作联席会',
          date: '2021/06/04',
        },
        {
          title: '活动日6：创先争优惠于民',
          date: '2021/06/04',
        },
      ]
    }
  },
  methods:{
    detailClick() {
      this.$router.push('/noticeDetail')
    }
  }
}
</script>

<style scoped lang="scss">
.history {
  .main {
    width: 1500px;
    margin: 0 auto;
    .data-form {
      position: relative;
      display: flex;
      margin-top: 25px;
      .img {
        display: flex;
        img {
          height: 413px;
          width: 759px;
        }
        &::after {
          content: '';
          display: block;
          margin-left: 15px;
          margin-right: 15px;
          height: 100%;
          width: 2px;
          transform: scaleX(.5);
          background-color: rgb(51,51,51);
        }
      }
      &-content {
        color: rgb(51,51,51);
        &-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        &-item {
          display: flex;
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 20px;
          justify-content: space-between;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(51,51,51);
        display: block;
        transform: scaleY(.5);
        bottom: -15px;
      }
      margin-bottom: 15px;
    }
    .notice {
      margin-bottom: 15px;
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      .list {
        color: rgb(51,51,51);
        border: 1px solid black;
        padding: 20px 30px;
        width: 70%;
        margin-right: 20px;
        &-title {
          font-size: 32px;
          font-weight: 700;
        }
        &-item {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: 400;
          font-size: 18px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .notice-img {
        width: 415px;
        height: 438px;
        border: 1px solid black;
      }
    }
  }

}
</style>
