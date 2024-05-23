import Item from "./Item";
import PropTypes from "prop-types";

function PackingList({ initialItems, onItemsChange }) {
  const handleRemoveItem = (item) => {
    const filtered = initialItems.filter((i) => i.id !== item.id);
    onItemsChange(filtered);
  };

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} onRemoveItem={handleRemoveItem} />
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
