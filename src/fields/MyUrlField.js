import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    paddingLeft: 2,
  },
};

const MyUrlField = ({record = {}, source, classes}) => {
  let url = record[source];
  url = (url.indexOf('http') === -1) ? `http://${url}` : url;

  return (
    <a href={url} className={classes.link}
      target="_blank" rel="noopener noreferrer">
      {url}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default withStyles(styles)(MyUrlField);
