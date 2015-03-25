import React from 'react';
import {Link} from 'react-router';
import GamesPickerStore from '../stores/games-picker.store';
import GamesPickerActions from '../actions/games-picker.actions';

//Components
import Question from './question';
import Answer from './answer';


export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return {};
  },

  componentWillReceiveProps() {
    GamesPickerActions.loadStep(
      this.context.router.getCurrentParams().stepId
    );
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
    var step = this.state.currentStep,
        details;
    
    if (!step) {
      return null;
    }

    if (step.get('type') === 'question') {
      details = <Question step={step} />;
    }

    if (step.get('type') === 'answer') {
      details = <Answer step={step} />;
    }

    return (
      <div>
        {details}
      </div>
    )
  }
});