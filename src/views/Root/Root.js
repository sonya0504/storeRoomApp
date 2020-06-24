import React from "react";
import AppContext from "context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import CategoriesView from "../CategoriesView/CategoriesView";
import RecipesView from "../RecipesView/RecipesView";
import ShoppingListView from "../ShoppingListView/ShoppingListView";
import SettingsView from "../SettingsView/SettingsView";
import ListWrapper from "components/ListWrapper/ListWrapper";
import productsList from "data/productsList";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import Header from "components/Header/Header";
import Modal from "components/Modal/Modal";

class Root extends React.Component {
  state = {
    items: [...productsList],
    isModalOpen: false,
    name: "Sonia",
  };

  addItem = (e) => {
    e.preventDefault();

    this.state.items.map((item) => console.log("addItem, indexOf", item.category.indexOf(e.target[0].value)));

    const newItem = {
      icon: faPepperHot,
      category: e.target[0].value,
      unit: "kg",
      products: [
        {
          name: e.target[1].value,
          amount: e.target[2].value,
        },
      ],
    };

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);

    const testMap = this.state.items.map((item) => console.log("testMap map func", item.category));

    console.log("testMap", testMap);

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state.name}>
          <Header openModalFn={this.openModal} />
          <h1>StoreRoomApp</h1>
          <Switch>
            <Route exact path="/" component={CategoriesView} />
            <Route path="/recipes" component={RecipesView} />
            <Route path="/shoppinglist" component={ShoppingListView} />
            <Route path="/settings" component={SettingsView} />
          </Switch>
          <ListWrapper items={this.state.items} />
          {isModalOpen && <Modal submitFn={this.addItem} items={this.state.items} closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
