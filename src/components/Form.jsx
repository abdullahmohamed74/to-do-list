import { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addNewItem }) {
  const [newItemName, setNewItemName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please provide value');
      return;
    }
    addNewItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          type="text"
          className="form-input"
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
}
export default Form;
