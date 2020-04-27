import React, { useState, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classContext from '../../components/context/classContext/classContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Chart = () => {
  const { addClass } = useContext(classContext);
  const classes = useStyles();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addClass({ classname, institute_name, author, subject, isPrivate });
  };
  const [state, setState] = useState({
    classname: '',
    institute_name: '',
    subject: '',
    author: '',
    secretkey: '',
    isPrivate: false,
  });
  const {
    classname,
    institute_name,
    subject,
    author,
    secretkey,
    isPrivate,
  } = state;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <React.Fragment>
          <Title>Create Classroom</Title>
          <div className='ChartTextfield1'>
            <TextField
              id='standard-basic'
              label='Classame'
              name='classname'
              value={classname}
              onChange={handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id='standard-basic'
              label='Institute Name'
              name='institute_name'
              value={institute_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <TextField
              id='standard-basic'
              label='subject'
              name='subject'
              value={subject}
              onChange={handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id='standard-basic'
              label='Author'
              name='author'
              value={author}
              onChange={handleChange}
            />
          </div>
          <br />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disableElevation>
            {' '}
            Create Classroom{' '}
          </Button>
        </React.Fragment>
      </form>
    </div>
  );
};

export default Chart;
