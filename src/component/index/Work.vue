<!-- 首页热门职位模块 -->
<template>
	<div class="work">
		<div class="contains">
			<el-tabs v-model="activeWork" class="post">
				<el-tab-pane name="hot" >
					<span slot="label" :class="{'fontSize':true}">热门职位 </span>
					<WorkList  :workSort="work" />
				</el-tab-pane >
			</el-tabs>
		</div>
	</div>
</template>

<script type="">
import {Position} from '@/model/position'
import WorkList from '@/component/index/WorkList.vue'
export default{
	components:{
		WorkList,
	},
	data(){
		return {
			activeWork:'hot',
			work:[],
		}
	},
	methods:{
	},
	async mounted() {
		const res = await Position.sortByHits()
		this.work = res
	},
}
</script>

<style lang="scss">
$nx-width:76.25rem;
$nx-color2:#0470B8;
.fontSize{
	font-size: 1rem;
}
.work{
	width: 100%;
	.contains{
		width: $nx-width;
		margin:0 auto ;
		.post{
			padding:1rem;
		}
	}
}
</style>