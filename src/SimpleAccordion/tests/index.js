import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Accordion from '../index';

const {describe, it} = global;

const list = [
  {title: 'Header 1', body: 'Test 1'},
  {title: 'Header 2', body: 'Test 2'},
];

const TestAccordion = () => (
  <Accordion
    className="accordion"
    triggerClassName="trigger"
    groupClassName="group"
    list={list}
  >
    {({props: {title, body}, isOpen}) => ({
      header: () => (
        <div className="header">
          {title}
        </div>
      ),
      body: () => (
        <div className="body" data-isopen={isOpen}>
          {body}
        </div>
      ),
    })}
  </Accordion>
);

describe('Accordion', () => {
  it('should show the given text', () => {
    const wrapper = shallow(<TestAccordion />);

    wrapper.find('.trigger .header').forEach((headerWrapper, idx) => {
      expect(headerWrapper).to.be.equal(list[idx].title);
    });

    wrapper.find('.trigger .body').forEach((bodyWrapper, idx) => {
      expect(bodyWrapper).to.be.equal(list[idx].body);
    });
  });
});
