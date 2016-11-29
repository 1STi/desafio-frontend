import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Footer } from 'root/components';
import SuperComponent from 'root/SuperComponent';

class App extends SuperComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <div className="main__content">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
