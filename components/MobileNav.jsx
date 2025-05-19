"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    { name: "home", path: "/" },
  // { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  // { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
    
]

const MobileNav = () => {
    const pathname = usePathname();

  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#00ff99]" />
    </SheetTrigger>
    
    <SheetContent className="flex flex-col justify-center items-center gap-4">
      {/* logo */}
        

        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link,index) =>{
            return <Link href={link.path} key={index} className={`text-xl transition-all capitalize ${pathname === link.path &&  "text-[#00ff99] border-b-2 border-[#00ff99]" }`}>{link.name}</Link>
          })}
        </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav