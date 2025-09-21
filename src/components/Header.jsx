export default function Header() {
  function scrollToMeals() {
    document
      .getElementById("section-meals")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="header">
      <div>
        <h1>Food Recepies</h1>
        <p>Discover delicious recipes from around the world!</p>
        <p>Search for your favorite meals and explore new culinary delights.</p>
        <p>Get inspired and start cooking today!</p>
      </div>
      <button className="icon-button" onClick={scrollToMeals}>
        <ion-icon name="chevron-down-outline" className="icon"></ion-icon>
      </button>
    </header>
  );
}
