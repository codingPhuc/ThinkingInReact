import { useState } from "react";
import Table from "./table";
import SearchBar from "./searchBar";
export default function FilterTable({ PRODUCTS }) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setisStockOnly] = useState(true);
  return (
    <>
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        setFilterText={setFilterText}
        setisStockOnly={setisStockOnly}
      ></SearchBar>
      <Table
        listItems={PRODUCTS}
        filterText={filterText}
        isStockOnly={isStockOnly}
      ></Table>
    </>
  );
}
