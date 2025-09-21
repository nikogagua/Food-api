import { useState } from "react";
import SearchBar from "./SearchBar";
import Mealcard from "./MealCard";
import { useQuery } from "@tanstack/react-query";
import { fetchMealsBySearch } from "../util/https";

export default function MealsList() {
  // page pagination
  const [page, setPage] = useState(1);
  const mealsPerPage = 12;

  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: meals,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals", searchQuery],
    queryFn: () => fetchMealsBySearch(searchQuery),
  });

  const startIndex = (page - 1) * mealsPerPage;
  const endIndex = startIndex + mealsPerPage;
  const currentMeals = meals ? meals.slice(startIndex, endIndex) : [];

  function handleSearch(inputValue) {
    setSearchQuery(inputValue);
    setPage(1);
  }

  return (
    <div className="container meals-list-container" id="section-meals">
      <SearchBar onSearch={handleSearch} />
      <p>Meals For You</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Something went wrong while fetching meals.</p>}

      {meals && meals.length > 0 ? (
        <div className="meals-list">
          {currentMeals.map((meal) => (
            <Mealcard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        !isLoading &&
        !isError &&
        searchQuery && <p>No meals found for "{searchQuery}"</p>
      )}

      {meals && meals.length > mealsPerPage && (
        <div className="pagination-controls">
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
            Back
          </button>
          <span>
            Page {page} of {Math.ceil(meals.length / mealsPerPage)}
          </span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={endIndex >= meals.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
