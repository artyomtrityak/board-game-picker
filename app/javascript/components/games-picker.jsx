import React from 'react';
import {Link} from 'react-router';
import GamesPickerStore from '../stores/games-picker.store';

GamesPickerStore.on('test', (a) => {
  console.log(a);
});

GamesPickerStore.emit('test');

export default class GamesPickerComponent extends React.Component {
  render() {
    return (
      <div>
        Games picker
      </div>
    )
  }
}