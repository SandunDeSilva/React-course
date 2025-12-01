import { Fragment, useState } from "react";
import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import { ProductFilter } from "./components/ProductFilter";
import styles from "./App.module.css";
import { products as productsData } from "./data/products";

function App() {
  const [products, setProducts] = useState(productsData)
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other values",
  });

  const [favorites, setFavorites] = useState([]);

  function handlePurchase(productId, stockCount){
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stockCount } : product
      )
    );
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

  function handleFavorite(productId) {
    if (favorites.includes(productId)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== productId)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productId]);
    }
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={handleFavorite}
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
              <hr className={styles.ListDivider} />
              <p className={styles.ListTitle}>
                {title} - ${price}
              </p>
            </Fragment>
          );
        })}
    </div>
  );
}

export default App;
