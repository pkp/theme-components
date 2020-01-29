<template>
    <div class="issue-archives">
        <div class="issue-archives__tabs">
            <ul>
                <li v-for="tab in archives" :key="tab.year">
                    <button
                        @click="activetab = tab.year"
                        :aria-selected="activetab === tab.year"
                        :id="'issue-archive-button-' + tab.year"
                    >
                        {{ tab.year }}
												<span class="issue-archives__button--volume">
													—
													Volume {{ tab.volume }}
												</span>
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
                    <issue-summary
                        v-for="issueSummary in tab.issues"
                        :key="issueSummary.volume"
                        v-bind="issueSummary"
                    />
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

.issue-archives__tabs ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
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

.issue-archives__button--volume {
	display: none;
}

@media (min-width: 767px) {

	.issue-archives {
		display: flex;
	}

	.issue-archives__tabs ul {
		display: block;
		overflow: visible;
		min-width: 18rem;
	}

	.issue-archives__tabs li {
		display: block;
		float: none;
	}

	.issue-archives__tabs button {
		display: block;
		width: 100%;
		border-left: 2px solid transparent;
		text-align: left;
	}

	.issue-archives__tabs [aria-selected],
	.issue-archives__tabs button:hover {
		border-bottom: none;
		border-left: 2px solid;
	}

	.issue-archives__tabs ul {
		border-bottom: none;
	}

	.issue-archives__button--volume {
		display: inline;
	}
}

@media (max-width: 767px) {

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
