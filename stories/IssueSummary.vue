<template>
    <div class="issue-summary">
        <a href="">
            <div class="issue-summary__volume"><h2>{{ volume }}</h2></div>
            <div v-if="title" class="issue-summary__title">{{ title }}</div>
            <div class="issue-summary__date">{{ date }}</div>
            <img v-if="image" :src="`/` + image" />
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
    display: flex;
    padding: 2rem 0;
}

.issue_summary__2019 {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: flex-start;
}

.issue-summary__2019 .issue-summary__volume h2 {
	font-size: 1rem;
}

.issue-summary__2019 .issue-summary__title {
	font-size: 0.9rem;
}

.issue-summary__2019 .issue-summary__date {
	font-size: 0.8rem;
}

.issue-summary__2019 img {
	max-width: 100px;
	float: right;
}


.issue_summary__2018 {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

.issue_summary__2018 .issue-summary__volume h2 {
	font-size: 1rem;
}

.issue_summary__2018 .issue-summary__title {
	font-size: 0.9rem;
}

.issue_summary__2018 .issue-summary__date {
	font-size: 0.8rem;
}

.issue_summary__2018 img {
	max-width: 100px;
	float: right;
}

.issue-summary .issue_summary__2017 {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

.issue_summary__2017 .issue-summary__volume h2 {
	font-size: 1rem;
	float: right;
}

.issue_summary__2017 .issue-summary__title {
	font-size: 0.9rem;
	float: right;
}

.issue_summary__2017 .issue-summary__date {
	font-size: 0.8rem;
	float: right;
}

.issue_summary__2017 img {
	max-width: 100px;
	float: left;
}

.issue-summary a {
    text-decoration: none;
    cursor: hand;
}

.issue-summary__volume h2 {
    font-size: 1.4rem;
}

.issue-summary__title {
    flex-basis: auto;
    font-weight: bold;
}

.issue-summary__date {
    font-style: italic;
}

img {
	max-width: 250px;
}

</style>
