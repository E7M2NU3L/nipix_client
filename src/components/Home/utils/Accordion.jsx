import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
const AccordionVision = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Mission and Vision</AccordionHeader>
        <AccordionBody>
        Discover our commitment to solving real-world problems and creating positive change through innovative products and services. Learn more about our forward-thinking approach to technology and our passion for improving lives.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Technological Innovation
        </AccordionHeader>
        <AccordionBody>
        Explore how Nipixtech stays ahead of the curve with cutting-edge technology. Learn about our latest advancements and how we're transforming industries to shape the future.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Positive Impact
        </AccordionHeader>
        <AccordionBody>
        Learn how Nipixtech's dedication to creating positive change extends beyond technology. Explore the ways we're making a difference in communities and improving lives globally.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionVision;
 
export function AccordionVisionStyled() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4" id="scope">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Mission and Vision
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Discover our commitment to solving real-world problems and creating positive change through innovative products and services. Learn more about our forward-thinking approach to technology and our passion for improving lives.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Technological Innovation
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Explore how Nipixtech stays ahead of the curve with cutting-edge technology. Learn about our latest advancements and how we're transforming industries to shape the future.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Positive Impact
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Learn how Nipixtech's dedication to creating positive change extends beyond technology. Explore the ways we're making a difference in communities and improving lives globally.
        </AccordionBody>
      </Accordion>
    </>
  );
}