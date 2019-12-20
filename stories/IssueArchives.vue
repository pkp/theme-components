<template>
	<div class="issue-archives">
		<section class="issue-archives__tabs">
			<input type="radio" name="issue-archives__tabs" id="tab1" checked="checked" aria-selected="true" />
			<label for="tab1">2019</label>
			<section class="issue-archives__tabs tab" id="tab1" aria-labelledby="tab1">
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
			<input type="radio" name="issue-archives__tabs" id="tab2" hidden />
			<label for="tab2">2018</label>
			<section class="issue-archives__tabs tab" id="tab2" aria-labelledby="tab2">
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
			<input type="radio" name="issue-archives__tabs" id="tab3" hidden />
			<label for="tab3">2017</label>
			<section class="issue-archives__tabs tab" id="tab3" aria-labelledby="tab3">
				<p><b>Vol 10, No 4</b><br />
				Special Issue on Design</p>

				<p><b>Vol 10, No 3</b><br />
				Winter</p>

				<p><b>Vol 10, No 2</b><br />
				Spring</p>

				<p><b>Vol 10, No 1</b><br />
				Summer</p>	
			</section>
			<input type="radio" name="issue-archives__tabs" id="tab4" hidden />
			<label for="tab4">2016</label>
			<section class="issue-archives__tabs tab" id="tab4" aria-labelledby="tab4">
				<p><b>Vol 10, No 4</b><br />
				Special Issue on Design</p>

				<p><b>Vol 10, No 3</b><br />
				Winter</p>

				<p><b>Vol 10, No 2</b><br />
				Spring</p>

				<p><b>Vol 10, No 1</b><br />
				Summer</p>	
			</section>
		</section>
	</div>
</template>

<script>
import IssueSummary from './IssueSummary.vue';

export default {
	components: { IssueSummary }
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
.issue-archives__tabs label {
	order: 1;
	display: block;
	padding: 1rem 2rem;
	background: #eee;
	font-weight: bold;
	cursor: pointer;
	flex-grow: 2;
	text-align: center;
}
.issue-archives__tabs .tab {
	order: 99;
	flex-grow: 1;
	width: 100%;
	display: none;
	padding: 1rem;
}
.issue-archives__tabs input[type="radio"] {
	display: none;
}
.issue-archives__tabs input[type="radio"]:checked + label {
	background: #fff;
	border: 2px solid;
	border-bottom: 0;
}
.issue-archives__tabs input[type="radio"]:checked + label + .tab {
	display: block;
}
.issue-archives__tabs input[type="radio"] + label {
	border-bottom: 2px solid;
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
