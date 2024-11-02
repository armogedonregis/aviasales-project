import Link from "next/link";
import Logo from "/public/assets/vector/logo.svg"


export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="lg:flex items-start lg:gap-2.5 justify-center">
                <Logo className="w-[27px] h-[44px] lg:w-[49px] lg:h-[79px]" />
                <span className="text-5xl font-450 gap-1 hidden lg:inline">
                    skypass
                </span>
            </div>
        </Link>
    );
};