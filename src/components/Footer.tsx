import { Box, Typography, TextField, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        sx={{ marginBottom: "40px" }}
      >
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Hotel-app
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            2024 Uzbekiston
            <br />
            Jizzax
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          sx={{ flex: 1 }}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Link style={{ fontSize: "14px" }} to={"/"}>
              Asosiy
            </Link>
            <Link style={{ fontSize: "14px" }} to={"rooms"}>
              Xonalar
            </Link>
            <Link style={{ fontSize: "14px" }} to={"/facilities"}>
              Qulayliklar
            </Link>
          </Stack>
          <Stack spacing={2} sx={{ flex: 1 }}>
            {/* <Link style={{ fontSize: "14px" }} to={"/offers"}>
              Takliflarimiz
            </Link> */}
            <Link style={{ fontSize: "14px" }} to={"/about"}>
              Biz haqimizda
            </Link>
            <Link style={{ fontSize: "14px" }} to={"/contact"}>
              Aloqa
            </Link>
            <Link style={{ fontSize: "14px" }} to={"/blog"}>
              Blog
            </Link>
          </Stack>
        </Stack>

        <Stack spacing={2} sx={{ flex: 1 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <TextField
              variant="standard"
              placeholder="Email Address"
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: "#ffffff",
                  background: "transparent",
                  borderBottom: "1px solid #ffffff",
                },
              }}
              sx={{ flexGrow: 1, marginRight: "8px" }}
            />
            <IconButton>
              <ArrowForwardIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          fontSize: "12px",
          borderTop: "1px solid #333333",
          paddingTop: "20px",
        }}
      >
        <Typography>©2024 Hotel-App. Barcha huquqlar himoyalangan</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
