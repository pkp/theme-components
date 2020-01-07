<template>
	<div class="issue-archives">
		<div class="tabs">
			<a v-for="tab in archives"
				v-on:click="activetab=tab.year"
				:key="tab.year"
				:id="'issue-archive-button-' + tab.year"
			>
				{{ tab.year }}
			</a>
		</div>
		<div class="content">
			<section class="issue-archives__tabs">
				<template v-for="tab in archives">
					<section
						v-if="activetab === tab.year"
						:key="tab.year"
						class="tabcontent"
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
				<!-- <section v-if="activetab === 1" class="tabcontent" id="tab1" aria-labelledby="tab1">
					<issue-summary
							volume="Vol 1, No 1"
							title="Special Issue: On the Health of Health Science"
							date="May 28, 2019"
							image="../public/cover_issue_19_en_US.png"
						/>
					<div class="volume1">
						<p><b>Vol 1, No 2</b><br />
						<u>The Difficult Second Issue</u><br />
						<i>May 20, 2018</i></p>
						<img src="../public/cover_issue_19_en_US.png" />
					</div>

					<div class="volume1">
						<p><b>Vol 1, No 1</b><br />
						<u>The Inaugural Issue</u><br />
						<i>April 12, 2018</i></p>
						<img src="../public/cover_issue_23_en_US.png" />
					</div>
				</section>
				<section v-if="activetab === 2" class="tabcontent" id="tab2" aria-labelledby="tab2">
					<div class="volume2">
						<p><b>Vol 1, No 2</b><br />
						<u>Open Educational Resources: Opening Access to Knowledge</u><br />
						<i>March 10, 2018</i></p>
					</div>

					<div class="volume2">
						<p><b>Vol 1, No 1</b><br />
						<u>Advances in Research on Social Networking in Open and Distributed Learning</u><br />
						<i>May 20, 2019</i></p>
					</div>
				</section>
				<section v-if="activetab === 3" class="tabcontent" id="tab3" aria-labelledby="tab3">
					<p><b>Vol 10, No 4</b><br />
					Special Issue on Design</p>

					<p><b>Vol 10, No 3</b><br />
					Winter</p>

					<p><b>Vol 10, No 2</b><br />
					Spring</p>

					<p><b>Vol 10, No 1</b><br />
					Summer</p>
				</section>
				<section v-if="activetab === 4" class="tabcontent" id="tab4" aria-labelledby="tab4">
					<p><b>Vol 10, No 4</b><br />
					Special Issue on Design</p>

					<p><b>Vol 10, No 3</b><br />
					Winter</p>

					<p><b>Vol 10, No 2</b><br />
					Spring</p>

					<p><b>Vol 10, No 1</b><br />
					Summer</p>
				</section> -->
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
	max-width: 50rem;
	padding: 0 1rem;
	font-size: 1rem;
	line-height: 1.5;
	margin: 1.5rem auto;
	font-family: sans-serif;
}
.issue-archives__tabs {
	display: flex;
	flex-wrap: wrap;
}
.issue-archives__tabs .tab {
	order: 99;
	flex-grow: 1;
	width: 100%;
	display: none;
	padding: 1rem;
}

.tabs {
    overflow: hidden;
  	margin-left: 20px;
    margin-bottom: -2px;
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a {
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    font-weight: bold;
}
.tabs a:last-child {
    border-right: 1px solid #ccc;
}

.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

.tabcontent {
    padding: 30px;
}

.volume1 {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: flex-start;
	align-content: flex-start;
	border-bottom: 1px solid #eee;
	padding: 1rem;
}
.volume1 p {
	flex-grow: 1;
	align-self: auto;
}
.volume1 img {
	padding: 1rem;
	width: 20%;
}
.volume2 {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: flex-start;
	align-content: flex-start;
	border-bottom: 1px solid #eee;
	padding: 1rem;
}
.volume2 p {
	flex-grow: 1;
	align-self: auto;
}


</style>
