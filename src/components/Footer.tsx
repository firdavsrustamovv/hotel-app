import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        textAlign: "center",
        padding: "5px",
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: { xs: "20px", md: "40px" } }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Hotel-app
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            maxWidth: "500px",
            padding: { xs: "0 10px", md: "0" },
          }}
        >
          Sizning qulay va zamonaviy dam olishingiz uchun mehmonxona xizmati.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        >
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"/"}
          >
            Asosiy
          </Link>
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"rooms"}
          >
            Xonalar
          </Link>
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"/facilities"}
          >
            Qulayliklar
          </Link>
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"/about"}
          >
            Biz haqimizda
          </Link>
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"/contact"}
          >
            Aloqa
          </Link>
          <Link
            style={{
              fontSize: "15px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            to={"/blog"}
          >
            Blog
          </Link>
        </Stack>
      </Stack>

      <Box
        sx={{
          borderTop: "1px solid #333333",
          paddingTop: "10px",
        }}
      >
        <Typography>©2024 Hotel-App. Barcha huquqlar himoyalangan</Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          spacing={2}
          sx={{
            marginTop: "10px",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Maxfiylik siyosati
          </Typography>
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Foydalanish shartlari
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
