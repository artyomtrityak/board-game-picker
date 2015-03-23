import AppDispatcher from '../dispatchers/app.dispatcher';
import GamesPickerWebutils from '../webutils/games-picker.webutils'

var GamesPickerActions = {
  loadStep: (stepId) => {
    var step = GamesPickerWebutils.getStep(stepId);
    
    AppDispatcher.dispatch({
      actionType: 'LOADED_STEP',
      step: step
    });
  }
};

export default GamesPickerActions;