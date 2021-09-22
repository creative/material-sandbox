const initialState = {
  theme: {
    palette: {
      mode: 'light',
    }
  },
  tree: {
    id: 'root',
    type: 'element',
    value: {
      type: 'workspace',
      props: {
        children: {
          id: 'root-node',
          type: 'node'
        }
      }
    }
  }
};

export default initialState;
