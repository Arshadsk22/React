import { useState, useEffect } from "react";
import './Recipes.css';

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    image: string;
}

function RecipeList() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchRecipes = async () => {
        const response = await fetch('https://dummyjson.com/recipes');

        if (response.ok == false) {
            setError('Error occured Recipes not found :(')
        }
        else {
            const data = await response.json();
            setRecipes(data.recipes);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    if (error != null) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center d-flex align-items-center justify-content-center" role="alert">
                    <h2 className="text-danger">{error}</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-danger me-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container py-5">
            <h1>List of Recipes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {recipes.map((recipe) => (
                    <div className="col" key={recipe.id}>
                        <div className="card h-100">
                            <img src={recipe.image} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
                            <div className="card-body">
                                <h4><strong>{recipe.name}</strong></h4>
                                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;