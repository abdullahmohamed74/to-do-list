function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item"> 
      <input
        checked={item.completed}
        onChange={() => editItem(item.id)}
        type="checkbox"
      />
      <p style={{ textDecoration: item.completed && 'line-through' }}>
        {item.name}
      </p>
      <button onClick={() => removeItem(item.id)} className="btn remove-btn">
        delete
      </button>
    </div>
  );
}
export default SingleItem;
