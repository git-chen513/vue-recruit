<!-- 首页热门职位的职位卡片模块 -->
<!-- 根据传入的workSort的值显示数据 -->
<template>
	<div class="workList">
		<ul class="work_list">
			<li v-for="(work,index) in workSort" :key="index" class="cardWork">
				<div>
					<div class="cardWork_Up">
						<div>
							<strong class="card_workNT"><span class="card_workName" :title="work.title">{{work.title}}</span></strong>
						</div>
						<div style = "margin-top:8px;">
							<span>职位浏览量：</span>
							<span>{{work.hits}}</span>
						</div>
						<div style = "margin-top:8px;">
							<span>工作地点：</span>
							<span>{{work.city}}</span>
						</div>
						<div style="color: #FA606B; margin-left: 75px; margin-top:10px;">
							<span style="float: left;">薪资：</span>
							<span style="float: left;">{{work.salary_down}}</span>
							<span style="float: left;">~</span>
							<span style="float: left;">{{work.salary_up}}</span>
						</div>
					</div>
					<div class="cardWork_Down">
						<div class="card_workImg"><img :src="work.logo"></div>
						<div style="margin-top:10px; margin-right:30px;">
							<p style="line-height: 20px">{{work.requirement}}</p>							
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="">
	export default{
		data(){
			return{

			}
		},
		props:['workSort'],

	}
</script>

<style lang="scss">
$nx-color2:#0470B8;
$nx-width:76rem;
.workList{
	width: 100%;
	.work_list{
		width: $nx-width;		
		margin: 1rem auto;
		zoom:1;
		&:after{
			display: block;
			content: '.';
			clear: both;
			line-height: 0;
			visibility: hidden;
		}
		.cardWork{
			float: left;
			width: 17.6rem;
			height: 16.75rem;
			border:1px solid #eee;
			margin: 1rem 1rem 0 0;
			>div{
				width: 100%;
				height:100%;
				padding:  1rem;
				overflow: hidden;
				text-align: center;
				.cardWork_Up{
					color: #999;
					.card_workNT{
						display: inline-block;					
						font-weight: 400;
						.card_workName{
							float: left;
							max-width: 12rem;
							font-size: 1rem;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							&:hover{
								color:$nx-color2; 
							}
						}
						.card_workTime{
							font-size: 0.8rem;
						}
					}					
					.card_workMoney{
						float: right;
						color: #FA606B;
					}
					.card_workExp{
						font-size:0.8rem;
						color: #888;
					}
					ul{
						height:4rem;
						border-bottom: 1px dashed #ddd;
						.card_workTags{
							float: left;
							font-size: 0.6rem;
							border:1px solid #eee;
							padding: 0.2rem 0.3rem;
							margin:0.6rem 0.6rem 2rem 0; 
						}
					}
				}
				.cardWork_Down{
					float: left;
					width: 100%;
					height: 2.5rem;
					margin-top: 0.5rem;
					.card_workImg img{	
						width: 6rem;
						margin-right: 1rem;
					}
					div{
						display: inline-block;
						span{
							font-size: 0.9rem;
						}
						ul .card_workIncTags{
							float: left;
							font-size: 0.8rem;
							color: #aaa;
						}
					}
				}
			}
		}
	}		
}
</style>