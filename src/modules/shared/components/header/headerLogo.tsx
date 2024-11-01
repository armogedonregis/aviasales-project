import Link from "next/link";
import Logo from "/public/assets/vector/logo.svg"


export const HeaderLogo = () => {
    return (
        <Link href="/">
            <span className="flex items-start font-450 justify-center gap-1">
                <Logo />
                skypass
            </span>
        </Link>
    );
};