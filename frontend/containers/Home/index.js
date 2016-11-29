import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SuperComponent from 'root/SuperComponent';
import {
  Card,
  Search,
  List
} from 'root/components';

class Home extends SuperComponent {
  render() {
    return (
      <div>
        <div className="container">
          {'Weather'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
