import Workspace from './Workspace.jsx';

const workspace = {
  hidden: true,
  description: 'The root workspace',
  elementType: Workspace,
  props: {
    children: {
      type: 'node',
      description: 'The content of the component.'
    },
  },
};

export default workspace;
