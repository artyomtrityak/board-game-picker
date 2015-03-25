import STEPS from './data';

var GamesPickerUtils = {
  getStep(stepId='step1') {
    return STEPS[stepId]; 
  }
};

export default GamesPickerUtils;