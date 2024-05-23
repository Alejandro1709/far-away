import PropTypes from "prop-types";

function Stats({ initialItems }) {
  const packed = initialItems.filter((item) => item.packed);
  const percentage = Math.round((packed.length / initialItems.length) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {initialItems.length} items on your list, and you already
        packed {packed.length} ({percentage}%)
      </em>
    </footer>
  );
}

export default Stats;

Stats.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.object),
};
