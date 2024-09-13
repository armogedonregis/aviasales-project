import { Link } from "@/lib/i18n/routing";

type SocialIcon = { name: string; label: string };

export const SocialIcons = ({ icons }: { icons: SocialIcon[] }) => {
    return (
        <div className="flex justify-center space-x-6 mb-4 mt-4">
            {icons.map((icon) => (
                <Link key={icon.name} href="#" className="text-blue-500">
                    <img src={`/assets/vector/${icon.name}.svg`} alt={icon.label} className="w-6 h-6" />
                </Link>
            ))}
        </div>
    );
};