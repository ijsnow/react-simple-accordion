import React from 'react';
import PropTypes from 'prop-types';

import AccordionGroup from './Group';

const AccordionContainer = ({
  list,
  children,
  className,
  style,
  triggerStyle,
  triggerClassName,
  groupStyle,
  groupClassName,
}) => (
  <div className={className} style={style}>
    {list.map((group, idx) => (
      <AccordionGroup
        key={idx.toString()}
        index={idx}
        group={group}
        render={children}
        triggerClassName={triggerClassName}
        groupClassName={groupClassName}
        groupStyle={groupStyle}
        triggerStyle={triggerStyle}
      />
    ))}
  </div>
);

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
  // Disable for style proptype.
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /**
   * Passed as the className prop to the element containing the list of groups.
   */
  className: PropTypes.string,
  /**
   * Passed as the style prop to the div containing the trigger.
   */
  // Disable for style proptype.
  // eslint-disable-next-line react/forbid-prop-types
  triggerStyle: PropTypes.object,
  /**
   * Passed as the className prop to the element containing the trigger.
   */
  triggerClassName: PropTypes.string,
  /**
   * Passed as the style prop to the div containing each group.
   */
  // Disable for style proptype.
  // eslint-disable-next-line react/forbid-prop-types
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

export default AccordionContainer;
