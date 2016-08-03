import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/homeStateActions';


class MenuButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.changeButtonSize = this.changeButtonSize.bind(this);
    this.deployMenu = this.deployMenu.bind(this);
  }

  changeButtonSize(e) {
    e.preventDefault();
    this.props.actions.modifyMenuButtonSize({
      width: e.target.value,
      height: e.target.value
    });
  }

  deployMenu(e) {
    e.preventDefault();
    this.props.actions.deployMenu();
  }

  render() {
    return (
      <div>
        <svg width={this.props.buttonSize.width}
             height={this.props.buttonSize.height}
             onClick={this.deployMenu}
             className="transitionMenu">
            <g>


              <rect className="cuadradito"
                    width={this.props.buttonSize.width}
                    height={this.props.buttonSize.height} />
              <text x={0.058*this.props.buttonSize.width}
                    y={0.48*this.props.buttonSize.height}
                    fontSize={0.577*this.props.buttonSize.height}>
                    ME
              </text>
              <text x={0.075*this.props.buttonSize.width}
                    y={0.9423*this.props.buttonSize.height}
                    fontSize={0.577*this.props.buttonSize.height}>
                    NU
              </text>
            </g>
          </svg>
      </div>
    );
  }
}

MenuButton.propTypes = {
  actions: PropTypes.shape({
    modifyMenuButtonSize: PropTypes.func.isRequired,
    deployMenu: PropTypes.func.isRequired
  }),
  buttonSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};

function mapStateToProps(state) {
  return {
    buttonSize: state.homeState.menuButtonSize
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton);
