import { useState } from "react";

const styles = {
  Container: {
    width: "100%",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  },
  List: {
    listStyleType: "none",
    padding: 0,
  },
  NotAvailableStatus: { fontSize: "15px", color: "lightsalmon" },
  AvailableStatus: { fontSize: "15px", color: "lightgreen" },
};

export function ProductCard({ product, background = "slategray", onPurchase }) {
  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setStockCount((prevStockCount) => prevStockCount - 1);
    onPurchase(product);
  }

  function handleTwoClicks() {
    setStockCount((prevStockCount) => prevStockCount - 1);
    setStockCount((prevStockCount) => prevStockCount - 1);
  }

  return (
    <article style={{ ...styles.Container, background }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specifications:</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "hide" : "show"}
      </button>
      {showMore && (
        <ul style={styles.List}>
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      )}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <>
          <p>Price: ${product.price}</p>
          <button onClick={handleClick}>Buy</button>
        </>
      )}
      {stockCount > 1 && <button onClick={handleTwoClicks}>Buy 2</button>}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailable = <p style={styles.NotAvailableStatus}>Out of stock</p>;

  const available = (
    <p style={styles.AvailableStatus}>{stockCount} items available</p>
  );

  return stockCount === 0 ? notAvailable : available;
}
