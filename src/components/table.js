import Item from "./item";
import ItemCategory from "./itemCategory";
export default function Table({ listItems, filterText, isStockOnly }) {
  const rows = [];
  let passCategory = "";
  listItems.forEach((element) => {
    if (element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (isStockOnly && !element.stocked) {
      return;
    }
    if (element.category !== passCategory) {
      rows.push(
        <ItemCategory category={element.category} key={element.category} />
      );
    }
    
    rows.push(<Item product={element} key={element.name}></Item>);
    passCategory = element.category;
  });

  //   listItems.forEach((product) => {
  //     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
  //       return;
  //     }
  //     if (isStockOnly && !product.stocked) {
  //       return;
  //     }
  //     if (product.category !== passCategory) {
  //       rows.push(
  //         <ItemCategory category={product.category} key={product.category} />
  //       );
  //     }
  //     rows.push(<Item product={product} key={product.name} />);
  //     passCategory = product.category;
  //   });
  return (
    <>
      <table>
        <tr>
          {" "}
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
  // const  listItems  =
}
