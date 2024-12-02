import { useParams } from "react-router-dom";
import {
  Stack,
  Typography,
  Container,
  Box,
  Divider,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Paper,
} from "@mui/material";
import roomBackground from "../images/room.png";
import success from "../images/success-icon-23187.png";
import Header from "../components/Header";
import { blogDataNewRooms, blogData } from "./Rooms";
import RoomCard from "../components/RoomCard";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};
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

const steps = ["Personal data", "Booking info", "Summary"];
const dataForBooking: IFormInput[] = [
  {
    checkIn: "",
    checkOut: "",
    codeRefferal: "",
    email: "",
    lastName: "",
    name: "",
    phoneNumber: "",
    totalGuest: "",
    totalRoom: "",
  },
];

const BookingRoom = (props: Props) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleNext();
    console.log(data);
    dataForBooking.push({
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      totalRoom: data.totalRoom,
      totalGuest: data.totalGuest,
      codeRefferal: data.codeRefferal,
    });
  };
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0");
  const allRooms = [...blogData, ...blogDataNewRooms];
  const room = allRooms.find((room) => room.id === numericId);

  const [step, setStep] = useState(0);
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  console.log(id);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${roomBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",
          maxWidth: "1550px",
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
              {room?.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
              }}
            >
              {room?.infomation}
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container sx={{ height: "100%" }}>
        <Box mt={"100px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h4">Booking Room</Typography>
            <Stack>
              <Box sx={{ width: "500px" }}>
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box mt={"50px"} height={"500px"}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            gap={"50px"}
          >
            <Stack>
              <RoomCard
                imageUrl={room?.img || "default img"}
                title={room?.title || "default title"}
              />
            </Stack>
            <Stack>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                  mt: 4,
                  "& .MuiTextField-root": { mb: 2 },
                }}
              >
                {step === 0 && (
                  <Card
                    elevation={3}
                    sx={{ p: 4, mb: 4, borderRadius: 2, marginTop: "-40px" }}
                  >
                    <Typography variant="h5" mb={3}>
                      Personal Information
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="First Name"
                        {...register("name", { required: true })}
                        placeholder="Your First Name"
                        variant="outlined"
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Last Name"
                        {...register("lastName", { required: true })}
                        placeholder="Your Last Name"
                        variant="outlined"
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                    </Stack>

                    <TextField
                      fullWidth
                      label="Email"
                      {...register("email", { required: true })}
                      placeholder="Your Email"
                      type="email"
                      variant="outlined"
                      sx={{ mb: 2 }}
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Phone Number"
                      {...register("phoneNumber", { required: true })}
                      placeholder="Your Phone Number"
                      type="tel"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#C4A970",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Next
                    </Button>
                  </Card>
                )}
                {step === 1 && (
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      marginTop: "-50px",
                      width: "450px",
                      maxWidth: "450px",
                    }}
                  >
                    <Typography variant="h5" mb={3}>
                      Booking Information
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <TextField
                        {...register("checkIn", { required: true })}
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                      <TextField
                        {...register("checkOut", { required: true })}
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <FormControl fullWidth>
                        <InputLabel>Total Room</InputLabel>
                        <Select
                          label="Total Room"
                          {...register("totalRoom", { required: true })}
                          sx={{ bgcolor: "#f9f9f9" }}
                        >
                          <MenuItem value={1}>01</MenuItem>
                          <MenuItem value={2}>02</MenuItem>
                          <MenuItem value={3}>03</MenuItem>
                          <MenuItem value={4}>04</MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel>Total Guest</InputLabel>
                        <Select
                          label="Total Guest"
                          {...register("totalGuest", { required: true })}
                          sx={{ bgcolor: "#f9f9f9" }}
                        >
                          <MenuItem value={1}>01</MenuItem>
                          <MenuItem value={2}>02</MenuItem>
                          <MenuItem value={3}>03</MenuItem>
                          <MenuItem value={4}>04</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>

                    <TextField
                      fullWidth
                      label="Referral Code"
                      {...(register("codeRefferal"), { required: false })}
                      placeholder="Optional"
                      variant="outlined"
                      sx={{ mt: 2 }}
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#C4A970",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Next
                    </Button>
                  </Paper>
                )}
                {step === 2 && (
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      marginTop: "-40px",
                      width: "450px",
                      maxWidth: "450px",
                    }}
                  >
                    <Stack direction={"column"} gap={"8px"}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Full Name</Typography>
                        <Stack direction={"row"} gap={"5px"}>
                          <Typography>
                            {dataForBooking[dataForBooking.length - 1].lastName}
                          </Typography>
                          <Typography>
                            {dataForBooking[dataForBooking.length - 1].name}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Tootal Room</Typography>
                        <Typography>
                          {dataForBooking.map((data) => data.totalRoom)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Tootal Guest</Typography>
                        <Typography>
                          {dataForBooking.map((data) => data.totalGuest)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Check In</Typography>
                        <Typography>
                          {dataForBooking.map((data) => data.checkIn)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Check Out</Typography>
                        <Typography>
                          {dataForBooking.map((data) => data.checkOut)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Price</Typography>
                        <Typography>500$</Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Discount</Typography>
                        <Typography>-</Typography>
                      </Stack>
                      <Divider />
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Tootal Price</Typography>
                        <Typography>500$</Typography>
                      </Stack>
                    </Stack>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#C4A970",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Next
                    </Button>
                  </Paper>
                )}
                {step === 3 && (
                  <Box>
                    <Stack textAlign={"center"}>
                      <Stack
                        direction={"column"}
                        gap={"20px"}
                        marginRight={"130px"}
                        marginTop={"-40px"}
                      >
                        <Typography fontSize={"20px"}>
                          Xaridingiz uchun rahmat
                        </Typography>
                        <img src={success} width={"230px"} alt="succes" />
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => navigate("/")}
                          type="submit"
                          size="large"
                          sx={{
                            mt: 3,
                            bgcolor: "#C4A970",
                            "&:hover": {
                              bgcolor: "#b39861",
                            },
                            textTransform: "none",
                            py: 1.5,
                          }}
                        >
                          Asosiy
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                )}
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box height={"100px"}></Box>
      </Container>
    </Box>
  );
};

export default BookingRoom;
