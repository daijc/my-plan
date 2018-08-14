<template>
  <div class="homepage">
    <h1>我的第一个目标</h1>
    <div class="plan-icon"></div>
    <div class="plan-cue">现在建立你在小目标的第一个目标吧，一定要加油哟！</div>
    <div class="plan-btn" @click="toList"><i>+</i><span>新建目标</span></div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {

    }
  },
  methods: {
    toList(){
      this.$router.push({name:'planList'});
    }
  },
}
</script>

<style lang="less">
.homepage{
  h1{
    font-size: 22px;
    font-weight: normal;
    color: #373737;
    text-align: center;
    padding:30px 0;
  }
  .plan-icon{
    margin:20px auto;
    width: 160px;
    height:160px;
    background: url("../assets/imgs/home1.png") center center no-repeat;
    background-size:100% 100%;
  }
  .plan-cue{
    text-align: center;
    color: #999999;
    margin: 30px 50px;
    font-size: 14px;
  }
  .plan-btn{
    background: #f8d555;
    margin: 50px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    border-radius: 6px;
    color: #333333;
    cursor: pointer;
    i{
      font-style: normal;
      font-size: 20px;
      margin-right: 10px;
    }
    span{
      font-size: 16px;
    }
  }
}
</style>
