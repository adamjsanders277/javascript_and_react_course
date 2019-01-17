import React, { Component } from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe"
import "./RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "avocado_toast.jpg"
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    return (
      <div className="RecipeList">
        {this.props.recipes.map((r, index) => (
          <Recipe key={index} {...r} />
        ))}
      </div>
    );
  }
}

export default RecipeList;