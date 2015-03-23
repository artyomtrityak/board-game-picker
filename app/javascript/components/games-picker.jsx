import React from 'react';
import {Link} from 'react-router';
import GamesPickerStore from '../stores/games-picker.store';
import GamesPickerActions from '../actions/games-picker.actions';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
    GamesPickerStore.on('change', this.handleChange);
    GamesPickerActions.loadStep(
      this.context.router.getCurrentParams().stepId
    );
  },

  componentWillUnmount() {
    GamesPickerStore.off('change', this.handleChange);
  },

  handleChange() {
    this.setState(GamesPickerStore.getData());
  },

  render() {
    return (
      <div>
        Games picker {this.state.test}, {this.context.router.getCurrentParams().stepId}
      </div>
    )
  }
});