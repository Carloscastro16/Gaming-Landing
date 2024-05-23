import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AppBar, ThemeProvider } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import MenuIcon from '@mui/icons-material/Menu';
const pages = ["STORE", "FAQ", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <AppBar sx={{ bgcolor: "primary.dark", my: 0, py: 0, zIndex: 999, minHeight: 'fit-content', position: 'relative' }}>
                    <Toolbar
                        className="navbar"
                        disableGutters
                        color="primary.dark"
                        sx={{ bgcolor: "primary.dark", my: 0, py: 0, zIndex: 999, minHeight: 'fit-content', height: '100%' }}
                    >
                        {/* Md Display */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: '#fff',
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <Button onClick={handleOpenNavMenu}>
                                <MenuIcon sx={{ color: 'primary.main'}}></MenuIcon>
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* XS Display */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: '#fff',
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                        
                        {/* Lg Display */}
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, my: 0, py:0 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ color: "white", display: "flex", my: 0 }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        
                        <Box sx={{ flexGrow: 0, height: '100%' }}>
                            <Tooltip title="Open settings">
                                <Button onClick={handleOpenUserMenu} sx={{ 
                                    bgcolor: 'primary.main', 
                                    color: 'primary.contrastText', 
                                    px: { xs: 4, sm: 6, md: 8, lg: 8}, 
                                    height: {xs: '42px', sm: '64px',md:'64px'}, 
                                    borderRadius: 0 }}>
                                    Download
                                </Button>
                            </Tooltip>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default ResponsiveAppBar;
