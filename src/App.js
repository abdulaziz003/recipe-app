import {useState, useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY

  
  const [Recipes, setRecipes] = useState([])
  const [Search, setSearch] = useState('')
  const [Query, setQuery] = useState('chicken')
  const exampleURL = `https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  useEffect(() => {
    getRecipes()
  },[Query])
  
  const getRecipes = async ()=>{
    const response = await fetch(exampleURL)
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = event =>{
    setSearch(event.target.value)
  }

  const getSearch = event =>{
    event.preventDefault()
    setQuery(Search)
    setSearch('')
  }
  
  return (
    <div className="App">
      <p className="title">ابحث عن وصفة</p>
      <form onSubmit={getSearch} className="search-form"> 
        <input type="text" className='search-bar' onChange={updateSearch} value={Search}/>
        <button type='submit' className='search-button'>بحث عن وصفة</button>
      </form>
      
      <div className="recipes">
        {Recipes.map( recipe => (
          <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
