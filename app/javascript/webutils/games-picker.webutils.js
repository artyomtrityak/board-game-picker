var STEPS = {
  "step1": {
    "type": "question", text: "Как ты относишься к случайностям?",
    "answers": [
      {
        text: "Хорошо", next: "step2"
      },
      {
        text: "Плохо", next: "step3"
      }
    ]
  },
  "step2": {"type": "answer", "text": "Descent"},
  "step3": {"type": "answer", "text": "Stone Age"}
};

var GamesPickerUtils = {
  getStep: () => {
    return STEPS['step1'];
  }
};

export default GamesPickerUtils;