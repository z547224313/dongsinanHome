<template>
  <div class="bottom">
    <div class="top">
      <div
        style="
          width: 1200px;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
        "
      >
        <span>北京市政府网</span>
        <span>朝阳区人民政府网</span>
        <span>京报网</span>
      </div>
    </div>
    <div class="under">
      <div
        style="
          width: 1200px;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div class="logo">
          <img :src="logo" alt="" />
        </div>
        <div class="right">
          <div class="about">
            <span>关于我们</span>
            <span>站点地图</span>
            <span>建议意见</span>
            <span>法律声明</span>
          </div>
          <div class="email">
            <p>客服信箱：xinxiang@gov.cn</p>
            <p>政务服务热线： 12345</p>
          </div>
          <div class="wechat">
            <div style="margin-right: 20px">
              <img :src="wechat" alt="" />
              <div style="margin-top: 5px">
                <span>微信公众号</span>
              </div>
            </div>
            <div>
              <img :src="wechat" alt="" />
              <div style="margin-top: 5px">
                <span>政务微博</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/home/党政机关logo_u68.png";
import wechat from "@/assets/images/home/公众号二维码_u60.svg";
export default {
  name: "Bottom",
  data() {
    return {
      logo: logo,
      wechat: wechat,
    };
  },
};
</script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 270px;
  background-color: #bfa;
  .top {
    height: 60px;
    background-color: #757575;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    line-height: 60px;
    display: flex;
  }
  .under {
    height: 220px;
    background-color: #bd1a2d;
    padding: 30px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .logo {
      height: 50px;
      width: 63px;
    }
    .right {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      display: flex;
    }
    .about {
      display: flex;
      padding: 35px 20px;
      width: 300px;
      height: 150px;
      background-color: #a91728;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      span {
        display: inline-block;
        text-align: center;
        flex-basis: 50%;
      }
    }
    .email {
      padding: 35px 20px;
      width: 280px;
      height: 150px;
      background-color: #a91728;
      margin-right: 10px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      text-align: left;
    }
    .wechat {
      padding: 35px 20px;
      width: 210px;
      height: 150px;
      background-color: #a91728;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
