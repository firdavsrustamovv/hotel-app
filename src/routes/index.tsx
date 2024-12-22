import DetailRooms from "../pages/DetailRooms";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import BookingRoom from "../pages/BookingRoom";
import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";
import About from "../pages/About";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Facilities from "../pages/Facilities";

type RouteType = {
  path?: string;
  element: JSX.Element;
  index?: boolean;
  children?: RouteType[];
};

export const ROUTES: RouteType[] = [
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms/*",
    element: <Rooms />,
    children: [
      { index: true, element: <Rooms /> },
      { path: ":id", element: <DetailRooms /> },
      { path: "booking/:id", element: <BookingRoom /> },
    ],
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog/*",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
];
