import React, { Component } from 'react';
import { IoAndroidSearch } from 'react-icons/lib/io';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ""
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(event){
    event.preventDefault();
    this.props.onClickButtonSearch(this.state.city);
  }
  render(){
    return (
      <form className="wf-search" onSubmit={this.onClick}>
        <input 
          value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}
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

export default Search;