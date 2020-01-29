<template>
	<div class="issue-summary">
		<ul>
			<li>
				<a class="button">
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
						<div class="issue-summary__cover-image-wrapper">
							<img v-if="image" :src="`/` + image" class="issue-summary__cover-image" alt="The alt text entered by the user." />
						</div>
					</div>
				</a>
			</li>
		</ul>
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
    padding: 2rem 0;
}

.issue-summary ul {
	padding: 0;
	margin: 0;
}

.issue-summary li {
	list-style-type: none;
	border: 0;
	padding: 0;
}

.issue-summary a.button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    font-weight: bold;
    display: inline-block;
}

.issue-summary.issue-summary__wrapper2019 {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-end;
}

.issue-summary.issue-summary__wrapper2018 {
	display: flex;
	align-content: flex-start;
	flex: 0;
}

.issue-summary.issue-summary__wrapper2017 {
	display: flex;
	align-content: flex-start;
	flex: 0;
}

.issue-summary__title {
	font-size: 1.2rem;
}

.issue-summary__volume h2 {
    font-size: 1.4rem;
}

.issue-summary__date {
    font-size: 0.9rem;
}

.issue-summary__with-cover {
	display: flex;
}

.issue-summary__cover-image-wrapper {
    display: flex;
    order: -1;
    margin-right: 1rem;
}

.issue-summary__cover-image {
    width: 30%;
    height: auto;
}

@media (min-width: 300px) {

    .issue-summary__cover-image-wrapper {
        display: block;
        flex: 0;
        order: -1;
        margin-right: 1rem;
    }

    .issue-summary__cover-image {
        width: 30%;
        height: auto;
    }
}

</style>
