import { AccountBox, Home, Person, Send, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <List>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component='a' href='#sample-list'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar