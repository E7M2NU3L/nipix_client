import React from 'react'
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@material-tailwind/react';
import { Computer, Search } from '@mui/icons-material';
import { useSnapshot } from 'valtio';
import CartProxy from '../../proxy/CartProxy';

const Sidebar = () => {
    const CartInfo = useSnapshot(CartProxy);
    console.log(CartInfo);

    const handleWebinars = () => {
        CartProxy.Webinars = true;
        CartProxy.Courses = false;
    }

    const handleCourses = () => {
        CartProxy.Webinars = false;
        CartProxy.Courses = true;
    }
  return (
    <div className='sm:w-1/4 w-[10%] bg-gray-200 min-h-[90vh]'>
        <List>
            <ListItem key="Courses" disablePadding>
              <ListItemButton className='w-[10%] sm:w-1/4' onClick={handleCourses}>
                <ListItemIcon>
                <Computer />
                </ListItemIcon>
                <ListItemText primary="Courses" className='text-dark-1 font-semibold hidden sm:block' />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem key="Webinars" disablePadding>
              <ListItemButton className='w-[10%] sm:w-1/4' onClick={handleWebinars}>
                <ListItemIcon>
                <Search />
                </ListItemIcon>
                <ListItemText primary="Webinars" className='text-dark-1 font-semibold hidden sm:block' />
              </ListItemButton>
            </ListItem>
            <Divider />
      </List>
    </div>
  )
}

export default Sidebar