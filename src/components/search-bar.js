import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {
  handleFormSubmit = ({ query }) => {
    console.log("trying to handle submit for query", query);
  };

  renderInput = (field) => {
    return (
      <input type="text" placeholder="Search DailySmarty" {...field.input} />
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="search-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
    form: "searchBar",
  })(SearchBar);
