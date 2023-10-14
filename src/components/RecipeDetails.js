import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  // Extracting the 'id' parameter from the URL using the 'useParams' hook
  const { id } = useParams();
  // State to hold the details of the recipe
  const [recipe, setRecipe] = useState(null);
  // Effect hook to fetch recipe details when the component mounts or 'id' changes
  useEffect(() => {
    // Fetching recipe details from the API using Axios
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);

  // Add If recipe details are not available yet, show a loading message



  return (
    <div>
      {/* Nullish coalescing check */}
      {recipe ? (
        <>
          {/* Displaying the recipe title */}
          <h2>{recipe.title}</h2>
          <h6>Ingredients: </h6><p>{recipe.ingredients.join(', ')}</p>
          <h6>Instructions: </h6><p>{recipe.instructions}</p>
          {/* Displaying an image related to the recipe */}
          <img src={process.env.PUBLIC_URL + '/' + recipe.image } alt={recipe.title} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RecipeDetails;