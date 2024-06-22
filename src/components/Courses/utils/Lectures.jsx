import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { PlayArrow } from '@mui/icons-material';

export default function Lectures() {
  return (
      <ListItem className='hover:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer'>
        <ListItemAvatar>
          <Avatar>
            <PlayArrow className='text-black'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lecture-1" secondary="Some Random Description" />
      </ListItem>
  );
}
