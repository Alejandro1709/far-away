import PropTypes from "prop-types";

function Item({ item, onRemoveItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        value={item.packed}
        onChange={() => onPackItem(item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item)}>❌</button>
    </li>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.object,
  onRemoveItem: PropTypes.func,
  onPackItem: PropTypes.func,
};
