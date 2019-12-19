import IssueArchives from './IssueArchives.vue';

export default {
	title: 'IssueArchives'
};

export const base = () => ({
	components: { IssueArchives },
	template: `<issue-archives />`
});
