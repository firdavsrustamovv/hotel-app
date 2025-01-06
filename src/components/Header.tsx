import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/Logo.png";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import CardForBookedRoom from "./CardForBookedRoom";
import { blue } from "@mui/material/colors";

const pages = [
  { label: "Asosiy", path: "/" },
  { label: "Xonalar", path: "/rooms" },
  { label: "Qulayliklar", path: "/facilities" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Aloqa", path: "/contact" },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "90%" },
  height: "auto",
  maxWidth: "800px",
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
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
  room_name: string;
  img: string;
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
              {token && (
                <Avatar
                  onClick={handleOpen}
                  src="/broken-image.jpg"
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    margin: "auto",
                    padding: "3px",
                  }}
                />
              )}
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

              <Button
                onClick={handleAuth}
                sx={{
                  color: "black",
                  border: "1px solid black",
                  width: "70%",
                  display: "block",
                  margin: "auto",
                }}
              >
                {token ? "Chiqish" : "Kirish"}
              </Button>
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
                  <ThemeProvider theme={theme}>
                    <Card
                      sx={{
                        maxWidth: 400,
                        margin: "auto",
                        boxShadow: 3,
                        transition: "all 0.3s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 6,
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            sx={{
                              width: { xs: 48, md: 64 },
                              height: { xs: 48, md: 64 },
                              bgcolor: "primary.main",
                              boxShadow: 2,
                              fontSize: "1.5rem",
                            }}
                          >
                            {name?.charAt(0)}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1,
                              }}
                            >
                              <PersonIcon color="action" />
                              <Typography
                                sx={{ fontSize: { xs: "17px", md: "20px" } }}
                                component="h2"
                              >
                                {name}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <EmailIcon color="action" />
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "11px",
                                    sm: "14px",
                                    md: "16px",
                                  },
                                }}
                                color="text.secondary"
                              >
                                {email}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </ThemeProvider>
                  <Stack mt={2} alignItems={"center"}>
                    <Typography fontSize={25}>
                      Bron qilingan xonalar haqida ma'lumot
                    </Typography>
                  </Stack>
                  <hr />
                  <Box>
                    <CardForBookedRoom data={filtredRooms} />
                  </Box>
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
