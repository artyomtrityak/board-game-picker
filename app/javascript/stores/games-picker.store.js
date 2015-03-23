import EventEmitter from 'eventemitter2';
import AppDispatcher from '../dispatchers/app.dispatcher';
import Immutable from 'immutable';

var PRIVATE_DATA = {
  currentStep: undefined,
  status: 'DISPLAY_STEP'
};

//Store and Public Store API
class GamesPickerStore extends EventEmitter {
  getData() {
    return {
      currentStep: PRIVATE_DATA.currentStep,
      status: PRIVATE_DATA.status
    };
  }
}
var store = new GamesPickerStore();

// Dispatching
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case 'LOADED_STEP':
      loadStep(action.step);
      break;

    case 'STEP_NOT_FOUND':
      unsetStep();
      break;

    default:
      // no op
  }
});

// Private API functions
function loadStep(step) {
  PRIVATE_DATA.currentStep = Immutable.fromJS(step);
  PRIVATE_DATA.status = 'DISPLAY_STEP';
  store.emit('change');
}

function unsetStep() {
  PRIVATE_DATA.currentStep = undefined;
  PRIVATE_DATA.status = 'STEP_NOT_FOUND';
  store.emit('change'); 
}

export default store;