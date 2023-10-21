import { cn } from "@/lib/utils";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoGithub,
} from "react-icons/bi";

const SocialLinks = ({ moreClasses }: { moreClasses?: String }) => {
	return (
		<div
			className={cn(
				"flex items-center gap-3 text-2xl text-black/70 dark:text-white/70",
				moreClasses
			)}
		>
			<BiLogoFacebook className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
			<BiLogoInstagram className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
			<BiLogoTwitter className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
			<BiLogoGithub className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
		</div>
	);
};

export default SocialLinks;
