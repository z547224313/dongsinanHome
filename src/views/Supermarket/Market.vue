<template>
    <div>
        <Header />
        <!-- 轮播图 -->
        <div class="swiper">
            <el-carousel trigger="click" class="carous-over" :height="imgHeight+'px'">
                <el-carousel-item v-for="item in img" :key="item">
                    <img ref="image" :src="item" class="img" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 超市板块 -->
        <div class="market">
            <div class="market1">
                <div class="out-img">
                    <img class="mark-img1" src="@/assets/images/market/u625.png" alt="">
                </div>
                <div class="content">
                    <ul>
                        <li>京客隆集团创建放心肉菜超市活动<span class="time">{{time}}</span></li>
                        <li>京客隆电子会员功能上新<span class="time">{{time}}</span></li>
                        <li>男士护肤套装附赠小样<span class="time">{{time}}</span></li>
                        <li>新到新疆葡萄优惠八折起<span class="time">{{time}}</span></li>
                        <li>精彩周末，烤鸭低至22元一袋<span class="time">{{time}}</span></li>
                    </ul>
                </div>
                <div class="more">更多 >></div>
            </div>
            <div class="market1 market2">
                <div class="out-img">
                    <img class="mark-img1" src="@/assets/images/market/u639.png" alt="">
                </div>
                <div class="content">
                    <ul>
                        <li>沃尔玛20周年回馈新老顾客，惊喜尽在沃尔玛<span class="time">{{time}}</span></li>
                        <li>全新推出家庭大礼包<span class="time">{{time}}</span></li>
                        <li>水产全场五折限时抢<span class="time">{{time}}</span></li>
                        <li>到期积分可兑换精美礼品<span class="time">{{time}}</span></li>
                        <li>雅诗兰黛专柜新驻沃尔玛<span class="time">{{time}}</span></li>
                    </ul>
                </div>
                <div class="more">更多 >></div>
            </div>
            <div class="market1 market3">
                <div class="out-img">
                    <img class="mark-img1" src="@/assets/images/market/u652.png" alt="">
                </div>
                <div class="content">
                    <ul>
                        <li>台湾释迦果买两箱赠一箱<span class="time">{{time}}</span></li>
                        <li>小龙虾特大优惠，每斤20元起<span class="time">{{time}}</span></li>
                        <li>感恩酬宾，进店即领50代金券<span class="time">{{time}}</span></li>
                        <li>你在南方的艳阳里大雪纷飞<span class="time">{{time}}</span></li>
                        <li>我在北方的寒夜里四季如春<span class="time">{{time}}</span></li>
                    </ul>
                </div>
                <div class="more">更多 >></div>
            </div>
            <div class="market1 market4">
                <div class="out-img">
                    <img class="mark-img1" src="@/assets/images/market/u666.png" alt="">
                </div>
                <div class="content">
                    <ul>
                        <li>最新福利：新老会员充多少送多少，多充多得<span class="time">{{time}}</span></li>
                        <li>松下三层蒸锅只需99带回家<span class="time">{{time}}</span></li>
                        <li>蔬菜肉禽满50送鸡蛋一盒<span class="time">{{time}}</span></li>
                        <li>神秘北极圈阿拉斯加的山巅<span class="time">{{time}}</span></li>
                        <li>沉默一眨眼亿万年外的光年<span class="time">{{time}}</span></li>
                    </ul>
                </div>
                <div class="more">更多 >></div>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import img1 from "@/assets/images/market/u597.png";
    import img2 from "@/assets/images/market/u598.png";
    import img3 from "@/assets/images/market/u599.png";
    import img4 from "@/assets/images/market/u600.png";
    import Bottom from "@/components/Bottom";
    export default {
        components: { Header, Bottom },
        data() {
            return {
                img: [img1, img2, img3, img4],
                imgHeight: 356,
                time: ''
            }
        },
        computed: {

        },
        created() {
            var myDate = new Date();
            this.time = myDate.toLocaleDateString()
        },
        mounted() {
            this.imgLoad();
            // 监听窗口变化，使得轮播图高度自适应图片高度
            window.addEventListener("resize", () => {
                this.imgHeight = this.$refs.image[0].height;
                this.$router.go(0)
            });
        },
        methods: {
            imgLoad() {
                this.$nextTick(function () {
                    // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
                    this.imgHeight = document.body.clientWidth * 1 / 2.17
                });
            },
        },
    };
</script>
<style scoped lang="scss">
    .swiper {
        width: 100%;
        .carous-over {
            height: 100%;
            /deep/ .el-carousel__container {
                height: 100%;
                .img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .market {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        flex-wrap: wrap;
        .market1 {
            border: 1px solid rgba(121, 121, 121, 1);
            border-left: none;
            border-top: none;
            padding: 20px 10px;
            width: 49%;
            height: 520px;
            box-sizing: border-box;
            .out-img {
                padding-left: 40px;
                .mark-img1 {
                    width: 289px;
                    height: 72px;
                    margin-bottom: 10px;
                }
            }
            .content {
                width: 100%;
                height: 350px;
                line-height: 2.8;
                font-size: 24px;
                ul li {
                    list-style: none;
                    .time{
                        float: right;
                        margin-right: 20px;
                    }
                }
            }
            .more {
                float: right;
                margin-right: 20px;
                font-size: 18px;
                color: #bd1a2d;
                font-weight: 600;
            }
        }
        .market2 {
            border-right: none;
            border-top: none;
        }
        .market3 {
            border-left: none;
            border-bottom: none;
        }
        .market4 {
            border-right: none;
            border-bottom: none;
        }
    }
</style>