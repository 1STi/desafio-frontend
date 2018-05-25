import React, { Component } from 'react';

class Search extends Component {
  render(){
    return (
      <form class="wf-search">
        <input 
          className="wf-search__input"
          type="search" 
          name="search" 
          placeholder="Insira aqui o nome da cidade" />
          <div class="wf-search__group-btn">
            <button class="wf-search__btn" type="button">
              buscar
            </button>
          </div>
      </form>
    );
  }
}

export default Search;