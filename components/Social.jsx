"use client"

import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { usePathname } from "next/navigation"

const socials = [
    {icon: <FaGithub/>, path:"/"},
    {icon: <FaLinkedinIn/>, path:"/"},
    {icon: <FaTwitter/>, path:"/"},
]
const Social = ({containerSytles, iconStyles}) => {
    const pathname = usePathname();
  return (
    <div className={containerSytles}>
      {
        socials.map((item,index)=>{
          return <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        })
      }
    </div>
  )
}

export default Social