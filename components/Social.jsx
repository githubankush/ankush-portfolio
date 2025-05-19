"use client"

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/githubankush" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ankushkumayu/" },
  { icon: <FaTwitter />, path: "https://x.com/AnkushKumayu" },
]

const Social = ({ containerSytles, iconStyles }) => {
  return (
    <div className={containerSytles}>
      {socials.map((item, index) => (
        <a
          href={item.path}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
