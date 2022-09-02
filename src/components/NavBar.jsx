import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* LOGO */ }
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="\index.html"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: "inherit"
            }}
          >
            Polaric
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
              color="inherit"
              textAlign="center"
              sx={{
                textDecoration: "none"
              }}
              >  
              <Link to="/www.google.com">Juegos</Link>
              </Typography>
            </MenuItem>
            
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
              color="inherit"
              textAlign="center"
              component="a"
              href="\categorias"
              sx={{
                textDecoration: "none"
              }}
              >  
              Categorias
              </Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
              color="inherit"
              textAlign="center"
              component="a"
              href="\portfolio"
              sx={{
                textDecoration: "none"
              }}
              >  
              Portfolio
              </Typography>
            </MenuItem>
      
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="\index.html"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Polaric
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Juegos
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Categorias
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Portfolio
              </Button>
            
          </Box>

          <CartWidget/>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;