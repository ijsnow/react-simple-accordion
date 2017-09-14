import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AnimateHeight from 'react-animate-height';

class AccordionGroup extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  open() {
    this.setState({isOpen: true});
  }

  close() {
    this.setState({isOpen: false});
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {isOpen} = this.state;

    const {header, body} = this.props.render({
      index: this.props.index,
      props: this.props.group,
      isOpen: this.state.isOpen,
      openGroup: this.open,
      closeGroup: this.close,
      toggleGroup: this.toggle,
    });

    return (
      <div className={this.props.groupClassName}>
        <button onClick={this.toggle} className={this.props.triggerClassName}>
          {header()}
        </button>
        <AnimateHeight height={isOpen ? 'auto' : 0}>
          {body()}
        </AnimateHeight>
      </div>
    );
  }
}

AccordionGroup.propTypes = {
  render: PropTypes.func.isRequired,
  // We deliberately use object because this can be anything and is to be
  // handled by the author in the render func.
  // eslint-disable-next-line
  group: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  groupClassName: PropTypes.string.isRequired,
};

export default AccordionGroup;
