import React, { Component } from "react";

export default class Suggestion extends Component {
    
  render() {
      const { item } = this.props;
    return (
      <div className="w-full rounded shadow-lg p-4 mt-2 bg-white flex flex-row justify-between items-center">
        <div>
          <div className="font-semibold text-xl">{item.name}</div>
          <div className="text-xl">Opening hours: {item.open}</div>
        </div>
      </div>
    );
  }
}
