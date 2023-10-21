import { cn } from "@/lib/utils";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoGithub,
} from "react-icons/bi";

const SocialLinks = ({ additionalClasses }: { additionalClasses?: String }) => {
	const iconClasses =
		"cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all";
	return (
		<div className="flex items-center gap-3 text-2xl text-black/70 dark:text-white/70">
			<BiLogoFacebook className={cn(iconClasses, additionalClasses)} />
			<BiLogoInstagram className={cn(iconClasses, additionalClasses)} />
			<BiLogoTwitter className={cn(iconClasses, additionalClasses)} />
			<BiLogoGithub className={cn(iconClasses, additionalClasses)} />
		</div>
	);
};

export default SocialLinks;
