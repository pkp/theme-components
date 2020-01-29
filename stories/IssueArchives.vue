<template>
    <div class="issue-archives">
        <div class="issue-archives__tabs">
            <ul>
                <li>
                    <button v-for="tab in archives"
                        @click="activetab = tab.year"
                        :key="tab.year"
                        :aria-selected="activetab === tab.year"
                        :id="'issue-archive-button-' + tab.year"
                    >
                        {{ tab.year }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="issue-archives__tabcontent">
            <section class="tab">
                <template v-for="tab in archives">
                    <section
                        v-if="activetab === tab.year"
                        :key="tab.year"
                        :id="'tab' + tab.year"
                        :aria-labelledby="'issue-archive-button-' + tab.year"
                    >
                    <a>
                        <issue-summary
                            v-for="issueSummary in tab.issues"
                            :key="issueSummary.volume"
                            v-bind="issueSummary"
                        />
                    </a>
                    </section>
                </template>
            </section>
        </div>
    </div>
</template>

<script>
import IssueSummary from './IssueSummary.vue';

export default {
    components: { IssueSummary },
    props: {
        archives: Object
    },
    data() {
        return {
            activetab: 0
        };
    },
    mounted() {
        this.activetab = this.archives[0].year;
    }
}
</script>

<style lang="css">
body {
    font-size: 1rem;
    line-height: 1.5;
    font-family: sans-serif;
}

* {
  color: inherit;
  margin: 0;
}

.issue-archives {
	min-width: 0.0625rem;
    margin: auto;
    border: 0;
    padding: 0 2rem;
}

.issue-archives__tabs {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}

.issue-archives__tabs ul {
    list-style-type: none;
    border-bottom: 1px solid;
    margin: 0;
    padding: 0;
}

.issue-archives__tabs li {
    float: left;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
}

.issue-archives__tabs button {
	background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    padding: 0.8rem 1.7rem;
    font-weight: bold;
    display: inline-block;
}

.issue-archives__tabs button:hover {
    border-bottom: 2px solid;
}

.issue-archives__tabcontent {
    padding: 0;
    margin: 0;
}

.issue-archives__tabcontent .tab {
    padding: 0;
}

.issue-archives__tabs [aria-selected] {
    border-bottom: 2px solid;
    cursor: default;
}

@media (max-width: 783px) {

	body {
		margin: 0.2rem;
		padding: 0;
	}

	.issue-archives__tabs button {
	    padding: 0.5rem 1.2rem;
	}

    .issue-summary__title {
        flex-wrap: wrap;
    }

    .issue-archives__tabs {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    .issue-archives__tabs::-webkit-scrollbar {
    	display: none;
    }

    .issue_archives__tabs li {
    	display: inline-block;
    	flex: 0 0 auto;
    	float: left;
    	padding: 0.8rem 1.7rem;
    	font-weight: bold;
    	cursor: pointer;
    }

}


</style>
