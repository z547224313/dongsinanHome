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
    <div class="content-middle">
      <div class="main">
        <div class="nav">
          <span>首页</span>
          <span @click="noticeClick()">通知</span>
          <span>政策</span>
          <span>党建</span>
          <span>魅力东四南</span>
        </div>
        <div class="middle">
          <div class="swiper">
            <el-carousel trigger="click" height="320px">
              <el-carousel-item v-for="item in img" :key="item">
                <img :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="news">
            <div class="news-title">
              <span>最新：</span> <span>{{ newsTitle }}</span>
            </div>
            <div class="news-content">
              <span>{{ newsContent }}</span>
            </div>
            <div class="news-more">
              <span @click="noticeClick()">更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="main">
        <div class="service">
          <div class="title">
            <span>便民服务</span>
          </div>
          <div class="icon">
            <div v-for="(item,index) in icons" :key="item" class="items">
              <div @click="goSupermarket(index)">
                <img :src="item.icon" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="fun">
          <div class="fun-title">
            <span>在线办事为，您提供方便</span>
          </div>
          <div class="fun-items" v-for="item in fun" :key="item.name">
            <div class="name">
              <span>{{ item.name }}</span>
            </div>
            <div class="fun-icon">
              <img :src="item.icon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import moment from "moment";
import img1 from "@/assets/images/home/u1_state0.png";
import img2 from "@/assets/images/home/u1_state1.png";
import img3 from "@/assets/images/home/u1_state2.png";
import icon1 from "@/assets/images/home/u32.png";
import icon2 from "@/assets/images/home/u33.png";
import icon3 from "@/assets/images/home/u34.png";
import icon4 from "@/assets/images/home/u35.png";
import icon5 from "@/assets/images/home/u36.png";
import icon6 from "@/assets/images/home/u37.png";
import icon7 from "@/assets/images/home/u44.png";
import icon8 from "@/assets/images/home/u46.png";
import icon9 from "@/assets/images/home/u48.png";
import icon10 from "@/assets/images/home/u74.png";
import Bottom from "@/components/Bottom";
export default {
  name: "Home",
  components: {
    Bottom
  },
  data() {
    return {
      temperature: "30℃/12℃",
      img: [img1, img2, img3],
      newsTitle: "新冠疫苗开始预约  2021-4-29",
      newsContent: `
新冠疫苗开始预约，请符合接种条件的居民尽快预约。
打疫苗，携手共创美好街区，东四南街区入选中国文化街区榜单.`,
      icons: [
        { name: "生鲜超市", icon: icon1 },
        { name: "交通出行", icon: icon2 },
        { name: "周边玩乐", icon: icon3 },
        { name: "社会保障", icon: icon4 },
        { name: "生活缴费", icon: icon5 },
        { name: "文化体育", icon: icon6 },
      ],
      fun: [
        {
          name: "网上预约办事",
          icon: icon7,
        },
        {
          name: "办事进度查询",
          icon: icon8,
        },
        {
          name: "空房招租",
          icon: icon9,
        },
        {
          name: "咨询电话",
          icon: icon10,
        },
      ],
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
  methods: {
    noticeClick() {
      this.$router.push("/notice");
    },
    goSupermarket(index){
      this.$router.push('/market');
      console.log(index);
    }
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
  .content-middle {
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
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .middle {
        display: flex;
        margin-top: 60px;
        justify-content: space-between;
      }
      .swiper {
        width: 550px;
        img {
          width: 100%;
        }
      }
      .news {
        width: 550px;
        height: 320px;
        padding-top: 50px;
        &-title {
          font-size: 30px;
          color: #ffffff;
          font-weight: 700;
        }
        &-content {
          font-size: 15px;
          font-weight: 250;
          line-height: 38px;
          letter-spacing: 1.5px;
          margin-top: 50px;
          height: 133px;
        }
        &-more {
          font-size: 30px;
          color: #ffffff;
          font-weight: 700;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .bottom {
        height: 558px;
        width: 100%;
        background-color: #bfa;
      }
    }
  }
  .content-bottom {
    height: 558px;
    width: 100%;
    background-color: #f5f5f5;
    .main {
      display: flex;
      justify-content: space-between;
      padding: 70px 0;
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      .service {
        box-sizing: border-box;
        padding-top: 40px;
        padding-left: 25px;
        width: 524px;
        height: 414px;
        background-color: #fff;
        .title {
          top: 0;
          color: black;
          text-align: left;
          font-size: 24px;
          font-weight: 400;
        }
        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
        }
        .icon {
          img {
            cursor: pointer;
            width: 30px;
            height: 30px;
          }
          .items {
            flex-basis: 33.3%;
            display: flex;
            justify-content: center;
          }
          margin-top: 100px;
          display: flex;
          width: 490px;
          height: 200px;
          flex-wrap: wrap;
        }
      }
      .fun {
        box-sizing: border-box;
        height: 414px;
        width: 600px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .fun-title {
          margin-bottom: 65px;
          font-size: 32px;
          font-weight: 700;
          color: #333333;
        }
        .fun-items {
          padding-top: 35px;
          padding-left: 30px;
          box-sizing: border-box;
          width: 290px;
          height: 150px;
          margin-right: 10px;
          background-color: #e4e4e4;
          font-size: 25px;
          font-weight: 400;
          color: #bd1a2d;
          .fun-icon {
            text-align: right;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
