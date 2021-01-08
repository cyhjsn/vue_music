<template>
    <div class="hotsong">
        <div class="topbg">
            <span></span>
            <P></P>
        </div>
    </div>
</template>
<script>

export default {
    name: 'HotSong',
    components:{

    },
    data(){
        return{

        }
    }   
}
</script>
<style lang="less" scoped>
.hotsong{
    .topbg{
        position: relative;
        padding-top: 38.9%;
        overflow: hidden;
        background: url(../assets/hot_music_bg_2x.jpg);
        background-size: contain;
        position: relative;
        span{
            display: block;
            position: absolute;
            z-index: 2;
            left: 0;
            top: 0;
            width: 142px;
            height: 67px;
            background: url(../assets/05.png);
            background-size: 166px 93px;
            margin: 58px 0 6px 17px;
            background-position: -24px -30px;
        }
    }
}
</style>

