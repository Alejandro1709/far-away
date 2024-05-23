import PropTypes from "prop-types";

function Item({ item, onRemoveItem }) {
  return (
    <li>
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
};
