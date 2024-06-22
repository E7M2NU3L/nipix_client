import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
 
const LINKS = [
  {
    title: "Quick Links",
    items: [{
      text: "Home",
      link:"/"
    },{
      text:  "Courses",
      link: "/courses"
    }, {
      text:  "Webinars",
      link: "/webinars"
    }, {
      text:  "Profile",
      link: "/profile"
    }],
  },
  {
    title: "Company",
    items: [{
      text: "About us",
      link:"/#about"
    },{
      text:  "Testimonials",
      link: "/#testimonials"
    }, {
      text:  "gallery",
      link: "/gallery"
    }],
  },
];
 
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="relative w-full pt-4 bg-gray-200" id="footer">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Nipix Tech
          </Typography>
          <div className="grid grid-cols-2 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.text}>
                    <Link to={link.link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link.text}
                    </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Nipix Tech</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Facebook />
            <Instagram />
            <LinkedIn />
            <WhatsApp />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}