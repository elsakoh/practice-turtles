import React, { Component } from "react";
import TimeChoose from "./TimeChoose";
const axios = require("axios");

export class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      listItemName: "",
      activeSuggestion: 0,
      userInput: null,
      showSuggestions: false,
      filteredSuggestions: [],
      chosenRest: null,
      restaurantdata: null,
      loaded: false,
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async componentDidMount() {
    await this.getRestaurantData();
    this.setState({ loaded: true });
  }

  async getRestaurantData() {
    axios
      .get("https://elsa-g-backend.herokuapp.com/restaurants")
      .then((resp) => {
        this.setState({ restaurantdata: resp.data });
      });
  }

  onChange = (e) => {
    const { restaurantdata } = this.state;
    const suggestions = restaurantdata;
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.name
        .toString()
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase())
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    });
  };

  onClick(e, suggestion) {
    e.preventDefault();
    const { addListItem } = this.props;

    addListItem(suggestion);

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    });
  }

  render() {
    const {
      onChange,
      onClick,
      state: { filteredSuggestions, showSuggestions, userInput },
    } = this;
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, i) => {
              return i < 10 ? (
                <li
                  className="bg-white rounded w-full my-4 p-2 "
                  key={suggestion}
                  value={suggestion}
                  onClick={(e) => onClick(e, suggestion)}
                >
                  <p className="font-semibold">{suggestion.name}</p>
                  <p>{suggestion.open}</p>
                </li>
              ) : null;
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>Nothing found!</em>
          </div>
        );
      }
    }

    return this.state.loaded ? (
      <div className="w-full h-screen items-start justify-start flex-col flex p-16 ">
        <div className="w-full items-start">
          <h2 className="font-semibold text-start text-3xl">
            Find a Restaurant
          </h2>
        </div>
        <form
          className="w-full flex flex-row justify-between"
          onSubmit={this.handleSubmitEvent}
        >
          <input
            type="text"
            autoComplete="off"
            id="listItemName"
            name="listItemName"
            placeholder="Enter restaurant name"
            className="w-3/4  border-2 h-12 rounded bg-gray-200 hover:bg-white focus:bg-white focus:border-green-500"
            onChange={onChange}
            value={userInput}
          />
          <TimeChoose type={"day"} />
          <TimeChoose />
        </form>
        {suggestionsListComponent}
      </div>
    ) : null;
  }
}

export default SearchBar;
