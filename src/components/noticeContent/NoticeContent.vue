<template>
    <div class="notice-detail">
        <div class="content">
            <div class="header">
                <h1 style="text-align: center;">东四南何以入选“中国人居环境奖”？来感受一下就知道了</h1>
                <div class="title">
                    <div class="title-left">
                        <span style="margin-right: 20px;">{{time}}</span>
                        <span>来源：中国政府网</span>
                    </div>
                    <div>
                        <span style="margin-right: 6px; cursor: pointer;">
                            【字体：
                            <span @click="changeFontSize('large')">大 </span>
                            <span @click="changeFontSize('mid')">中 </span>
                            <span @click="changeFontSize('small')">小</span>】
                        </span>
                        <span style="margin-right: 10px;"><i class="el-icon-printer"></i> 打印</span>
                        <span style="margin-right: 6px;">
                            <i class="el-icon-share"></i>
                            <img src="@/assets/images/noticeItem/weixin.png" alt=""
                                style="width: 30px; height:30px; margin: 0 6px; vertical-align: middle;">
                            <img src="@/assets/images/noticeItem/xinlang.png" alt=""
                                style="width: 30px; height:30px; vertical-align: middle;">
                        </span>
                    </div>
                </div>
            </div>
            <div v-html="content" class="content_class" id="content" />
        </div>
    </div>
    </div>
</template>

<script>
    import content from "@/utils/notice-content";
    import getNowTime from '@/utils/time.js'
    export default {
        name: "NoticeContent",
        components: {
        },

        data() {
            return {
                content,
                time: '',
                num: 16
            }
        },
        created() {
            this.time = getNowTime();
        },

        methods: {
            changeFontSize(type) {
                if (type === 'large') {
                    let ele = document.getElementById('content');
                    this.num <= 20 ? this.num += 2 : 20;
                    ele.style.fontSize = this.num + 'px';
                } else if (type === 'mid') {
                    let ele = document.getElementById('content');
                    this.num = 16
                    ele.style.fontSize = this.num + 'px';
                } else if (type === 'small') {
                    let ele = document.getElementById('content');
                    this.num <= 12 ? 12 : this.num -= 2;
                    ele.style.fontSize = this.num + 'px';
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .notice-detail {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .wrap {
            width: 60%;

            .content {
                border: 1px solid #ccc;
                padding: 25px;

                .title {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 15px;
                    align-items: center;
                }

                .content_class {
                    font-size: 16px;
                }
            }
        }
    }
</style>