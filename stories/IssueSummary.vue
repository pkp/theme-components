<template>
	<div class="issue-summary">
		<div class="issue-summary__wrapper">
			<h2 class="issue-summary__volume">Vol {{ volume }}, No {{ number }}</h2>
			<div v-if="title" class="issue-summary__title">
				{{ title }}
			</div>
			<div v-if="date" class="issue-summary__date">
				{{ date }}
			</div>
			<img v-if="image" :src="image" class="issue-summary__cover-image" alt="The alt text entered by the user." />
		</div>
	</div>
</template>

<script>
export default {
        props: {
			volume: Number,
			number: Number,
            title: String,
            date: String,
            image: String
        }
    }
</script>

<style lang="css">
.issue-summary {
	margin: 0;
	padding-bottom: 1rem;
}

.issue-summary__title {
	font-size: 0.9rem;
}

h2 {
	margin: 0;
	padding: 0.4rem 0;
    font-size: 1rem;
}

.issue-summary__date {
	margin-top: 0.25rem;
    font-size: 0.8rem;
}

.issue-summary__cover-image {
    max-width: 6rem;
    height: auto;
}

</style>
