import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('list'));
};

// another way
// const getLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('list') || '[]');
// };

function App() {
  // you can use this as defaolt value for listItems state
  // const defaultListValue = JSON.parse(localStorage.getItem('list') || '[]');

  const [listItems, setListItems] = useState(getLocalStorage() || []);

  const addNewItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setListItems([...listItems, newItem]);
    setLocalStorage([...listItems, newItem]);
    toast.success('item added to the list');
  };

  const removeItem = (id) => {
    const updatedItems = listItems.filter((item) => item.id !== id);
    setListItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success('item removed from the list');
  };

  const editItem = (id) => {
    const updatedItems = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListItems(updatedItems);
    setLocalStorage(updatedItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addNewItem={addNewItem} />
      <ItemsList listItems={listItems} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
