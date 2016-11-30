import React from 'react';
import { connect } from 'react-redux';
import { Header, List, Footer } from 'root/components';
import SuperComponent from 'root/SuperComponent';

class App extends SuperComponent {
  constructor(props, context) {
    super(props, context);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
    console.log(this.props.form);
  }

  render() {
    return (
      <div className="app">
        <Header onSearch={this.onSearch} />
          <main className="main">
            <List />
          </main>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    ...state,
    form: state.form
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
