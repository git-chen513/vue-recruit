<!-- 首页的职位分类模块 -->
<template>
	<div class="Nav">
		<div class="contains">
			<div class="nav-left" >	
				<ul class="nav-left-main">
					<li v-for="(workNames,index) in wName" :key="index" >
						<span>{{workNames.name}}</span>
					</li>
				</ul>
			</div>
			<div class="nav-right">
				<el-carousel height="400px">
			      <el-carousel-item v-for="(image ,index) in imglist" :key="index" >
			        <img :src="image" >
			      </el-carousel-item>
			    </el-carousel>
			</div>
		</div>
	</div>
</template>

<script>
import {Category} from '@/model/category'
	export default{
		data(){
			return {
				name:'hello',
				wName:[],
				overList:false,
				outList:true,
				imglist:["https://i1.mifile.cn/f/i/17/hr/hr_banner_20180310.png","http://img2.pingan.com/app_series/pingancn/assets/img/join/propagandize2.png","http://sf-express.zhaopin.com/images/banner.jpg"]
			}
		},	
		async mounted() {
			const res = await Category.show()
			this.wName = res
		},
	}
</script>

<style lang="scss">
$nx-color:#449EFE;
$all-padding:0;
.Nav{
	width: 100%;
	height: 29rem;
	.contains{
		position: relative;
		width: 76.25rem;
		margin:0 auto;
		.nav-left{
			margin-top: 1rem;
			.nav-left-main{
				>li{
					position: relative;
					display: block;
					width: 18rem;
					height:3rem;
					line-height: 3rem;
					padding:0 1rem;
					border:2px solid #fff;
					background-color: #fff;
					>span{
						font-size: 1rem;
					}
					&:hover ,&:hover ul{
						display: block;
						border:2px solid #eee;
						border-radius: 4px;
						z-index: 10;
					}	
					.nav-left-main-det{
						font-size: 0.8rem;
						color: #666;
						padding:0 0.6rem;
						&:hover{
							text-decoration: underline;
							color: $nx-color;
						}
					}
					.nav-left-all{
						display: none;
						position: absolute;
						width: 50rem;
						left: 19rem;
						top: -2px;
						padding: 1rem;
						padding-right: 0.5rem;
						padding-top: 0.2rem;
						z-index: 1;
						background: #fff;
						.nav-left-all-det{
							width: 100%;
							margin-top: 1rem;
							line-height: 2rem;
							.nav-left-all-list{
								padding: 0 0.8rem;
							}	
							.nav-left-all-work{
								display: inline-block;
								line-height: 2rem;
								padding: 0 0.8rem;
								font-size: 0.9rem;
								color: #777;
								&:hover{
									text-decoration: underline;
									color: $nx-color;
								}
							}
						}
					}
				}
				.gt{
					float:right;
					padding-left: 0.5rem;
					color: #666;
				}
				
			}
		}
		.nav-right{
			position: absolute;
			right: 0;
			top:1.4rem;
			width: 56rem;
			height: 27rem;
			img{
				height: 100%;
			}	
		}
	}	
}
</style>