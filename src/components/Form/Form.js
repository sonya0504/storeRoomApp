import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";
import Radio from "./Radio/Radio";
import Input from "./Input/Input";
import Select from "./Select/Select";
import Button from "components/Button/Button";

const types = {
  categories: "categories",
  recipes: "recipes",
  shopping: "shopping",
};

const description = {
  categories: "Product",
  recipes: "Recipe",
  shopping: "Product to shopping list",
};

class Form extends React.Component {
  state = {
    activeOption: types.categories,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { activeOption } = this.state;
    return (
      <div className={styles.wrapper}>
        <h2>Add new {description[activeOption]}</h2>
        <form autoComplete="off" className={styles.form} onSubmit={this.props.submitFn} category={this.props.items}>
          <div className={styles.radioButtons}>
            <Radio
              id={types.categories}
              checked={activeOption === types.categories}
              changeFn={() => this.handleRadioButtonChange(types.categories)}
            >
              Categories
            </Radio>
            <Radio
              id={types.recipes}
              checked={activeOption === types.recipes}
              changeFn={() => this.handleRadioButtonChange(types.recipes)}
            >
              Recipes
            </Radio>
            <Radio
              id={types.shopping}
              checked={activeOption === types.shopping}
              changeFn={() => this.handleRadioButtonChange(types.shopping)}
            >
              Shopping
            </Radio>
          </div>
          {activeOption === types.categories ? <Select category={this.props.items} /> : null}
          <Input tag="input" name="name" label={activeOption === types.recipes ? "Title" : "Product name"} />
          {activeOption === types.categories ? <Input tag="input" name="amount" label="Amount" /> : null}
          {activeOption === types.recipes ? <Input tag="textarea" name="description" label="Description" /> : null}
          {activeOption === types.recipes ? <Input tag="input" name="link" label="Recipe link" /> : null}
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  submitFn: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Form;
