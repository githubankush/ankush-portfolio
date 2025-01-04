import Link from "next/link";
import Nav from "./Nav"
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return(
    <header className="py-8 xl:py-12 text-white">
        

            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl xl:text-4xl font-semibold text-center">Ankush<span className="text-[#00ff99]">.</span></h1>
                </Link>

                {/* desktop nav and hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button 
                        variant="ouline"
                        className="bg-[#00ff99] hover:bg-[#00ff00] text-black"
                        >Hire Me</Button>
                    </Link>

                </div>


               {/* mobile nav */}
               <div className="xl:hidden">
                    <MobileNav/>
               </div>

            </div>
    </header>
    )
}
export default Header;