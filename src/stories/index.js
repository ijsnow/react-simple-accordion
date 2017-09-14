import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Accordion from '../index';

storiesOf('Accordion', module)
  .add('basic example', () => (
    <Accordion
      list={[
        {title: 'Header', body: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello'},
        {title: 'Header', body: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello'},
      ]}
    >
      {({props: {title, body}}) => ({
        header: () => (
          <div>
            {`Expand ${title}`}
          </div>
        ),
        body: () => (
          <div>
            {body}
          </div>
        ),
      })}
    </Accordion>
  ));
