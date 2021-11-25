import React from 'react';
import { ImagePreloader } from './ImagePreloader';
 
export default {
  title: 'components/ImagePreloader',
  component: ImagePreloader,
};
 
const Template = (args) => <ImagePreloader {...args} />;
 
export const FirstStory = Template.bind({});
 
FirstStory.args = {
    src: 'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg',
    alt: 'Coursing and hunting'
};