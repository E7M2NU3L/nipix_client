import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const WebinarContent = [{
    id:1,
    title: "Cyber Security",
    description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    linkText: "Enter Zoom"
},
{
    id:2,
    title: "Cyber Security",
    description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    linkText: "Enter Zoom"
}
]
   
const WebinarCard = () => {
    return (
        <main className="w-full min-h-[90vh] overflow-y-auto">
            <Typography className="text-3xl font-bold text-black ps-[2rem] py-[3rem]">
                Your <span className="text-blue-500 font-extrabold">Webinars</span>
            </Typography>

            <main className="flex flex-wrap justify-center items-center gap-x-[1rem] w-full ps-[2rem]">
                {WebinarContent.map((content) => (
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
                            <a href={content.link} key={content.id} >
                                {content.linkText}
                            </a>
                        </Button>
                        </CardFooter>
                    </Card>
                ) )}
            </main>
        </main>
    );
  }

export default WebinarCard