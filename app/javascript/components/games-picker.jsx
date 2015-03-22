import React from 'react';
import {Link} from 'react-router';
import GamesPickerStore from '../stores/games-picker.store';
import GamesPickerActions from '../actions/games-picker.actions';

export default class GamesPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    GamesPickerStore.on('change', this.handleChange.bind(this));
    GamesPickerActions.loadStep();
  }

  componentWillUnmount() {
    GamesPickerStore.off('change', this.handleChange);
  }

  handleChange() {
    this.setState(GamesPickerStore.getData());
  }

  render() {
    return (
      <div>
        Games picker {this.state.test}
      </div>
    )
  }
}