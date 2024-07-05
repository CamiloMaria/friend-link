import Link from "next/link"
import MobileMenu from "./MobileMenu"

const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-24">
            <div className="">
                <Link href="/" className="font-bold text-xl text-blue-600">
                    FRIENDLINK
                </Link>
            </div>

            <div className="hidden">

            </div>

            <div>
                <MobileMenu />
            </div>
        </div>
    )
}

export default NavBar