import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [];
  /* let foodItems = [
    "Green Vegetables",
    "Garlic",
    "Ginger",
    "Eggs",
    "Pumpkin seeds",
    "Ghee",
  ];*/

  /*ternary operator
  let emptyMessage = [
    foodItems.length === 0 ? (
      <h3>
        I am still hungry please Mom come back to home to feed us a tasty and
        spicy foods.
      </h3>
    ) : null,
  ];*/

  // Logical operators.
  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && (
        <h3>
          I am still hungry please Mom come back to home to feed us a tasty and
          spicy foods.
        </h3>
      )}

      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} class="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
