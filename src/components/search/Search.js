import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoAndroidSearch } from 'react-icons/lib/io';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ""
    };
    this.onClickSubmitSearch = this.onClickSubmitSearch.bind(this);
    this.onChangeInputSearch = this.onChangeInputSearch.bind(this);
  }
  onClickSubmitSearch(event){
    event.preventDefault();
    this.props.onClickButtonSearch(this.state.city);
  }
  onChangeInputSearch(event){
    this.setState({ city: event.target.value })
  }
  render(){
    const { city } = this.state;
    return (
      <form className="wf-search" onSubmit={this.onClickSubmitSearch}>
        <input 
          value={city}
          onChange={this.onChangeInputSearch}
          className="wf-search__input"
          type="search" 
          placeholder="Insira aqui o nome da cidade" />
          <div className="wf-search__group-btn">
            <button className="wf-search__btn" type="submit" >
              <IoAndroidSearch />
            </button>
          </div>
      </form>
    );
  }
}

Search.propTypes = {
  onClickButtonSearch: PropTypes.func.isRequired
}

export default Search;
