import Item from "./Item";
import PropTypes from "prop-types";

function PackingList({ initialItems, onItemsChange }) {
  const handlePackItem = (item) => {
    const updated = initialItems.map((i) =>
      i.id === item.id ? { ...item, packed: !item.packed } : { ...i }
    );
    onItemsChange(updated);

    localStorage.setItem("items", JSON.stringify(updated));
  };

  const handleRemoveItem = (item) => {
    const filtered = initialItems.filter((i) => i.id !== item.id);
    onItemsChange(filtered);
    localStorage.setItem("items", JSON.stringify(filtered));
  };

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={handleRemoveItem}
            onPackItem={handlePackItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

PackingList.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.object),
  onItemsChange: PropTypes.func,
};
