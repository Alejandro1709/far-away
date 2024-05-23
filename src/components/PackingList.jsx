import Item from "./Item";
import PropTypes from "prop-types";

function PackingList({ initialItems }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

PackingList.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.object),
};
