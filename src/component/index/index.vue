<!-- 大部分页面的头部模块 -->
<!-- 内容主要包括登录和以及登录后需显示的信息，以及网站的几个大选项（如首页、公司等） -->
<template>
	<div>
		<div id="headTop">
	      <div class="contains">
	        <ul class="left">
	          <i class="iconfont  icon-mobilephone_fill"></i>
	          <li><span class="lgstyle ">智能招聘</span>&nbsp;&nbsp;|</li>
	          <li v-if="myFlag"><nuxt-link :to="{name:'index'}">&nbsp;&nbsp;进入企业版</nuxt-link></li>
	          <li v-else ><nuxt-link :to="{name:'index'}">&nbsp;&nbsp;进入求职版</nuxt-link></li>
	        </ul>
	        <ul class="right" v-if="login">
	          <li><nuxt-link :to="{name:'index'}">消息&nbsp;&nbsp;|&nbsp;&nbsp;</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">我的简历&nbsp;&nbsp;|&nbsp;&nbsp;</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">投递箱&nbsp;&nbsp;|&nbsp;&nbsp;</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">收藏夹&nbsp;&nbsp;|&nbsp;&nbsp;</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">四爷</nuxt-link></li>
	        </ul>
          <ul class="right" v-else>
            <li><a @click="mylogin">登录&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
          </ul>
	      </div>
	      
	    </div>
	    <div id="headnav" >
	      <div class="contains">
	        <div class="logo left">
	          <img src="../../assets/image/logo.png" class="logoimg">
	          <span class="ads">全国站</span>
	        </div>
	        <ul class="navlist" id="navNum">
	          <li :class="{now:isone}"><nuxt-link :to="{name:'index'}">首页</nuxt-link></li>
	          <li :class="{now:istwo}"><nuxt-link :to="{name:'company-moreCompany'}">咨询</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">校园</nuxt-link></li>
	          <li><nuxt-link :to="{name:'index'}">言职</nuxt-link></li>
	        </ul>
	      </div>

	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
         myFlag:true,
         login:false,
         num:0,
         isone:false,
         istwo:false,

			}
		},
		props:['isnow'],
    created(){

    },
    methods: {
      async mylogin() {
        this.$router.push({ path: '/login' })
      },
    },
    mounted(){
      this.num=this.isnow;
      // if(this.num!="0"){
      //     let ul=document.getElementById('navNum') ;
      //     let li=ul.children[this.num-1];
      //     li.className='now';
      // }
      if(this.num=="1"){
         this.isone=true;
      }else if(this.num=="2"){
        this.istwo=true;
      }
    }
	}
</script>

<style lang="scss">

@import url('//at.alicdn.com/t/font_631781_uzwcwz6vcmcxr.css');
$nx-color:#449EFE;
$nx-color2:#0470B8;
$all-padding:0;
$nx-width:76.25rem;
.left{
  float:left;
  padding-left:$all-padding;
}
.right{
  float:right;
  padding-right: $all-padding;
}

#headTop{
  width: 100%;
  height: 2.2rem;
  background: #333;
  // padding: $all-padding;
  div{
    width: $nx-width;
    height: 100%;
    margin: 0 auto;
    ul {
      height:100%;
      .iconfont{
        float:left;
        line-height: 2rem;
        font-size: 1.3rem;
        color:$nx-color2;
      }
      li{
        float: left;
        height:100%;
        font-size:14px;
        color:#C4C3C3;
        margin-top:.3rem;
        a{
          color: #aaa;
        }
        .lgstyle{
          color:$nx-color2;
        }
      }

    }
  }
  
}

#headnav{
  width: 100%;
  height: 4.0rem;
  // padding: $all-padding;
  background-color:#fff;
  border-bottom:1px solid #ddd;
  overflow: hidden;
  .contains{
    width: 76.25rem;
    height: 100%;
    margin: 0 auto;
    .logo{
      width: 10rem;
      height: 1.2rem;
      margin-left:4rem;
      margin-right:2rem;
      img{
        margin:5px;
        height:50px;
      }
      span{
        float: right;
        display: inline-block;
        line-height: 80px;
        margin-left: 5px;
      }
    }
    .navlist{
      height:100%;
      li{
        float: left;
        font-size:20px;
        margin:20px;
        padding:0 6px 11px;
        &.now,&:hover{
          border-bottom: 2px solid $nx-color2;
        }
      }
    }
  }
}

</style>