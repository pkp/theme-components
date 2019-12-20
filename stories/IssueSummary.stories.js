import IssueSummary from './IssueSummary.vue';

export default {
	title: 'IssueSummary'
};

export const base = () => ({
	components: { IssueSummary },
	template: `<issue-summary
		volume="Vol 1, No 1"
		title="Special Issue: On the Health of Health Science"
		date="May 28, 2019"
		image="../public/cover_issue_19_en_US.png"
	/>`,
});
