export function ProductCard(props) {
  return (
    <article
      style={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{props.product.title}</h2>
      <img
        src={props.product.imageSrc}
        alt={props.product.title}
        width="120px"
        height="120px"
      />
      <p>Specifications:</p>
      <ul style={{ padding: 0, listStyleType: "none" }}>
        <li>{props.product.specifications[0]}</li>
        <li>{props.product.specifications[1]}</li>
        <li>{props.product.specifications[2]}</li>
      </ul>
      <button>Buy (from ${props.product.price})</button>
    </article>
  );
}
