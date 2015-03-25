import AppDispatcher from '../dispatchers/app.dispatcher';
import GamesPickerWebutils from '../webutils/games-picker.webutils'

var GamesPickerActions = {
  loadStep(stepId) {
    var step = GamesPickerWebutils.getStep(stepId);
    
    if (step) {
      AppDispatcher.dispatch({
        actionType: 'LOADED_STEP',
        step: step
      });  
    } else {
      AppDispatcher.dispatch({
        actionType: 'STEP_NOT_FOUND'
      });
    }
    
  }
};

export default GamesPickerActions;