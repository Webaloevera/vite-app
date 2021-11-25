import React from 'react';
 
import { Card } from './Card';
 
export default {
  title: 'Components/Card',
  component: Card,
};
 
const Template = (args) => <Card {...args} />;
 
export const FirstStory = Template.bind({});
 
FirstStory.args = {
    name: 'Afghan Hound',
    bred_for: 'Coursing and hunting',
    urlImg: 'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg'
};