<template>
    <div class="notice-detail">
        <Top />
        <div class="wrap">
            <div>
                <h3 style="display: inline-block;">通知公告&nbsp;&nbsp;>&nbsp;&nbsp;</h3>
                <span>热点</span>
            </div>
            <NoticeItem></NoticeItem>
        </div>
    </div>
</template>

<script>
    import Top from "@/components/Top";
    import NoticeItem from '@/components/noticeContent/NoticeContent'
    export default {
        name: "NoticeDetail",
        components: {
            Top,
            NoticeItem
        },

        data() {
            return {
            }
        },
        created() {

        },

        methods: {
            changeFontSize(type) {
                
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

            /* .content {
                border: 1px solid #ccc;
                padding: 25px;

                .title {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 15px;
                }
            } */
        }
    }
</style>