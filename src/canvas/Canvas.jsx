import { useEffect, useState } from 'react';
import Renderer from '../renderer/renderer';
import { create } from '../tree';

/**
 * Posts a message to the parent window.
 * @param {string} type - The message type. 
 * @param {Object} payload - The data to pass along with the message.
 */
function postMessage(type, payload) {
  window.parent.postMessage({ type, payload });
}

/**
 * Handles the drag over event.
 * @param {Event} event - The drag over event.
 */
function handleDragOver(event) {
  event.preventDefault();
}

/**
 * Handles the drop event.
 * @param {Event} event - The drop event.
 */
function handleDrop(event) {
  const data = event.dataTransfer.getData('SANDBOX.DATA');

  if (data) {
    const { type } = JSON.parse(data);

    postMessage('SANDBOX.DISPATCH.MODIFY', {
      action: 'APPEND',
      target: 'root-node',
      value: create(type),
    });
  }
}

const Canvas = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    /**
     * Handles messages from the parent window.
     * @param {Event} event - The window message event.
     */
    function handleMessage(event) {
      const { data } = event;
      const { type, payload } = data;

      if (type === 'SANDBOX.STATE.UPDATE') {
        setState(payload.state);
      }
    }

    /**
     * Handles the click event.
     * @param {Event} event - The click event.
     */
    function handleClick(event) {
      const selection = event.target.closest('*[id^="ms-"], #root');
      const target = selection ? selection.id : 'root';

      postMessage('SANDBOX.DISPATCH.SELECT', { target });
    };

    // Register events.
    document.addEventListener('click', handleClick);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('drop', handleDrop);
    window.addEventListener('message', handleMessage);

    // Request a state update on mount to populate the sandbox.
    postMessage('SANDBOX.STATE.REQUEST');

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('drop', handleDrop);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {state && Renderer.render(state.tree)}
    </>
  )
}

export default Canvas;