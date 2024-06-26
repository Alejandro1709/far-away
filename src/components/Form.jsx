import { useState } from "react";
import PropTypes from "prop-types";

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: items.length + 1,
      description,
      quantity: qty,
      packed: false,
    };

    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={qty} onChange={(e) => setQty(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  setItems: PropTypes.func,
};
