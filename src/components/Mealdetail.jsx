export default function MealDetail({ meal, isLoading, isError }) {
  return (
    <div
      className="meal-details"
      style={{ backgroundImage: meal ? `url(${meal.strMealThumb})` : "none" }}
    >
      {isLoading && <p>Loading...</p>}
      {isError && (
        <p>Oops! Something went wrong while fetching meal details.</p>
      )}
      {meal && (
        <>
          <h2>{meal.strMeal}</h2>

          <p>
            <strong>Category:</strong> {meal.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {meal.strArea}
          </p>
          <p>
            <strong>Tags:</strong> {meal.strTags || "None"}
          </p>
          {meal.strYoutube && (
            <p>
              <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                📺 Watch on YouTube
              </a>
            </p>
          )}

          <div className="meal-detail-box">
            <p>{meal.strInstructions}</p>{" "}
          </div>
        </>
      )}
      {!isLoading && !isError && !meal && <p>No meal details found.</p>}
    </div>
  );
}
