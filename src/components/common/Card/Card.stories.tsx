import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '.'

export default {
	title: 'Molecules/Card',
	component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
	title: 'Logged In',
}
