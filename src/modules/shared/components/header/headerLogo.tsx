import Link from "next/link";



export const HeaderLogo = () => {
    return (
        <Link href="/">
            <span className="flex items-center justify-center gap-1">
                Skypass
            </span>
        </Link>
    );
};