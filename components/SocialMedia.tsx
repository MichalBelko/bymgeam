import { Tooltip } from "@radix-ui/react-tooltip";
import React from "react";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Facebook, Twitter, Instagram, Youtube, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialMediaLinks = [
  {
    name: "Youtube",
    icon: <Youtube className="w-5 h-5" />,
    href: "https://www.youtube.com/channel/UCFWF-YVqwOYb4O4sImMqAyg",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/GymBeamSk",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "https://x.com/gymbeamteam?lang=bn",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/gymbeamsk",
  },
  {
    name: "Github",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/MichalBelko/",
  },
];

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 ")}>
        {socialMediaLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border rounded-full hover:border-white hover:text-white hoverEffect text-white/50 border-white/50"
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
