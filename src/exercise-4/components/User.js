import React, {Component} from 'react';
import NotMatch from './NotMatch';

class User extends Component {
  
  render() {
    const {match: {params} } = this.props;
    const parsed = parseInt(params.user, 10);

    if(parsed !== params.user) {
      return <NotMatch />;
    }

    return (
      <div>
        User profile page.
      </div>
    );
  }
  
};

export default User;