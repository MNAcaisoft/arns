import React from 'react';
import { connect } from 'react-redux';

import Home from './../../screens/Home';

class HomeContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    props.initNav(props.navigator);
  }

  render() {
    const { navigator } = this.props;
    return <Home navigator={navigator} />;
  }
}

const mapDispatchToProps = dispatch => ({
  initNav: dispatch.navigation.initNav,
});

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
