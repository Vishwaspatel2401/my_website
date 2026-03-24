import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Vishwaspatel2401",
    label: "GitHub profile",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/vishwaspatel24/",
    label: "LinkedIn profile",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
