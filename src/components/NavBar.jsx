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
          <Link to="/" style={{color: "white", textDecoration: "none"}}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
           Polaric
          </Typography>
          </Link>

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

              <Typography textAlign="center"> 

                <Link to="/category/shooter" style={{color: "black", textDecoration: "none"}}>Shooter</Link>

              </Typography>


            </MenuItem>
            
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">

                <Link to="/category/accion" style={{color: "black", textDecoration: "none"}}>Accion</Link>

              </Typography>

            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center"> 

                <Link to="/category/RPG" style={{color: "black", textDecoration: "none"}}>RPG</Link>
              </Typography>

            </MenuItem>
      
            </Menu>
          </Box>
         
          <Link to="/" style={{color: "white", textDecoration: "none"}}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            Polaric
          </Typography>
          </Link>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>

                <Link to="/category/shooter" style={{color: "white", textDecoration: "none"}}>Shooter</Link>

              </Button>

              <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>

                <Link to="/category/accion" style={{color: "white", textDecoration: "none"}}>Accion</Link>

              </Button>

              <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>

                <Link to="/category/RPG" style={{color: "white", textDecoration: "none"}}>RPG</Link>
                
              </Button>
            
          </Box>

          <CartWidget/>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;