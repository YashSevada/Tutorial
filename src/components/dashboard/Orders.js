import React, { useContext, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import RoomRow from './RoomRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classContext from '../context/classContext/classContext';

// Generate Order Data
function createData(id, ClassRoom, Author, Status, Room, Action) {
  return { id, ClassRoom, Author, Status, Room, Action };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const { getClassRoom, classes } = useContext(classContext);
  useEffect(() => {
    getClassRoom();
  }, []);
  return (
    <React.Fragment>
      <Title>My ClassRoom</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>ClassRoom</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Room</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((room) => (
            <RoomRow key={room.id} details={room} />
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
