import { cn } from "@/lib/utils";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoGithub,
	BiLogoPinterest,
	BiLogoYoutube,
} from "react-icons/bi";

const SocialLinks = ({ additionalClasses }: { additionalClasses?: String }) => {
	const iconClasses = "cursor-pointer hover:text-indigo-600";
	return (
		<div className="flex items-center gap-3 text-lg text-black/70 dark:text-white/70">
			<BiLogoFacebook className={cn(iconClasses, additionalClasses)} />
			<BiLogoInstagram className={cn(iconClasses, additionalClasses)} />
			<BiLogoTwitter className={cn(iconClasses, additionalClasses)} />
			<BiLogoGithub className={cn(iconClasses, additionalClasses)} />
			<BiLogoPinterest className={cn(iconClasses, additionalClasses)} />
			<BiLogoYoutube className={cn(iconClasses, additionalClasses)} />
		</div>
	);
};

export default SocialLinks;
