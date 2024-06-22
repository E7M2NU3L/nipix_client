import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { SiProgress } from "react-icons/si";

const CoursesContent = [
    {
        id:1,
        title: "UI/UX Review Check",
        description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
        link: "/courses/single/12345"
    },
    {
        id:2,
        title: "UI/UX Review Check",
        description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
        link: "/courses/single/12345"
    }
]
   
const CourseCard = () =>  {
    return (
      <main className="w-full min-h-[90vh] overflow-y-auto">
            <Typography className="text-3xl font-bold text-black ps-[2rem] py-[3rem]">
                Your <span className="text-blue-500 font-extrabold">Courses</span>
            </Typography>

            <main className="flex flex-wrap justify-center items-center gap-x-[1rem] w-full ps-[2rem]">
                {CoursesContent.map((content) => (
                    <Card className="mt-6 w-[20rem] bg-gray-100 shadow-lg shadow-gray-500" key={content.id}>
                        <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {content.title}
                        </Typography>
                        <Typography>
                            {content.description}
                        </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button className="rounded-lg shadow-md hover:shadow-lg" variant="gradient">
                            <a href={content.link} key={content.id} className="flex gap-x-[8px]" >
                                Continue <SiProgress />
                            </a>
                        </Button>
                        </CardFooter>
                    </Card>
                ) )}
            </main>
        </main>
    );
  }

export default CourseCard;