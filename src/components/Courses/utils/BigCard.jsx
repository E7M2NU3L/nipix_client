import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button
  } from "@material-tailwind/react";
  import Cyber from '../../../assets/images/CyberSecurity.png'
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './utils.css'

const Pricing = () => {
  return (
    <div className="flex justify-around flex-col sm:flex-row gap-y-2 w-full mx-auto " style={{
      width: "22rem"
    }}>
      <div className="border border-blue-400 flex justify-center items-center py-1">
        <Typography variant="p" style={{
          padding: "1px 22px"
        }}>
          Online
        </Typography>
      </div>
    <div className="flex justify-between items-center gap-2">
      <Typography variant="small">
        Rs. 388/-
      </Typography>
      <Link to="/courses/register" className="inline-block">
        <Button variant="button" color="blue" className="flex items-center gap-2">
          Register
          <ArrowRight />
        </Button>
      </Link>
    </div>
    </div>
  )
}

const CourseContentFull = [{
  id:1,
  title: "Machine Learning [12 Weeks]",
  description: "Machine Learning Description",
  image: "images",
  payment: "499/-"
}]
   
  export function HorizontalCard() {
    return (
      <main>
        {CourseContentFull.map((content) => (
          <Card className="sm:w-[400px] w-[300px] min-h-[40vh] flex-col sm:flex-row" key={content.id} style={{
            border: "1px solid transparent",
          }}>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 shrink-0 rounded-r-none w-full sm:w-[35%] "
            >
              <img
                src={Cyber}
                alt="webinar-thumbnail"
                className="h-full w-full card-image rounded-none object-cover"
              />
            </CardHeader>

            <CardBody className="sm:w-3/4 w-full">
              <Typography color="gray" className="mb-2 uppercase text-xl font-bold">
                Introduction to Machine Learning
                </Typography>
              
              <section className="px-2 flex py-3 justify-between items-center relative">
                <Typography className="text-sm font-extralight">
                  12 Videos
                </Typography>

                <Typography className="text-md font-normal">
                  Prof. Nishok
                </Typography>
              </section>

              <Typography className="font-extralight" style={{
                  fontSize: "11px"
                }}>
                  Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap
                </Typography>
                
                <section className="w-full justify-around items-center flex">
                <Typography variant="small">
                  Rs. 388/-
                </Typography>
                <Link to="/courses/register">
                <button className="bg-blue-500 text-white font-semibold hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-green-500 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                  Register <ArrowRight />
                </button>
                </Link>
                </section>
            </CardBody>
            
          </Card>
        ))}
      </main>
    );
  }

