<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link v-for="rem in recommendMusicList" :key="rem.id" to="/" tag="li">
        <div>
          <img :src="rem.picUrl">
          <span>{{rem.playCount|formatNum}}</span>
        </div>
        <p>{{rem.name|substr(26)}}</p>
      </router-link>
    </ul>

    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>


    <div class="bottom">
      <span>网 易 云 音 乐</span>
    </div>
  </div>
</template>

<script>

import Title from '../components/Title.vue'
import MusicItem from '../components/MusicItem.vue'
export default {
  name: 'Recommend',
  components: {
    Title,
    MusicItem
  },
  data(){
    return {
      recommendMusicList:[],
      newMusicList:[]
    }
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.$http.get('/personalized?limit=6').then(data=>{
        console.log(data);
        vm.recommendMusicList=data.data.result;
      });
      vm.$http.get('/personalized/newsong').then(data=>{
        console.log(data);
        vm.newMusicList=data.data.result;
      });
    });
  },
  filters:{
    formatNum(value){
      return (value/10000).toFixed(1)+"万"
    },
    substr(value,len){
      return value.substr(0,len)+'...'
    }
  }
}
</script>
<style lang="less" scoped>
div.bottom{
  background: url(../assets/06.png);
  display: flex;
  height: 270px;
  span{
    font-size: 40px;
    text-align: center;
    margin: 100px auto;
  }
}
ul.recommendList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 33%;
    margin-top: 20px;
    div{
      position: relative;
      span{
        top: 2px;
        right: 3px;
        position: absolute;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }
    }
    p{
      font-size: 13px;
      text-align: left;
      padding: 0px 8px;
    }
  }
}
</style>
