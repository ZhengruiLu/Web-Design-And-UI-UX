// eslint-disable-next-line react/prop-types
function Reorder({ onReorder }) {
    return (
      <button className="reorder-btn" onClick={onReorder}>
        Reorder
      </button>
    );
  }
  
export default Reorder;

