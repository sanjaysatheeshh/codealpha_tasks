// Function to display recipes
function displayRecipes() {
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerHTML = '';

  recipes.forEach((recipe, index) => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
          <h2>${recipe.name}</h2>
          <strong>Ingredients:</strong>
          <p>${recipe.ingredients}</p>
          <strong>Instructions:</strong>
          <p>${recipe.instructions}</p>
      `;
      card.addEventListener('click', () => selectRecipe(index));
      recipeContainer.appendChild(card);
  });
}

// Function to add a new recipe
function addRecipe() {
  const name = document.getElementById('recipe-name').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;

  if (name && ingredients && instructions) {
      const newRecipe = { name, ingredients, instructions };
      recipes.push(newRecipe);
      displayRecipes();
      clearForm();
  } else {
      alert('Please fill in all fields.');
  }
}

// Function to edit the selected recipe
function editRecipe() {
  const selectedIndex = getSelectedIndex();
  if (selectedIndex !== -1) {
      const name = document.getElementById('recipe-name').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;

      if (name && ingredients && instructions) {
          recipes[selectedIndex] = { name, ingredients, instructions };
          displayRecipes();
          clearForm();
      } else {
          alert('Please fill in all fields.');
      }
  } else {
      alert('Select a recipe to edit.');
  }
}

// Function to delete the selected recipe
function deleteRecipe() {
  const selectedIndex = getSelectedIndex();
  if (selectedIndex !== -1) {
      recipes.splice(selectedIndex, 1);
      displayRecipes();
      clearForm();
  } else {
      alert('Select a recipe to delete.');
  }
}

// Function to get the index of the selected recipe
function getSelectedIndex() {
  // Implement your logic to determine the selected recipe index
  // For simplicity, you can add a global variable or use data attributes on the recipe cards
  // In a real-world scenario, you might want to use a more sophisticated approach
  return -1;
}

// Function to clear the form fields
function clearForm() {
  document.getElementById('recipe-name').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('instructions').value = '';
}

// Initial recipes array
const recipes = [];

// Initial display of recipes
displayRecipes();