import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

function App() {
  function handleClick({ product }) {
    alert(`You clicked on ${product.title} which costs $${product.price}`);
  }
  const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specifications: [
        "A17 Pro chip",
        "3x or 5x Telephoto Camera",
        "Upto 29 hours video playback",
      ],
      price: 999,
    },
    {
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specifications: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Upto 6 hours listening time",
      ],
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specifications: [
        "45mm or 41mm case size",
        "Always-On display",
        "Upto 18 hours normal use",
      ],
      price: 399,
    },
  ];

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onClick={handleClick}
          />
        ))}
      </ProductList>

      <h2>Products which cost up to $500</h2>
      <ul>
        {products
          .filter(({ price }) => price < 500)
          .map(({ title, price }) => {
            return (
              <li key={title}>
                {title} - ${price}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
