import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Offers from "./pages/Offers";
import About from "./pages/About";
import "./App.css";
import DetailRooms from "./pages/DetailRooms";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/*">
          <Route index element={<Rooms />} />
          <Route path=":id" element={<DetailRooms />} />
        </Route>
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
