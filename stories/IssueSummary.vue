<template>
    <div class="issue-summary">
        <div class="issue-summary__wrapper">
            <h3 class="issue-summary__volume">Vol {{ volume }}, No {{ number }}</h3>
            <div v-if="title" class="issue-summary__title">
                {{ title }}
            </div>
            <div v-if="date" class="issue-summary__date">
                {{ date }}
            </div>
        </div>
        <div class="issue-summary__cover-image-wrapper">
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
            image: String,
            year: Number
        }
    }
</script>

<style lang="css">
.issue-summary {
    margin: 0;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
}

.issue-summary__cover-image-wrapper {
    padding: 0.5rem 1rem;
}

.issue-summary__title {
    font-size: 0.9rem;
}

h3 {
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
