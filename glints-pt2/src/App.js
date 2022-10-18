import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import RetrieveList from "./Components/RetrieveList";



const App = ({
  listItems,
  addListItem,
  removeListItem,
  removeAllListItems,
}) => (
  <Router>
    <div className="mx-auto flex flex-col w-full h-full">
      <NavBar />
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route
              path="/"
              exact
              render={() => (
                <LandingPage
                  listItems={listItems}
                  removeListItem={removeListItem}
                  removeAllListItems={removeAllListItems}
                  addListItem={addListItem}
                />
              )}
            />
            <Route path="/list" exact component={RetrieveList} />
          </Switch>
        )}
      />
    </div>
  </Router>
);

export default App;
