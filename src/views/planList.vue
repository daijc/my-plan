<template>
  <div class="planList">
    <x-header :left-options="{backText: ''}">新建目标</x-header>
    <div class="content">
      <h3 v-if="chooseData.length>0">已选目标</h3>
      <div class="plan-btn" v-if="chooseData.length==0&&showBtn" @click="createPlan"><i>+</i><span>新建目标</span></div>
      <ul class="item-cont" v-if="chooseData.length>0">
        <li v-for="(item,index) in chooseData" :style="{background:item.bgColor}">
          <i :class="item.iconName"></i>
          <span @click="removePlan(item)">{{item.name}}</span>
          <em>{{item.number}}人加入</em>
        </li>
      </ul>
      <h3>推荐</h3>
      <ul class="item-cont">
        <li v-for="(item,index) in listData" :style="{background:item.bgColor}">
          <i :class="item.iconName"></i>
          <span @click="choosePlan(item)">{{item.name}}</span>
          <em>{{item.number}}人加入</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'planList',
  components: {
    XHeader
  },
  data () {
    return {
      chooseData:[],
      showBtn:true,
      listData:[
        {id:"1",iconName:"icon-newspaper",bgColor:"#93dfc1",name:"学习",number:122344},
        {id:"2",iconName:"icon-scissors",bgColor:"#ef95b9",name:"减肥",number:56544},
        {id:"3",iconName:"icon-droplet",bgColor:"#a1daf8",name:"喝水",number:25344},
        {id:"4",iconName:"icon-bullhorn",bgColor:"#7cd6d6",name:"每天早睡",number:2434546},
        {id:"5",iconName:"icon-file-text2",bgColor:"#f19d78",name:"背单词",number:242545},
        {id:"6",iconName:"icon-book",bgColor:"#f6cd75",name:"阅读",number:687889},
      ],
    }
  },
  mounted(){

  },
  watch: {

  },
  methods: {
    createPlan(){
        this.showBtn=false;
    },
    removePlan(val){
      this.listData.push(val);
      this.chooseData.forEach((item1,index1)=>{
        this.listData.forEach((item2,index2)=>{
          if(item1.id===item2.id){
            this.chooseData.splice(index1,1);
          }
        })
      })
    },
    choosePlan(val){
        this.chooseData.push(val);
        this.listData.forEach((item1,index1)=>{
          this.chooseData.forEach((item2,index2)=>{
              if(item1.id===item2.id){
                this.listData.splice(index1,1);
              }
          })
        })
    }
  },
  created(){
  },
}
</script>

<style lang="less">
.planList{
  position: relative;
  .content{
    padding: 0 16px;
    .plan-btn{
      background: #f8d555;
      margin: 10px 0;
      text-align: center;
      line-height: 80px;
      height: 80px;
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
    h3{
      font-weight: normal;
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul.item-cont{
      padding-bottom: 100px;
      li{
        display: flex;
        align-items: center;
        height: 80px;
        margin-bottom: 10px;
        border-radius: 6px;
        i{
          font-size: 24px;
          display: block;
          margin: 0 16px;
        }
        span{
          flex: 1;
          font-size: 16px;
          font-weight: bold;
        }
        em{
          margin: 0 16px;
          font-size: 14px;
          font-style: normal;
        }
      }
    }
  }
}
</style>
