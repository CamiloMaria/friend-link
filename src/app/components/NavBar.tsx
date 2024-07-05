import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-24">
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-600">
                    FRIENDLINK
                </Link>
            </div>

            <div className="hidden md:flex w-[50%]">
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} />
                        <span>Home</span>
                    </Link>
                    <Link href="/" className="flex gap-2">
                        <Image src="/friends.png" alt="Friends" width={16} height={16} />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex gap-2">
                        <Image src="/stories.png" alt="Stories" width={16} height={16} />
                        <span>Stories</span>
                    </Link>
                </div>
            </div>

            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <MobileMenu />
            </div>
        </div>
    )
}

export default NavBar