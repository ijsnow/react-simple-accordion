import React from 'react';
import PropTypes from 'prop-types';

import AccordionGroup from './Group';

const AccordionContainer = ({
  list,
  children,
  className,
  style,
  triggerClassName,
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
      />
    ))}
  </div>
);

AccordionContainer.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
  // Disable for style proptype.
  //
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  className: PropTypes.string,
  triggerClassName: PropTypes.string,
  groupClassName: PropTypes.string,
};

AccordionContainer.defaultProps = {
  style: {},
  className: '',
  triggerClassName: '',
  groupClassName: '',
};

export default AccordionContainer;
