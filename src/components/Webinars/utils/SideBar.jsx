import React from 'react'
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

const SideBar = () => {
  return (
    <div className='sm:block hidden'>

      <h1 className='text-3xl ps-[1rem] text-blue-500 font-medium'>
        Courses You may Like
      </h1>

      <main className="flex flex-wrap justify-center items-center gap-x-[1rem] px-[3rem]">
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
    </div>
  )
}

export default SideBar