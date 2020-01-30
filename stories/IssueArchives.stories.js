import IssueArchives from "./IssueArchives.vue";
import notes from "./IssueArchives.md";
import issues from "./data/issues.js";

const archives = [
  {
    year: 2019,
    volume: 8,
    issues: issues.filter(issue => issue.year === 2019)
	},
  {
    year: 2018,
    volume: 7,
    issues: issues.filter(issue => issue.year === 2018)
	},
  {
    year: 2017,
    volume: 6,
    issues: issues.filter(issue => issue.year === 2017)
	},
  {
    year: 2016,
    volume: 5,
    issues: issues.filter(issue => issue.year === 2016)
	},
  {
    year: 2015,
    volume: 4,
    issues: issues.filter(issue => issue.year === 2015)
	},
  {
    year: 2014,
    volume: 3,
    issues: issues.filter(issue => issue.year === 2014)
	},
  {
    year: 2013,
    volume: 2,
    issues: issues.filter(issue => issue.year === 2013)
	},
  {
    year: 2012,
    volume: 1,
    issues: issues.filter(issue => issue.year === 2012)
	},
];

export default {
  title: "IssueArchives",
  parameters: {
    notes: notes
  }
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
