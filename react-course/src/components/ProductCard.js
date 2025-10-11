export function ProductCard({ product, background = "slategray", onClick }) {
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
      <ul style={{ padding: 0, listStyleType: "none" }}>
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>

      <button onClick={() => onClick({ product })}>
        Buy (from ${product.price})
      </button>
    </article>
  );
}
