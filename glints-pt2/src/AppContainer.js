import { connect } from "react-redux";
import App from "./App";

import {
  addListItem,
  removeListItem,
  removeAllListItems,
} from "./Components/actions/ListItems";

const mapStateToProps = ({ listItems }) => ({
  listItems,
});

const mapDispatchToProps = (dispatch) => ({
  addListItem: (listItem) => dispatch(addListItem(listItem)),
  removeListItem: (listItemId) => dispatch(removeListItem(listItemId)),
  removeAllListItems: () => dispatch(removeAllListItems()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
