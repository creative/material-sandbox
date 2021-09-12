import PropTypes from 'prop-types';
import { create } from '../../tree';

/**
 * Handles the drag over event.
 * @param {Event} event - The drag over event.
 */
const handleDragOver = (event) => {
  event.preventDefault();
};

const Placeholder = (props) => {
  const { id } = props;

  /**
   * Handles the drop event.
   * @param {Event} event - The drop event.
   */
  const handleDrop = (event) => {
    event.stopPropagation();

    const data = event.dataTransfer.getData('SANDBOX.DATA');

    if (data) {
      const { type } = JSON.parse(data);

      window.parent.postMessage({
        type: 'SANDBOX.DISPATCH.MODIFY',
        payload: {
          action: 'REPLACE',
          target: id,
          value: create(type)
        }
      });
    }
  };

  return (
    <div
      id={id}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Placeholder
    </div>
  );
}

Placeholder.propTypes = {
  /**
   * A unique identifier.
   */
  id: PropTypes.string.isRequired
};

export default Placeholder;