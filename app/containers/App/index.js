/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipePage from 'containers/RecipePage/Loadable';
import AddRecipePage from 'containers/AddRecipePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Inventory from 'containers/Inventory/Loadable';
import AddInventory from 'containers/AddInventory/Loadable';
import ShoppingCart from 'containers/ShoppingCart/Loadable';
import RestaurantList from 'containers/RestaurantList/Loadable';
import RestaurantDashboard from 'containers/RestaurantDashboard/Loadable';
import Restaurant from 'containers/Restaurant/Loadable';
// import history from '../../utils/history';

import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            sessionStorage.getItem('username') ? (
              <RestaurantDashboard />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/recipe" component={RecipePage} />
        <Route path="/addrecipe" component={AddRecipePage} />
        <Route path="/editrecipe" component={AddRecipePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />

        {/* <Route
//           path="/recipe"
//           render={() =>
//             sessionStorage.getItem('username') ? (
//               <RecipePage />
//             ) : (
//               <Redirect to="/login" />
//             )
//           }
//         /> */}

        <Route
          path="/inventory"
          render={() =>
            sessionStorage.getItem('username') ? <Inventory /> : <LandingPage />
          }
        />
        <Route
          path="/shoppingCart"
          render={() =>
            sessionStorage.getItem('username') ? (
              <ShoppingCart />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/addInventory"
          render={() =>
            sessionStorage.getItem('username') ? (
              <AddInventory />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/restaurant"
          render={() =>
            sessionStorage.getItem('username') ? (
              <RestaurantList />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/addRestaurant"
          render={() =>
            sessionStorage.getItem('username') ? (
              <Restaurant />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/dashboard"
          render={() =>
            sessionStorage.getItem('username') ? (
              <RestaurantDashboard />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
