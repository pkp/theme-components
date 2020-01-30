<template>
	<div class="issue-summary">
					<div class="issue-summary__wrapper">
						<div class="issue-summary__volume">
							<h2>{{ volume }}</h2>
						</div>
						<div v-if="title" class="issue-summary__title">
							{{ title }}
						</div>
						<div v-if="date" class="issue-summary__date">
							{{ date }}
						</div>
						<img v-if="image" :src="`/` + image" class="issue-summary__cover-image" alt="The alt text entered by the user." />
					</div>
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
  margin: 3rem 0;
}

.issue-summary__title {
	font-size: 0.9rem;
}

.issue-summary__volume h2 {
	margin: 0;
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
