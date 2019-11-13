import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import { withKnobs, array, radios, text } from '@storybook/addon-knobs';
import ArticleSummary from './ArticleSummary.vue';
import notes from './ArticleSummary.md';

export default {
	title: 'ArticleSummary',
	decorators: [withKnobs],
	parameters: {
		notes: notes
	}
};

export const base = () => ({
	components: { ArticleSummary },
	props: {
		title: {
			default: text('Title', 'Cost-savings achieved in two semesters through the adoption of open educational resources')
		},
		authors: {
			default: text('Authors', 'John Levi Hilton III')
		},
		coverImageUrl: {
			default: radios('Cover Image', {
				None: '',
				Image: '/900x600.png',
				WideImage: '/1200x200.png',
				TallImage: '/200x1200.png'
			}, '')
		},
		galleys: {
			default: array('Galleys', ['PDF'])
		},
		pages: {
			default: text('Pages', '')
		}
	},
	template: `<article-summary
		:authors="authors"
		:cover-image-url="coverImageUrl"
		:galleys="galleys"
		:id="1"
		:pages="pages"
		:title="title"
	/>`,
});

export const noAuthor = () => ({
	components: { ArticleSummary },
	template: `<article-summary
		:galleys="[]"
		:id="1"
		pages="iv-vii"
		title="From the General Editor"
	/>`
});

export const withEverything = () => ({
	components: { ArticleSummary },
	template: `<article-summary
		authors="L P Ipsum, Commodo Consequat, Fugiat Pariatur, Reprehenderit Laboris, Exercitation Ullamco, Tempor Incididunt, Cupidatat al-Proident, Commodo Consequat, Fugiat Pariatur, Reprehenderit Laboris, Exercitation Ullamco, Tempor Incididunt, Cupidatat al-Proident, Commodo Consequat, Fugiat Pariatur, Reprehenderit Laboris, Exercitation Ullamco, Tempor Incididunt, Cupidatat al-Proident, Commodo Consequat, Fugiat Pariatur, Reprehenderit Laboris, Exercitation Ullamco, Tempor Incididunt, Cupidatat al-Proident"
		cover-image-url="/900x600.png"
		:galleys="['PDF', 'HTML', 'ePub']"
		:id="1"
		pages="212-243"
		title="Is blended e-learning as measured by an achievement test and self-assessment better than traditional classroom learning for vocational high school students? A study on the effects of achievement tests and self-assessments in comparison to traditional classroom learning for vocational high school students"
	/>`
});


