import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./utils/Navbar/Navbar";
import { Footer } from "./utils/Footer/Footer";
import Webinars from "./components/Webinars/Webinars";
import Profile from "./pages/Profile";
import Courses from "./components/Courses/Courses";
import Register from "./components/Login/Register";
import Gallery from "./pages/Gallery";
import CourseEnroll from "./components/CourseForm/CourseEnroll";
import WebinarEnroll from "./components/WebinarRegister/WebinarEnroll";
import Cart from "./pages/Cart";
import WebinarPayment from "./pages/WebinarPayment";
import CoursePayment from "./pages/CoursePayment";
import FetchAlWebinars from "./components/Webinars/FetchAlWebinars";
import SingleCourse from "./components/Courses/SingleCourse";
import ProfileEdit from "./components/Profile/ProfileEdit";
import IsLoggedin from "./middlewares/IsLoggedin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />

          <Route path = "/login" element = {<Login />} />
          <Route path = "/webinars" element = {<FetchAlWebinars />} />
          <Route path="/webinars/:id" element={
            <IsLoggedin>
              <Webinars />
            </IsLoggedin>
          } />

          <Route path="/register" element={<Register />} />
          
          <Route path="/webinar/register" element={<WebinarEnroll />} />
          <Route path="/webinar/payment" element={<WebinarPayment />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update" element={<ProfileEdit />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/register" element={<CourseEnroll />} />
          <Route path="/course/payment" element={<CoursePayment />} />
          <Route path="/courses/single/:id" element={<SingleCourse />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
