import {
  Stack,
  Box,
  Typography,
  Divider,
  Rating,
  Container,
} from "@mui/material";

type Props = {};

const Quality = (props: Props) => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"} gap={2}>
        <Stack direction={"column"}>
          <Stack>
            <Typography variant="h6" color="white">
              Har doim eng yaxshi xizmat va sifatga ega mehmonxonalar
            </Typography>
            <Divider color="white" sx={{ marginTop: "20px" }} />
          </Stack>
          <Stack mt={"20px"}>
            <Rating
              sx={{ fontSize: "40px" }}
              name="half-rating-read"
              defaultValue={2.5}
              precision={5}
              readOnly
            />
            <Typography color="white" fontSize={"13px"}>
              Besh yulduzli mehmonxonalar
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h3" color="white">
                100+
              </Typography>
              <Typography color="white">Qulay xonalar</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h3" color="white">
                5M+
              </Typography>
              <Typography color="white">Baxtli mijozlar</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h3" color="white">
                23+
              </Typography>
              <Typography color="white">Sertifikatlar</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Quality;
