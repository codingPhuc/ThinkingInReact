export default function Item({ product }) {
  const name = product.stocked ? (
    <td> {product.name} </td>
  ) : (
    <td style={{ color: "red" }}> {product.name} </td>
  );
  return (
    <tr>
      <td> {name} </td>
      <td> {product.price}</td>
    </tr>
  );
}
