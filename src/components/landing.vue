<template>
  <div class="landing">
    <swiper
      :list="imgList"
      v-model="imgSrc"
      :show-desc-mask=false
      dots-position="center"
      :height="clientHeight"
      @on-index-change="onChangeimgSrc">
    </swiper>
    <div class="toHome" v-show="showBtn" @click="toHome">立即体验</div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  name: 'landing',
  components: {
    Swiper
  },
  data () {
    return {
      imgSrc:0,
      clientHeight:'',
      showBtn:false,
      imgList: [{
        url: 'javascript:',
        img: '../src/assets/imgs/banner1.jpg',
      }, {
        url: 'javascript:',
        img: '../src/assets/imgs/banner2.jpg',
      }, {
        url: 'javascript:',
        img: '../src/assets/imgs/banner3.jpg',
      }, {
        url: 'javascript:',
        img: '../src/assets/imgs/banner4.jpg',
      }]
    }
  },
  mounted(){
    // 获取浏览器可视区域高度
    this.clientHeight =   `${document.documentElement.clientHeight}`;
  },
  watch: {
    clientHeight: function () {
      this.clientHeight = `${document.documentElement.clientHeight}px`
    }
  },
  methods: {
    onChangeimgSrc (index) {
      this.imgSrc = index
      if(index==3){
          this.showBtn=true;
      }else{
        this.showBtn=false;
      }
    },
    toHome(){
      this.$router.push({name:'homePage'});
    }
  }
}
</script>

<style lang="less">
.landing{
  position: relative;
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active{
    background-color:#f2a1b2 !important;
  }
  .toHome{
    background-image: linear-gradient(90deg, #ef876a 0%, #ee848e 100%);
    color: #ffffff;
    padding: 8px 0;
    border-radius: 22px;
    width: 140px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    position: fixed;
    bottom: 80px;
    left: 50%;
    margin-left: -70px;
    z-index: 100;
  }
}
</style>
