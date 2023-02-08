import React, { useState } from 'react'

import Icon from '@mui/material/Icon';
import { Autocomplete, Avatar, Box, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, TextField, Tooltip, Typography } from '@mui/material';
import { Logo } from '../styled-components/logo';
import AppMenu from './menu';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import CartBadge from './cart';
import useFetch from '../hooks/useFetch';
import CategoryMenu from './categoryMenu';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const url = 'https://fakestoreapi.com/products';
  const { data: options, loading } = useFetch(url, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      {loading ? <h1>loading...</h1> :
        <>
          <Box sx={{ background: '#fff', boxShadow: "0 2px 6px 5px rgb(0 0 0 / 15%)" }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ padding: "10px 0" }}>
              <Grid item xs={1} >
                <Logo>
                  <Icon fontSize='large'>storefront</Icon>
                  <Typography>My Store</Typography>
                </Logo>
              </Grid>
              <Grid item xs={2}>
                <AppMenu />
              </Grid>
              <Grid item xs={8}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options?.map(a => a.title) || []}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={1}>
                <CartBadge />
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ background: '#000', padding: "10px 0", boxShadow: "0 2px 6px 5px rgb(0 0 0 / 15%)" }}>
            <CategoryMenu />
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      }
    </>
  )
}

export default Header