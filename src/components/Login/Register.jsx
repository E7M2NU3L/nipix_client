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
import './main.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../api/Auth";
 
const Register =() => {
  
  // state hadlers
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  // function handlers
  const handlepassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();

  // login functionality
  const OnclickSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log( username,
        email,
        password)
      const response = await authService.RegisterUser({
        username,
        email,
        password
      });
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <main className="flex justify-center items-center"  style={{
      minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem"
    }}>
    <form className="background" onSubmit={OnclickSubmit}>
    <Card className="w-[300px] sm:w-96 card-style bg-gray-200" style={{
        
      }}>
      <CardHeader
        variant="gradient"
        style={{
          backgroundColor: "#1181D8"
        }}
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h5" color="white">
          Create your Account
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div className="flex justify-around items-center text-center py-4">
          <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out ">
            <Google className=""/>
          </div>
          <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out">
            <Facebook className=""/>
          </div>
          <div className="bg-gray-300 rounded-full px-2 py-2 hover:shadow-md hover:shadow-blue-300 hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out">
            <GitHub className=""/>
          </div>
        </div>
        <Input label="Username" size="lg" className="pb-0" value={username} onChange={handleUsername} />
        <Input label="Email" size="lg" className="pb-0" value={email} onChange={handleEmail} />
        <Input label="Password" size="lg" value={password} onChange={handlepassword} />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" style={{
            color: "#1181D8"
          }} />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button fullWidth type="submit" style={{
          backgroundColor: "#1181D8"
        }}
        >
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            style={{
              color: "#1181D8"
            }}
            className="ml-1 font-bold"
          >
            <Link to="/login">
              Sign in
            </Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    </form>
    </main>
  );
}

export default Register;