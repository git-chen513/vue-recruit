<!-- 首页热门公司的公司卡片模块 -->
<template>
	<div class="hotCompany">
		<ul class="companyContain">
			<li v-for="(company,index) in companys" :key="index" class="companylist">
				<div>
					<div class="hotCompany_Up " >
						<img :src="company.logo" alt="">
						<div class="companyName" >{{company.name}}</div>
						<p class="ref" :title="company.foreign_name">{{company.foreign_name}}</p>
					</div>
					<div class="hotCompany_Down">
						<div>	
							<p><span>{{company.city}}</span></p>
						</div>
						<div style="margin-top: 10px; margin-right: 33px;">
							<span>使命愿景：</span>
							<span style="line-height: 20px">{{company.mission}}</span>
						</div>
					</div>					
				</div>
			</li>
		</ul>	
	</div>
</template>

<script>
	export default{
		data(){
			return {	
			}
		},
		props:['companys']
	}
</script>

<style lang="scss">
$nx-width:76.25rem;
$nx-color2:#0470B8;
.word{
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.hotCompany	{
	width: 100%;
	.companyContain{
		width: 76rem;
		margin:1rem auto;
		zoom:1;
		&:after{
            display: block;
            content: '.';
            clear: both;
            line-height: 0;
            visibility: hidden;
        }
		.companylist{
			float: left;
			width: 17.8rem;
			height: 16.75rem;
			border:1px solid #eee;
			margin: 1rem 1rem 0 0;
			>div{
				width: 100%;
				height:100%;
				padding:  1rem;
				overflow: hidden;
				text-align: center;
				.hotCompany_Up{
					padding-bottom: 1rem;
					img{
						display: block;
						width: 7rem;
						margin: 0 auto;
					}
					.companyName{
						display: block;
						margin-top: 1rem;
						line-height: 1rem;
						&:hover{
							color:$nx-color2; 
						}
					}
					.ref{
						width: 100%;
						line-height: 1rem;
						font-size: 0.8rem;
						color: #444;
						@extend .word;
					}
				}
				.hotCompany_Down{
					margin-top: 1rem;
				}
			}
		}
	}
}
</style>