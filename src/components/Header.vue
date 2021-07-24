<template>
    <div class="contain">
        <!-- 国徽图标 -->
        <div class="header_icon">
            <img class="img" src="../assets/images/info/u187.png" />
        </div>
        <!-- 中间字体 -->
        <div class="text">
            <div class="header_text">北京市东城区东四南街道</div>
            <div class="header_en">Dongsi South Street, Dongcheng District, Beijing</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {

            };
        },
    };
</script>

<style scoped lang="scss">
    .contain {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 130px;
        background: inherit;
        background-color: rgba(189, 26, 45, 1);
        box-sizing: border-box;
        border: 1px solid rgba(121, 121, 121, 1);
        .header_icon {
            width: 76px;
            height: 83px;
            margin-right: 10px;
        }
        .text {
            font: normal 700 14px 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
            color: #FFFFFF;
            line-height: 2;
            text-align: center;
            .header_text {
                font-size: 30px;
            }
        }
    }
</style>