import IssueArchives from './IssueArchives.vue';

const archives = [
	{
		year: 2019,
		issues: [
			{
				volume: 'Vol 4, No 4',
				title: 'Special Issue: On the Health of Health Science',
				date: 'Nov 28, 2019',
				image: '../public/cover_issue_19_en_US.png'
			},
			{
				volume: 'Vol 4, No 3',
				title: 'The Difficult Second Issue',
				date: 'May 28, 2019',
				image: ''
			},
		]
	},
	{
		year: 2018,
		issues: [
			{
				volume: 'Vol 3, No 4',
				title: 'Special Issue: On the Health of Health Science',
				date: 'Nov 28, 2019',
				image: '../public/cover_issue_19_en_US.png'
			},
			{
				volume: 'Vol 3, No 3',
				title: 'The Difficult Second Issue',
				date: 'May 28, 2019',
				image: ''
			},
		]
	},
	{
		year: 2017,
		issues: [
			{
				volume: 'Vol 2, No 4',
				title: 'Special Issue: On the Health of Health Science',
				date: 'Nov 28, 2019',
				image: '../public/cover_issue_19_en_US.png'
			},
			{
				volume: 'Vol 2, No 3',
				title: 'The Difficult Second Issue',
				date: 'May 28, 2019',
				image: ''
			},
		]
	},
	{
		year: 2016,
		issues: [
			{
				volume: 'Vol 1, No 4',
				title: 'Special Issue: On the Health of Health Science',
				date: 'Nov 28, 2019',
				image: '../public/cover_issue_19_en_US.png'
			},
			{
				volume: 'Vol 1, No 3',
				title: 'The Difficult Second Issue',
				date: 'May 28, 2019',
				image: ''
			},
		]
	}
];

export default {
	title: 'IssueArchives'
};

export const base = () => ({
	components: { IssueArchives },
	props: {
		archives: {
			default: archives
		}
	},
	template: `<issue-archives
		:archives="archives"
	/>`
});
