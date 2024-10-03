export default function SearchBar({
  filterText,
  isStockOnly,
  setFilterText,
  setisStockOnly,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => setisStockOnly(e.target.checked)}
        ></input>
        Only show products in stock
      </label>
    </form>
  );
}
// export default function SearchBar({
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   onInStockOnlyChange,
// }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />{" "}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }
