import STEPS from './data';

var GamesPickerUtils = {
  getStep: (stepId) => {
    if (!stepId) {
      stepId = "step1";
    }
    return STEPS[stepId]; 
  }
};

export default GamesPickerUtils;