import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import Profile from '../../../assets/images/IOT.jpg'

const UserStatus = [{
    name: "Nishok",
    Role: "Student",
    HighestQual: "Masters",
    Description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to where you can enjoy the main night life in Barcelona.",
    image: Profile
}]
   
  export function ProfileCard() {
    return (
      <main className="flex justify-center items-center w-full ms-[2rem] sm:ps-0">
        {UserStatus.map((content) => (
            <Card className="w-96 shadow-lg shadow-gray-500 max-h-[70vh]">
            <CardHeader floated={false} className="h-80">
              <img src={`${content.image}`} alt="profile-picture" className="object-cover max-w-[300px] max-h-[350px]" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2 font-semibold text-2xl">
                {content.name}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="font-semibold text-xl pb-1" textGradient>
                {content.Role}
              </Typography>
              <Typography color="blue-gray"  className="font-normal text-md pb-3" variant="p" textGradient>
                {content.HighestQual}
              </Typography>
              <Typography color="blue-gray" className="font-light text-sm" textGradient>
                {content.Description}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href="#facebook"
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <i className="fab fa-facebook" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#twitter"
                  variant="lead"
                  color="light-blue"
                  textGradient
                >
                  <i className="fab fa-twitter" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#instagram"
                  variant="lead"
                  color="purple"
                  textGradient
                >
                  <i className="fab fa-instagram" />
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        ))}
      </main>
    );
  }