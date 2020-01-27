<template>
    <li class="article-summary" :class="{'article-summary--with-cover': coverImageUrl}">
        <div class="article-summary__wrapper">
            <div class="article-summary__contents">
                <h2 class="article-summary__title">
                    <a :id="'article-' + id" href="http://example.org" class="article-summary__title-link">
                        {{ title }}
                    </a>
                </h2>
                <div class="article-summary__authors">
                    {{ authors }}
                </div>
            </div>
            <div v-if="pages" class="article-summary__pages">
                {{ pages }}
            </div>
            <ul v-if="galleys" class="article-summary__galleys">
                <li v-for="galley in galleys" :key="galley">
                    <a class="button" :aria-labelledby="'article-' + id" href="https://example.org">
                        {{ galley }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="article-summary__cover-image-wrapper">
            <img v-if="coverImageUrl" :src="coverImageUrl" class="article-summary__cover-image" alt="The alt text entered by the user." />
        </div>
    </li>
</template>

<script>
export default {
    props: {
        authors: String,
        coverImageUrl: String,
        galleys: Array,
        id: Number,
        pages: String,
        title: String,
        url: String
    }
}
</script>

<style lang="css">
.article-summary {
    font-size: 1rem;
}

.article-summary--with-cover {
    display: flex;
}

.article-summary__wrapper {
    display: flex;
    justify-content: flex-end;
    flex: 1;
}

.article-summary__contents {
    margin-right: auto;
}

.article-summary__title {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
}

.article-summary__title-link {
    text-decoration: none;
    color: var(--text-color);
}

.article-summary__title-link:focus {
    outline: 2px solid;
}

.article-summary__authors {
    margin-top: 0.5em;
    font-size: 0.9em;
}

.article-summary__pages {
    margin-left: 1em;
    font-size: 0.9em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

.article-summary__galleys {
    display: flex;
    margin: 0;
    padding-left: 1em;
    list-style: none;
}

.article-summary__galleys li + li {
    margin-left: 0.25em;
}

.article-summary__cover-image-wrapper {
    display: none;
}

@media (min-width: 600px) {

    .article-summary__cover-image-wrapper {
        display: block;
        flex: 0 0 12.5em;
        order: -1;
        margin-right: 1em;
    }

    .article-summary__cover-image {
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);
    }
}

</style>
