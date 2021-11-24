import React from 'react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    name: 'Stuff',
    bred_for: 'Afpe',
    urlImg: 'bred_for'
};