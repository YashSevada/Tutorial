import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';

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

      <Title> join classroom </Title>

      <TextField id="standard-basic" label="Join Class"/>
        <br/>
        <br/>
        <br/>
      <Button variant="contained" color="primary" disableElevation> Create Classroom </Button>
    
    </React.Fragment>
  );
}