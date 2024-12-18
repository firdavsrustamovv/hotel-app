import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const pages = [
  { label: "Asosiy", path: "/" },
  { label: "Xonalar", path: "/rooms" },
  { label: "Qulayliklar", path: "/facilities" },
  { label: "Takliflarimiz", path: "/offers" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Aloqa", path: "/contact" },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  totalRoom: string;
  totalGuest: string;
  codeRefferal: string;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [token, setToken] = useState<string | null>();
  const [name, setName] = useState<string | null>();
  const [email, setEmai] = useState<string | null>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [myRooms, setMyRooms] = useState<IFormInput[]>([]);
  const [filtredRooms, setFiltredRooms] = useState<IFormInput[]>([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("bookingRoom").select("*");

      if (error) {
        throw error;
      }

      setMyRooms(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    setToken(storedToken);
    setName(storedName);
    setEmai(storedEmail);
    fetchData();
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAuth = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      setToken(null);
    } else {
      navigate("/signUp");
    }
  };
  useEffect(() => {
    if (email) {
      const userRooms = myRooms.filter((val) => val.email === email);
      setFiltredRooms(userRooms);
    }
  }, [myRooms, email]);

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
            {token && (
              <Avatar
                onClick={handleOpen}
                src="/broken-image.jpg"
                sx={{ cursor: "pointer" }}
              />
            )}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    "ism": {name}
                  </Typography>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    "email": {email}c1
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Bron qilingan sana "Kirish"{" "}
                    {filtredRooms.map((val) => val.checkIn)}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Bron qilingan sana "Chiqish"{" "}
                    {filtredRooms.map((val) => val.checkOut)}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Xonalar soni {filtredRooms.map((val) => val.totalRoom)}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Mexmonlar soni {filtredRooms.map((val) => val.totalGuest)}
                  </Typography>
                </Box>
              </Fade>
            </Modal>
            <Button
              onClick={handleAuth}
              sx={{
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              {token ? "Chiqish" : "Kirish"}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
