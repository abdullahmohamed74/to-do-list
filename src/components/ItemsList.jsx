import SingleItem from './SingleItem';

function ItemsList({ listItems, removeItem,editItem }) {
  const renderedItems = listItems.map((item) => {
    return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} />;
  });

  return <div className="items">{renderedItems}</div>;
}
export default ItemsList;
