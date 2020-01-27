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
    flex-wrap: wrap;
    padding: 2rem 0;
}

.issue-summary__2019 {
	color: #000;
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

}

</style>
