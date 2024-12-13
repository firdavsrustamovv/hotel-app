import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/Logo.png";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
const pages = [
  { label: "Asosiy", path: "/" },
  { label: "Xonalar", path: "/rooms" },
  { label: "Qulayliklar", path: "/facilities" },
  { label: "Takliflarimiz", path: "/offers" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Aloqa", path: "/contact" },
];

const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  window.location.reload();
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1 }}>
            <Link to={"/"}>
              <img src={Logo} alt="Logo" width="60px" height="40px" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <NavLink
                key={page.label}
                to={page.path}
                style={({ isActive }) => ({
                  color: "white",
                  borderBottom: isActive ? "2px solid white" : "none",
                  textDecoration: "none",
                  padding: "8px 16px",
                })}
              >
                {page.label}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={NavLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex", gap: "20px" } }}>
            <Avatar src="/broken-image.jpg" sx={{ cursor: "pointer" }} />
            <Button
              onClick={() => logOut()}
              sx={{
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Chiqish
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
