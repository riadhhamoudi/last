import React from "react";
import Recipe from'./Recipe';
import "./app.css" ;

const App = () => {
const APP_ID = "fa6fdf86";
const APP_keyb = "83c74dd3d52d4f1f5af6dbc83bbcbb30";


const [recipes,setRecipes] = useState([]);
const[search,setsearch] = useState("");
const[query,setQuery]=useState('chicken');

useEffect(() => {
getRecipes();

},[query]);

const getRecipes = async () => {
const response = await fetch(`https=//api.edamam.com/search?q={query}&app_id=${APP_ID}&app_key=&{APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
};
console.log(data.hits);

const updateSearch = e => {
  setsearch(e.target.value);

};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
setsearch('');
};


return(
<div className="App">
  <from onSubmit={getSearch} className="App">
<input className="search-bar" type="text" value={search} onChange={} />
<button onClick={() => setCounter(counter + 1)} className="search-button" type="submit">
search
</button>
  </from>
  <div className="recipes">
  {recipes.map(recipe => (

<Recipe
key={recipe.recipe.label}
title={recipe.recipe.label} 
calories={recipe.recipe.calories}
image={recipe.recipe.image}
ingredients={recipe.recipê.ingredients}
/>
  ) )}
  </div>

</div>

);

};


export default App ;