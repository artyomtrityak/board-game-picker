import AppDispatcher from '../dispatchers/dispatcher';
import GamesPickerWebutils from '../webutils/games-picker.webutils'

var GamesPickerActions = {
  loadStep: (params) => {
    var step = GamesPickerWebutils.getStep();
    
    AppDispatcher.dispatch({
      actionType: 'LOADED_STEP',
      step: step
    });
  }
};

export default GamesPickerActions;