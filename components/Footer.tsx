import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "postcss";

const footerTopData = [
  {
    title: "Visit Us",
    city: "New York",
    icon: <MapPin className="text-gray-600  transition-colors" />,
  },
  {
    title: "Call Us",
    city: "+1256 252 352",
    icon: <Phone className="text-gray-600  transition-colors" />,
  },
  {
    title: "Email Us",
    city: "michda@gmail.com",
    icon: <Mail className="text-gray-600  transition-colors" />,
  },
  {
    title: "Working Hours",
    city: "Mon - Fri: 9am-5pm",
    icon: <Clock className="text-gray-600  transition-colors" />,
  },
];

const footerColumnLinks = [
  ["About us", "Contact us", "Privacy Policy", "FAQs", "Terms & Conditions"],
  ["Jewelry", "Men", "Women", "ELectronics"],
];

const Footer = () => {
  return (
    <footer className="w-full m-auto bg-dark-color border-t  text-white">
      <div className="max-w-[1250px] mx-auto FooterTop grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-b border-b-gray-600 ">
        {footerTopData.map((item, index) => (
          <div
            key={index}
            className="flex items-center  group gap-3 p-4 transition-colors"
          >
            {item.icon}
            <div>
              <h3 className="font-semibold text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-white text-sm mt-1 transition-colors">
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1250px] mx-auto text-left md:text-left py-12 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4 text-white">
          <Logo />
          <p className="text-white text-sm pt-2">
            BymGeam - obchod s doplnkami výživy pre športovcov
            <br></br>
            <br></br>
            Sledujte nás:
          </p>
          <TooltipProvider>
            <div
              className={cn(
                "flex items-center justify-start md:justify-start gap-3.5 "
              )}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.youtube.com/channel/UCFWF-YVqwOYb4O4sImMqAyg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-white/60 hover:border-white hover:text-white border rounded-full  hoverEffect text-white/60"
                  >
                    <Youtube />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Youtube</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.facebook.com/GymBeamSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-white/60 hover:border-white hover:text-white border rounded-full  hoverEffect text-white/60"
                  >
                    <Facebook />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Facebook</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.instagram.com/gymbeamsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-white/60 hover:border-white hover:text-white border rounded-full  hoverEffect text-white/60"
                  >
                    <Instagram />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">Instagram</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="list-none space-y-3">
            {footerColumnLinks[0].map((link, index) => (
              <li key={index} className="text-white text-sm mb-2">
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Categories</h3>
          <ul className="list-none space-y-3 font-normal">
            {footerColumnLinks[1].map((link, index) => (
              <li key={index} className="text-white text-sm mb-2">
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semi-bold text-white mb-4">Newsletter</h3>
          <p className="text-white text-sm mb-4">
            Subscirbe to our newsletter to receive updates and exclusive offers.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-1  focus:ring-[#FF5100]"
            />
            <button
              className="w-full bg-[#FF5100] text-white py-2 px-4  hover:bg-[#CC3000] transition-colors cursor-pointer"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
