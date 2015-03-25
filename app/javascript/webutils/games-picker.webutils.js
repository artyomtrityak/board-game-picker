var STEPS = {
  "step1": {
    "type": "question",
    text: "Как ты относишься к случайностям?",
    "answers": [
      {
        text: "Хорошо", next: "step2"
      },
      {
        text: "Плохо", next: "step3"
      }
    ]
  },
  "step2": {
    "type": "answer",
    "text": "Descent",
    "img": "path-to-image"
  },
  "step3": {
    "type": "answer",
    "text": "Stone Age",
    "img": "path-to-image"
  }
};

var GamesPickerUtils = {
  getStep: (stepId) => {
    if (!stepId) {
      stepId = "step1";
    }
    return STEPS[stepId]; 
  }
};

export default GamesPickerUtils;