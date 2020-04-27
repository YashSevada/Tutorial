import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const RoomRow = ({ details }) => {
  const {
    classname,
    institute_name,
    subject,
    author,
    secretkey,
    isPrivate,
  } = details;
  return (
    <TableRow>
      <TableCell>{classname}</TableCell>
      <TableCell>{institute_name}</TableCell>
      <TableCell>{subject}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>{isPrivate}</TableCell>
    </TableRow>
  );
};

export default RoomRow;
