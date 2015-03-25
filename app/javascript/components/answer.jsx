import React from 'react';
import {Link} from 'react-router';
import {IntlMixin} from 'react-intl';


export default React.createClass({
  mixins: [IntlMixin],

  render() {    
    console.log(this.getIntlMessage('post.meta'));
    return (
      <div className="jumbotron">
        <h1 style={{textAlign: 'center'}}>{this.props.step.get('text')}</h1>
      </div>
    )
  }
});