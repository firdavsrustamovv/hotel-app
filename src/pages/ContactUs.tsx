import {
  Stack,
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import contactUs from "../images/contactUs.png";
import Header from "../components/Header";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${contactUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",
          width: "100%",
        }}
      >
        <Header />
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          mt="150px"
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
              }}
            >
              Aloqa
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>

      <Container>
        <Box mt={"100px"}>
          <Stack mt={"50px"} alignItems={"center"}>
            <Box
              sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#121212",
                padding: "20px",
                width: "1000px",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  backgroundColor: "#1E1E1E",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  maxWidth: "1000px",
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Biz bilan bog'lanish
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#aaa",
                    marginBottom: "30px",
                    textAlign: "center",
                  }}
                >
                  Iltimos, quyidagi ma'lumotlarni to'ldiring va mijozlarga
                  xizmat ko'rsatish guruhimiz a'zosi siz bilan bog'lanadi
                </Typography>
                <Stack spacing={2}>
                  <TextField
                    {...register("name", { required: true })}
                    label="Full Name"
                    variant="filled"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", backgroundColor: "#2C2C2C" },
                    }}
                  />

                  <TextField
                    {...register("email", { required: true })}
                    label="Email"
                    type="email"
                    variant="filled"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", backgroundColor: "#2C2C2C" },
                    }}
                  />

                  <TextField
                    {...register("message", { required: true })}
                    label="Message"
                    variant="filled"
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", backgroundColor: "#2C2C2C" },
                    }}
                  />
                </Stack>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    padding: "10px 0",
                    backgroundColor: "#D4AF37",
                    color: "#000",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#B38E30" },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
