import React from 'react';
import {Link} from 'react-router';
import {IntlMixin} from 'react-intl';

export default React.createClass({
  mixins: [IntlMixin],

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3>Oups, page not found :( . I am very sorry.</h3>
      </div>
    )
  }
});