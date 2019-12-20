<template>
	<div class="issue-summary">
		<a>
			<h2 class="issue-summary__volume">{{ volume }}</h2>
			<div v-if="title" class="issue-summary__title">{{ title }}</div>
			<div class="issue-summary__date">{{ date }}</div>
			<img src="../public/cover_issue_19_en_US.png" />
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			volume: String,
			title: String,
			date: String,
			image: String
		}
	}
</script>

<style>
.issue-summary {

}

</style>
