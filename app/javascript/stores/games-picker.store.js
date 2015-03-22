import EventEmitter from 'eventemitter2';

class GamesPickerStore extends EventEmitter {
  getData() {
    return {
      test: 1
    };
  }
}

export default new GamesPickerStore();