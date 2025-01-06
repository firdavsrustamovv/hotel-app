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
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/rooms/*">
          <Route index element={<Rooms />} />
          <Route path=":id" element={<DetailRooms />} />
          <Route path="booking/:id" element={<BookingRoom />} />
        </Route>
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
