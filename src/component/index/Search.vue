<!-- 首页搜素框模块 -->
<template>
	<div class="searchIndex" >
		<div class="contains" :width="nxw">
			<div class="search">
				<div class="s_box">					
					<input type="text" name="" class="search_input" tabindex="1" maxlength="64" autocomplete="off" placeholder="搜索职位" v-model="search" >
					<nuxt-link :to="{name:'workName-name',params:{name:search}}"><input type="sublime" name="" class="search_button" value="搜索" readonly="true"></nuxt-link>	
				</div>
				<div class="s_hot" :class="{nosee:list}">
					热门搜索：
					<span class="s_hot_like">&nbsp;Java开发</span>		
					<span class="s_hot_like">大数据平台开发</span>
					<span class="s_hot_like">PHP</span>
					<span class="s_hot_like">数据挖掘</span>
					<span class="s_hot_like">C++</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script >
export default{
	data(){
		return {
			// sWidth:this.nxw,
			list:this.slist,
			search:''
		}
	},
	props:['nxw','slist','searchValue'],
	mounted(){
		if(this.searchValue){
			this.search=this.searchValue;
		}
	}
}
</script>

<style lang='scss'>

	.searchIndex{
		width: 100%;
		background: rgba(226,229,255,.5);
		.contains{
			width: 100%;
			margin:0 auto;
			.search{
				width: 50rem;
				height: 10rem;
				margin: 0 auto;
				text-align: center;
				position: relative;
				.s_box{
					height: 5rem;
					padding-top: 2rem;
					.search_input,.search_button{
						float: left;
						box-sizing: content-box;
						width: 39.5rem;
						border: 1px solid #ddd;
						// margin-top: 20px;
						&:focus{
							outline: 0px;
							outline-offset: 0px;
						}
					}
					.search_input{
						height:19px;
						padding: 16px;
						font-size: 16px;
						border-right: none;
						&:focus{
							border: 1px solid #3CBEF9;
							border-right: 0px;
						}
					}
					.search_button{
						width: 8rem;
						height: 51px;
						font-size: 20px;
						line-height: 51px;
						text-align: center;
						cursor: pointer;
						color: #fff;	
						border:1px solid #3CBEF9;			
						background: #3CBEF9;
					}
				}
				.s_hot{
					clear: both;
					text-align: center;
					margin-top: 20px;
					color: #666;
					font-size: 14px;
					.s_hot_like{
						color: #3CBEF9;
						margin-right: 16px;
					}
				}
				.nosee{
					display: none;
				}
				
			}
		}
		
	}
</style>