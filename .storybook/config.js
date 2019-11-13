import { configure } from '@storybook/vue';

// import all global styles
configure(require.context('../styles', true, /\.css$/), module);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
