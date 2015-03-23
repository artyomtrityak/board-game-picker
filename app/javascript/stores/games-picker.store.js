import EventEmitter from 'eventemitter2';
import AppDispatcher from '../dispatchers/app.dispatcher';
import Immutable from 'immutable';

var PRIVATE_API = {
  currentStep: Immutable.fromJS({}),
  loadStep: loadStep
};

//Store and Public Store API
class GamesPickerStore extends EventEmitter {
  getData() {
    return {
      currentStep: PRIVATE_API.currentStep
    };
  }
}
var store = new GamesPickerStore();

// Dispatching
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case 'LOADED_STEP':
      PRIVATE_API.loadStep(action.step);
      break;

    default:
      // no op
  }
});

// Private API functions
function loadStep(step) {
  PRIVATE_API.currentStep = Immutable.fromJS(step);
  store.emit('change');
}

export default store;