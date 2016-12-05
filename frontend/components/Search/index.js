import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const inputSearch = field => (
  <input
    className="search__input"
    type="text"
    placeholder="Insira aqui o nome da cidade"
    {...field.input} />
);

const Search = props => {
  return (
    <div className="search">
      <form className="search__form" onSubmit={props.onSearch}>
        <Field
          type="text"
          component={inputSearch}
          name="city" />
        <button type="submit" className="search__btn">
          <i className="fa fa-search search__icon" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  )
};

export default compose(
  connect(
    state => ({
      initialValues: { city: "" }
    })
  ),
  reduxForm({form:"weather"})
)(Search)
