import React, { Component } from "react";
import ListItem from "./ListItem";
import uuid from "node-uuid";
const axios = require("axios");

class List extends Component {
  constructor() {
    super();

    this.state = {
      userInput: null,
      popup: false,
      submitteduid: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  togglePopup = () => {
    var a = !this.state.popup;
    this.setState({
      popup: a,
    });
  };

  onClick = (e) => {
    const uid = uuid.v4();
    e.preventDefault();
    axios.post("https://elsa-g-backend.herokuapp.com/collections", {
      name: this.state.userInput
        ? this.state.userInput
        : "Your List of Restaurants",
      id: uid,
      reslist: this.props.listItems,
    });
    this.setState({
      submitteduid: uid,
    });
    this.togglePopup();
  };

  onChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  createListItemElements(listItems) {
    const { removeListItem } = this.props;
    return Object.values(listItems)
      .map((item) => {
        return <ListItem item={item} removeListItem={removeListItem} />;
      })
      .reverse();
  }

  popUpComponent = (props) => {
    const styling = this.state.popup
      ? "w-full h-screen flex flex-row justify-center items-center visible z-10 fixed top-0 left-0"
      : "hidden";
    return (
      <div
        className={styling}
        style={{ backgroundColor: "rgb(256,256,256,0.9)" }}
      >
        <div className="w-2/3 h-2/3 bg-white z-20 rounded-lg p-8">
          <h2 className="text-5xl font-bold text-center karla">
            Saved! You can retrieve the list using the code beloww
          </h2>
          <div className="flex justify-center items-center">
            <p className="inline ml-6 whitespace-pre-wrap">
              {this.state.submitteduid}
            </p>
          </div>
          <button
            className="text-green-600 float-right"
            onClick={() => this.togglePopup()}
          >
            close
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { userInput } = this.state;
    const { listItems, title } = this.props;
    const listItemElements = this.createListItemElements(listItems);
    const containerstyle = title
      ? "w-1/2 h-full m-16 rounded-lg bg-gray-900 p-8 justify-center pb-10"
      : "w-4/5 h-full m-16 rounded-lg bg-gray-900 p-8";

    return (
      <div className={containerstyle}>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-white text-3xl">
            {title ? title : " Your List of Restaurants"}
          </p>
          {!title ? (
            <div className="flex flex-row justify-between">
              <input
                type="text"
                autoComplete="off"
                placeholder="List name"
                value={userInput}
                className=" mx-2 border-2 h-12 rounded text-white bg-gray-900 hover:bg-gray-800"
                onChange={this.onChange}
              />
              <button
                className=" btn btn-primary py-2 px-4 h-12  text-white font-semibold bg-purple-500 rounded bg-white"
                onClick={this.onClick}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="mt-4">
          <ul>{listItemElements.length > 0 ? listItemElements : null}</ul>
        </div>
        {this.popUpComponent()}
      </div>
    );
  }
}

export default List;
