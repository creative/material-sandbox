import { useEffect, useState } from 'react';
import Renderer from '../renderer/renderer';
import { create } from '../tree';

const Canvas = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
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
    function handleDrop(_event) {
      window.parent.postMessage({
        type: 'SANDBOX.DISPATCH.MODIFY',
        payload: {
          action: 'APPEND',
          target: 'root',
          value: create('box'),
        }
      });
    }

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

    // Register events.
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('drop', handleDrop);
    window.addEventListener('message', handleMessage);

    // Request a state update on mount to populate the sandbox.
    window.parent.postMessage({ type: 'SANDBOX.STATE.REQUEST' });

    return () => {
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('drop', handleDrop);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  console.log(state);

  return (
    <div>
      Canvas
      {state && Renderer.render(state.tree)}
    </div>
  )
}

export default Canvas;