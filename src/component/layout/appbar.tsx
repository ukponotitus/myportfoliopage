import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.jpg'
import Image from 'next/image';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', "About", 'Features', 'Services', 'Resume', 'Blog', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      UKCODE
      </Typography>
      <Divider />
      <List sx={{textTransform:"none ", color:"red" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding  sx={{textTransform:"none ", color:"red" }}>
            <ListItemButton sx={{ textAlign: 'center', textTransform:"none ", color:"red" }}>
              <ListItemText primary={item}  sx={{textTransform:"none ", color:"red" }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () =>  window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" elevation={0} sx={{
        backgroundColor:{md:"#F0F0F0", xs:"#D80032"},
        color:"black",
        height:"15vh"
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box mt={{md:"25px", xs:"0px"}} mx={{md:"10px", xs:"0px"}} ml={{md:"0px", xs:"80%"}}>
          <Avatar  sx={{
            width: {xs:"21px", sm:"33px", md:"4.47vw"}, 
          height: {xs:"21px", sm:"33px", md:"4.47vw"} }}>
            {/* <Box ml="5px"> */}
          <Image alt="Remy Sharp" src={profile}
           layout="fill" />
            {/* </Box> */}
          </Avatar>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },  mt:"25px", fontWeight:"600" }}
          >
           UKCODE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mt:"25px" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#272829', fontWeight:"500", fontSize:"16px", textTransform:"none" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}