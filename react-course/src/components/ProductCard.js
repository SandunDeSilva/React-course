export function ProductCard({
  product,
  background = "slategray",
  onClick,
  ...restProps
}) {
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
      <img src={product.imageSrc} alt={product.title} {...restProps} />
      <p>Specifications:</p>
      <ul style={{ padding: 0, listStyleType: "none" }}>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
      </ul>
      <button onClick={() => onClick({ product })}>
        Buy (from ${product.price})
      </button>
    </article>
  );
}
