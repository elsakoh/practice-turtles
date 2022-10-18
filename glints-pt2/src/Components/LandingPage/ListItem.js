import React, { Component } from 'react';

class ListItem extends Component {
  constructor() {
    super();
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { item, removeListItem } = this.props;
    const listItemId = item.id;
  
    removeListItem(listItemId);
    
  }

  render() {
    const { item } = this.props;

    return (
      <div className="w-full rounded shadow-lg p-4 mt-2 bg-white flex flex-row justify-between items-center">
        <div>

        <div className="font-semibold text-xl">
          {item.name}
        </div>
        <div className="text-xl">
          Opening hours: {item.open}
        </div>        
        </div>


        <div className="panel-footer w-1/8">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="text-s">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ListItem;