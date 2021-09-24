import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { create } from '../tree';
import styles from './Placeholder.module.scss';

const cx = classNames.bind(styles);

/**
 * Handles the drag over event.
 * @param {Event} event - The drag over event.
 */
const handleDragOver = (event) => {
  event.preventDefault();
};

/**
 * Handles the drag enter event.
 * @param {Event} event - The drag enter event.
 */
const handleDragEnter = (event) => {
  event.preventDefault();

  const { target } = event;
  target.style.backgroundColor = '#ebf6fd';
};

/**
 * Handles the drag enter event.
 * @param {Event} event - The drag enter event.
 */
const handleDragLeave = (event) => {
  const { target } = event;

  target.style.backgroundColor = '';
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
      className={cx('placeholder')}
      id={id}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
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