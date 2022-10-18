import {
    ADD_LIST_ITEM,
    REMOVE_LIST_ITEM,
    REMOVE_ALL_LIST_ITEMS
  } from '../actions/ListItems';
  
  const initialState = {
    listItems: []
  };
  
  
  const listItems = (state = initialState, action) => {
    switch (action.type) {
  
      case ADD_LIST_ITEM:
        return Object.assign({}, state, {
          listItems : [
           ...state.listItems, 
           action.item
          ]
          
        });
  
      case REMOVE_LIST_ITEM:
        var newState = state.listItems.filter(obj => obj.id !== action.item)
        return {
          listItems: [ ...newState]
        }
  
      case REMOVE_ALL_LIST_ITEMS:
        return {
          listItems: []
        };
  
      default:
        return state;
    }
  };
  
  export default listItems;