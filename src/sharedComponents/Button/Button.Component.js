import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import "./Button.Component.css";

class Button extends Component {

  constructor(props)
  {
    super(props);

    this.state = ({
      text: this.props.text,
      key: _.isUndefined(this.props.key) ? Math.random : this.props.key
    });


  }

  render() {

    return (
      <div className="button-wrapper">

        <input type="button" value={this.state.text} onClick={this.props.callback}  />

      </div>
    );
  }
}

Button.propTypes =
{
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  key: PropTypes.number
};


export default Button;
