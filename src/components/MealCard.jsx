import { Link } from "react-router-dom";

export default function Mealcard({ meal }) {
  return (
    <Link to={`/${meal.idMeal}`} className="meal-link">
      <div key={meal.idMeal} className="meal-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-info">
          <h3>{meal.strMeal}</h3>
          <p>category: {meal.strCategory}</p>
          <p>description: {meal.strInstructions.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
}
