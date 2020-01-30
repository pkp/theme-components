import { withKnobs, radios, text } from '@storybook/addon-knobs';
import IssueSummary from "./IssueSummary.vue";
import issues from "./data/issues.js";

export default {
  title: "IssueSummary",
	decorators: [withKnobs]
};

export const base = () => ({
  components: { IssueSummary },
  props: {
		volume: {
			default: text('Volume', issues[0].volume)
		},
		number: {
			default: text('Number', issues[0].number)
		},
		title: {
			default: text('Title', issues[0].title)
		},
		date: {
			default: text('Date', issues[0].date)
		},
		image: {
			default: radios('Cover Image', {
				None: '',
				Cover: issues[0].image,
				WideImage: '1200x200.png',
				TallImage: '200x1200.png'
			}, '')
		}
  },
  template: `<issue-summary
		:volume="volume"
		:number="number"
		:title="title"
		:date="date"
		:image="image"
	/>`
});
