import React from "react";
import { Stack, Box, Typography } from "@mui/material";

interface Data {
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

interface CardForBookedRoomProps {
  data: Data[];
}

const CardForBookedRoom: React.FC<CardForBookedRoomProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        bgcolor: "background.default",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          width: "100%",
          maxWidth: "650px",
        }}
      >
        {data.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            gap={3}
            alignItems="center"
            sx={{
              flexWrap: "wrap",
              padding: 2,
              borderRadius: "8px",
              bgcolor: "background.paper",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.room_name}
              loading="lazy"
              sx={{
                width: { xs: "100%", sm: "250px" },
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <Stack
              sx={{
                flex: 1,
                minWidth: 0,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                Xona Turi: {item.room_name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Kirish: {item.checkIn}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Chiqish: {item.checkOut}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Xonalar soni: {item.totalRoom}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Mexmonlar soni: {item.totalGuest}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default CardForBookedRoom;
