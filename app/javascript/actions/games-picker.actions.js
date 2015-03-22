import AppDispatcher from '../dispatchers/dispatcher';
import GamesPickerWebutils from '../webutils/games-picker.webutils'

var GamesPickerActions = {
  loadStep: (params) => {
    var step = GamesPickerWebutils.getStep();
    
    AppDispatcher.dispatch({
      action: 'LOAD_STEPS',
      step: step
    });
  }
};

export default GamesPickerActions;