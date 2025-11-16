import { Fragment, useState } from "react";
import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import { ProductFilter } from "./components/ProductFilter";
import "./App.css";

function App() {
  const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specifications: [
        "A17 Pro chip",
        "3x or 5x Telephoto Camera",
        "Upto 29 hours video playback",
      ],
      stockCount: 10,
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
      stockCount: 0,
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
      stockCount: 6,
      price: 399,
    },
  ];

  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other values",
  });

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which costs $${product.price}`);
  }

  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value,
      },
    }));
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onPurchase={handlePurchase}
          />
        ))}
      </ProductList>

      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />

      {products
        .filter(
          ({ price }) =>
            price >= filters.price.min && price <= filters.price.max
        )
        .map(({ title, price }) => {
          return (
            <Fragment key={title}>
              <hr className="ListDivider" />
              <p className="ListTitle">
                {title} - ${price}
              </p>
            </Fragment>
          );
        })}
    </div>
  );
}

export default App;
