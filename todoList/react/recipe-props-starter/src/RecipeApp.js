import React, { Component } from "react";
import RecipeList from "./RecipeList";
import "./RecipeApp.css";

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="heading">Recipe App</li>
          <li className="options">New Recipe</li>
          <li className="options">Home</li>
          <li className="options">About</li>
          <li className="options">Contact Us</li>
        </ul>
        <RecipeList/>
      </div>
    );
  }
}

export default RecipeApp;