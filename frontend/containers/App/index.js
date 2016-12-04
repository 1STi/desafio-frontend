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
      <div className="app clearfix">
          <div className="container clearfix">
            <div className="center">
              <Header onSearch={this.onSearch} />
                <main className="main">
                  <div className="main__content">
                    <div className="main__division-line"></div>
                    <div className="main__capitals-list">
                      <List />
                    </div>
                  </div>
                </main>
            </div>
        </div>
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
