# React Simple Accordion Component

A simple accordion component that doesn't care how you style it. All it wants to do
is expand and collapse your beatiful content.

## Installation

```
$ yarn add react-simple-accordion
```

## Usage

```
import Accordion from 'react-simple-accordion';

const list = [
  {title: 'Header 1', body: 'Test 1'},
  {title: 'Header 2', body: 'Test 2'},
];

const TestAccordion = () => (
  <Accordion list={list}>
    {({props: {title, body}, isOpen}) => ({
      header: () => (
        <div>
          {title}
        </div>
      ),
      body: () => (
        <div>
          {body}
        </div>
      ),
    })}
  </Accordion>
);
```

## PropTypes

```
AccordionContainer.propTypes = {
  /**
   * The list of groups for the accordion. Typically is will be an
   * object with a group name and some content.
   */
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * This is how the groups will get rendered.
   *
   * @param {Object} args - The arguments to the children function.
   * @param {boolean} args.isOpen - Whether the group is expanded or not.
   * @param {Object} args.props 0 - The props for the nth group will be the
   *                                nth element in the list prop for the Accordion
   */
  children: PropTypes.func.isRequired,
  /**
   * Passed as the style prop to the div containing the list of groups.
   */
  style: PropTypes.object,
  /**
   * Passed as the className prop to the element containing the list of groups.
   */
  className: PropTypes.string,
  /**
   * Passed as the style prop to the div containing the trigger.
   */
  triggerStyle: PropTypes.object,
  /**
   * Passed as the className prop to the element containing the trigger.
   */
  triggerClassName: PropTypes.string,
  /**
   * Passed as the style prop to the div containing each group.
   */
  groupStyle: PropTypes.object,
  /**
   * Passed as the className prop to the element containing each group.
   */
  groupClassName: PropTypes.string,
};

AccordionContainer.defaultProps = {
  style: {},
  className: '',
  triggerStyle: {},
  triggerClassName: '',
  groupStyle: {},
  groupClassName: '',
};
```
