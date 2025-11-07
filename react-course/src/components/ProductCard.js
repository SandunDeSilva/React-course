import { useState } from "react";
export function ProductCard({ product, background = "slategray", onPurchase }) {
  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setStockCount(stockCount - 1);
    onPurchase(product);
  }

  return (
    <article
      style={{
        background,
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specifications:</p>
      <button onClick={()=>setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
      {showMore && (
        <ul style={{ padding: 0, listStyleType: "none" }}>
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      )}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <button onClick={handleClick}>Buy (from ${product.price})</button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailable = (
    <p style={{ fontSize: "15px", color: "lightsalmon" }}>Out of stock</p>
  );

  const available = (
    <p style={{ fontSize: "15px", color: "lightgreen" }}>
      {stockCount} items available
    </p>
  );

  return stockCount === 0 ? notAvailable : available;
}
