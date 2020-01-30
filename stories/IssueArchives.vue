<template>
    <div class="issue-archives">
				<div class="issue-archives__tabs">
            <ul class="issue-archives__tabs-list">
                <li v-for="tab in archives" :key="tab.year" class="issue-archives__tabs-list-item">
                    <button
												class="issue-archives__button"
                        @click="activetab = tab.year"
                        :aria-selected="activetab === tab.year"
                        :id="'issue-archive-button-' + tab.year"
												type="button"
                    >
                        {{ tab.year }}
												<span class="issue-archives__button-text--volume">
													—	Volume {{ tab.volume }}
												</span>
                    </button>
                </li>
            </ul>
				</div>
        <div class="issue-archives__tab-panels">
					<section
							v-for="tab in archives"
							:key="tab.year"
							:aria-labelledby="'issue-archive-button-' + tab.year"
							class="issue-archives__tab-panel"
							:hidden="activetab !== tab.year"
					>
						<issue-summary
								v-for="issueSummary in tab.issues"
								:key="issueSummary.volume"
								v-bind="issueSummary"
						/>
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
.issue-archives__tabs {
	border-bottom: 1px solid;
}

.issue-archives__tabs-list {
    display: flex;
    flex-wrap: nowrap;
		overflow: hidden;
    margin: 0;
    padding: 0;
}

.issue-archives__tabs-list-item {
  list-style-type: none;
}

.issue-archives__button {
	background: none;
	color: inherit;
	border: none;
	cursor: pointer;
	padding: 0.75rem 1.75rem;
    font-weight: bold;
}

.issue-archives__button[aria-selected],
.issue-archives__button:hover,
.issue-archives__button:focus {
    border-bottom: 2px solid;
	outline: none;
}

.issue-archives__button-text--volume {
	display: none;
}

@media (min-width: 767px) {

	.issue-archives {
		display: flex;
	}

	.issue-archives__tabs {
		border-bottom: none;
	}

	.issue-archives__tabs-list {
		display: block;
		min-width: 18rem;
	}

	.issue-archives__button {
		width: 100%;
		border-bottom: none;
		border-left: 2px solid transparent;
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: left;
	}

	.issue-archives__button[aria-selected],
	.issue-archives__button:hover,
	.issue-archives__button:focus {
		border-bottom: none;
		border-left: 2px solid;
	}

	.issue-archives__button-text--volume {
		display: inline;
		font-weight: normal;
	}
}
</style>
