import EventEmitter from 'eventemitter2';
import AppDispatcher from '../dispatchers/app.dispatcher';
import Immutable from 'immutable';

var PRIVATE = {
  //DATA
  currentStep: undefined,
  status: 'NOT_LOADED',

  //API
  loadStep: loadStep,
  unsetStep: unsetStep
};

//Store and Public Store API
class GamesPickerStore extends EventEmitter {
  getData() {
    return {
      currentStep: PRIVATE.currentStep,
      status: PRIVATE.status
    };
  }
}
var store = new GamesPickerStore();

// Dispatching
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case 'LOADED_STEP':
      PRIVATE.loadStep(action.step);
      break;

    case 'STEP_NOT_FOUND':
      PRIVATE.unsetStep();
      break;

    default:
      // no op
  }
});

// Private API functions
function loadStep(step) {
  PRIVATE.currentStep = Immutable.fromJS(step);
  PRIVATE.status = 'DISPLAY_STEP';
  store.emit('change');
}

function unsetStep() {
  PRIVATE.currentStep = undefined;
  PRIVATE.status = 'STEP_NOT_FOUND';
  store.emit('change'); 
}

export default store;