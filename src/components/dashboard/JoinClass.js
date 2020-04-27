import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title> status </Title>
      <Typography variant="h6" gutterBottom>
          My classes : 2
      </Typography>

      <Typography variant="h6" gutterBottom>
          Joined classes : 5
      </Typography>

      <Typography variant="h6" gutterBottom>
          Private classes : 8
      </Typography>

    </React.Fragment>
  );
}