import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/component/Navigation/MainNavigation';
function App () {
    return (
      <div>
        <Router>
          <MainNavigation />
          <main>
          <Switch>
            <Route exact path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces/>
            </Route>
           <Route path="/places/new" exact>
              <NewPlace />
           </Route>
        </Switch>
        </main>
        </Router>

      </div>
    );
  }
export default App;
