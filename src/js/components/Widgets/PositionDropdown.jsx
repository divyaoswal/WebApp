import React, { Component, PropTypes } from "react";

export default class PositionDropdown extends Component {
  static propTypes = {
    params: PropTypes.object,
    removePosition: PropTypes.func.isRequired,
    positionIcon: PropTypes.object,
    positionText: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.state = {open: false };
  }

  closeDropdown () {
    this.setState({ open: false });
  }

  openDropdown () {
    this.setState({open: true});
  }

  render () {
    const {removePosition, positionIcon, positionText} = this.props;
    const onClick = this.state.open ? this.closeDropdown.bind(this) : this.openDropdown.bind(this);

    return <div className="bs-btn-group bs-open">
      <button onClick={onClick} className="dropdown item-actionbar__btn item-actionbar__btn--position-selected bs-btn bs-btn-default">
        {positionIcon} {positionText} <span className="bs-caret"></span>
      </button>
      {this.state.open &&
        <ul className="bs-dropdown-menu">
          <li>
            <a autoFocus onClick={removePosition} onBlur={this.closeDropdown.bind(this)}>
                Remove Position
            </a>
          </li>
        </ul>
      }
    </div>;
  }
}
