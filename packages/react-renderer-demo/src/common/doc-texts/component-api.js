import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

import MdxContent from 'docs/components/component-api/component-api.md';
import ListOfContent from '../helpers/list-of-content';

const reqSource = require.context(
  '!raw-loader!docs/components/',
  true,
  /\.md/,
);

const useStyles = makeStyles(() => ({
  demoWrapper: {
    displa: 'flex',
  },
  mdxWrapper: {
    width: 'calc(100% - 240px)',
  },
  contentWrapper: {
    width: 240,
    position: 'fixed',
    right: 0,
    top: 96,
    overflow: 'auto',
    height: 'calc(100vh - 96px)',
  },
}));

const ComponentApi = () => {

  const classes = useStyles();
  return (
    <div className={ classes.demoWrapper }>
      <div className={ classes.mdxWrapper }>
        <MdxContent />
      </div>
      <div className={ classes.contentWrapper }>
        <ListOfContent text={ reqSource('./component-api/component-api.md').default } />
      </div>
    </div>
  );
};

export default (<ComponentApi />);
