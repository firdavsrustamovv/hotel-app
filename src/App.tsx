import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import "./App.css";
import DetailRooms from "./pages/DetailRooms";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import BookingRoom from "./pages/BookingRoom";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import { ROUTES } from "./routes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={child.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
};

export default App;

{
  /* <Route path="/signIn" element={<SignIn />} />
<Route path="/signUp" element={<SignUp />} />
<Route path="/" element={<Home />} />
<Route path="/rooms/*">
  <Route index element={<Rooms />} />
  <Route path=":id" element={<DetailRooms />} />
  <Route path="booking/:id" element={<BookingRoom />} />
</Route>
<Route path="/facilities" element={<Facilities />} />
<Route path="/about" element={<About />} />
<Route path="/blog/*">
  <Route index element={<Blog />} />
  <Route path=":id" element={<Blog />} />
</Route>
<Route path="/contact" element={<ContactUs />} /> */
}
