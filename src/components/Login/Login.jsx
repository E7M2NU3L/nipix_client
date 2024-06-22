// Login.js
import React from "react";
import { useDispatch } from "react-redux";
import { login } from '../../features/authSlice';
import authService from "../../api/Auth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import './main.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.loginUser({ email, password });
      if (response) {
        console.log(response);
        dispatch(login({
          isLoggedin: true,
          isRegistered: true,
          userData: response
        }));
        navigate('/');
      } else {
        return false;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className="flex justify-center items-center" onSubmit={onClickSubmit} style={{ minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem" }}>
      <Card className="w-[300px] sm:w-96 card-style bg-gray-200">
        <CardHeader variant="gradient" style={{ backgroundColor: "#1181D8" }} className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex justify-around items-center text-center py-4">
            <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out ">
              <Google />
            </div>
            <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out">
              <Facebook />
            </div>
            <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out">
              <GitHub />
            </div>
          </div>
          <Input label="Email" size="lg" value={email} onChange={handleEmail} />
          <Input label="Password" size="lg" value={password} onChange={handlePassword} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" style={{ color: "#1181D8" }} />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button fullWidth style={{ backgroundColor: "#1181D8" }} type="submit">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography as="a" href="#signup" variant="small" style={{ color: "#1181D8" }} className="ml-1 font-bold">
              <Link to="/register">
                Sign up
              </Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Login;
