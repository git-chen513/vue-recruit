<!-- 页面的页脚模块（用于显示版权信息） -->
<template>
	<div class="footer">
		<div class="footerContain">	
			<div class="footeright">
				<span v-for="(list,index) in lists" :key="index">{{list}}</span>
				<p>&copy;2021smart 京ICP备55555号-7&nbsp;&nbsp;京公网备777777777号</p>
			</div>
			
		</div>
	</div>
</template>

<script >
	export default{
		data(){
			return {
				lists:['智能APP','智能招聘','智能微信','招聘小程序','帮助中心','联系我们','招聘解决方案','服务热线：00544-44944']
			}
		}
	}
</script>

<style lang="scss">

$nx-color3:#62b7f3;
$nx-color4:#0f46a0;
	.footer{
		width: 100%;
		height: 9rem;
		margin-top: 1rem;
		border-top: 1px solid #ddd;
		background-color: $nx-color3;
		overflow: hidden;
		.footerContain{
			position: relative;
			width: 76.25rem;
			margin:2rem auto;	
			.footeright{
				position: absolute;
				top: 0;
				left: 13rem;
				padding-left: 2rem;
				span{
					display: inline-block;
					padding:0.6rem 1rem 1rem 0;
					color: #fff;
					cursor: pointer;
					&:hover{
						color: $nx-color4;
						text-decoration: underline;
					}
				}
				p{
					padding-bottom: 0.6rem;
					color: #fff;
				}
			}
			
		}
	}
</style>