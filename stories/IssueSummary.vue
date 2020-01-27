<template>
    <div class="issue-summary">
        <a href="">
            <div class="issue-summary__volume"><h2>{{ volume }}</h2></div>
            <div v-if="title" class="issue-summary__title">{{ title }}</div>
            <div class="issue-summary__date">{{ date }}</div>
            <div class="issue-summary__image"><img v-if="image" :src="`/` + image" /></div>
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

.issue-summary .issue_summary__2019 {
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

.issue-summary__2019 .issue-summary__image img {
	max-width: 100px;
	float: right;
}


.issue-summary__2018 {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

.issue-summary__2018 .issue-summary__volume h2 {
	font-size: 1rem;
}

.issue-summary__2018 .issue-summary__title {
	font-size: 0.9rem;
}

.issue-summary__2018 .issue-summary__date {
	font-size: 0.8rem;
}

.issue-summary__2018 .issue-summary__image img {
	max-width: 200px;
}

.issue-summary .issue_summary__2017 {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

.issue-summary__2017 .issue-summary__volume h2 {
	font-size: 0.9rem;
}

.issue-summary__2017 .issue-summary__title {
	font-size: 0.9rem;
	font-style: italic;
}

.issue-summary__2017 .issue-summary__date {
	font-size: 0.8rem;
}

.issue-summary .issue_summary__2016 {
	display: flex;
}

.issue-summary__2016 .issue-summary__volume h2 {
	font-size: 0.9rem;
}

.issue-summary__2016 .issue-summary__title {
	font-size: 0.9rem;
	font-style: italic;
}

.issue-summary__2016 .issue-summary__date {
	font-size: 0.8rem;
}

.issue-summary__2016 .issue-summary__image img {
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

</style>
