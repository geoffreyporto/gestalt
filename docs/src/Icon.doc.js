// @flow
import * as React from 'react';
import { Icon } from 'gestalt';
import Example from './components/Example.js';
import PropTable from './components/PropTable.js';
import Combination from './components/Combination.js';
import PageHeader from './components/PageHeader.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="Icon"
    description="
Show icons with different colors & sizes in an accessible way.
"
  />
);

card(
  <PropTable
    props={[
      {
        name: 'accessibilityLabel',
        type: 'string',
        required: true,
        description:
          'String that clients such as VoiceOver will read to describe the element. Always localize the label.',
      },
      {
        name: 'color',
        type: `"blue" | "darkGray" | "eggplant" | "gray" | "green" | "lightGray" | "maroon" | "midnight" | "navy" | "olive" | "orange" | "orchid" | "pine" | "purple" | "red" | "watermelon" | "white"`,
        defaultValue: 'gray',
      },
      {
        name: 'icon',
        type: Icon.icons.map(name => `'${name}'`).join(' | '),
        required: true,
        description: `This allows us to type check for a valid icon name based on the keys from the list of icons shown below.`,
      },
      {
        name: 'size',
        type: `number | string`,
        description: `Use numbers for pixel sizes and string for percentage based sizes`,
        defaultValue: 16,
      },
      {
        name: 'inline',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'dangerouslySetSvgPath',
        type: `{ __path: string }`,
        description: `When using this prop, make sure that the viewbox around the SVG path is 24x24`,
      },
      {
        name: 'title',
        type: 'string',
        description:
          'Used for hover text in place of accessibilityLabel if provided. Always localize the label.',
      },
    ]}
  />
);

card(
  <Example
    description="Icon with a label."
    name="Example:"
    defaultCode={`
<Box alignItems="center" display="flex">
  <Box marginRight={1} padding={1}>
    <Icon icon="pin" accessibilityLabel="Pin" color="darkGray" />
  </Box>
  <Text align="center" bold color="darkGray">
    Pinterest
  </Text>
</Box>
`}
  />
);

card(
  <Combination name="Icon Combinations" icon={Icon.icons}>
    {props => (
      <Icon color="darkGray" accessibilityLabel="" size={32} {...props} />
    )}
  </Combination>
);

card(
  <Combination
    name="Size & Color Combinations"
    size={[16, 24, 32]}
    color={['gray', 'darkGray', 'red']}
  >
    {(props, i) => (
      <Icon key={i} icon="heart" accessibilityLabel="" {...props} />
    )}
  </Combination>
);

export default cards;
