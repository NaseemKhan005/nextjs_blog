import Link from "next/link";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoPinterestAlt,
	BiLogoLinkedin,
} from "react-icons/bi";

import { cn } from "@/lib/utils";

interface SocialLinksProps {
	icon: any;
	link: String;
}

const SocialLinks = ({ icon, link }: SocialLinksProps) => {
	const Icon = icon;
	const iconClasses =
		"cursor-pointer hover:text-indigo-600 hover:scale-125 transition-all";

	return (
		<Link href={`${link}`}>
			<Icon className={cn(iconClasses)} />
		</Link>
	);
};

interface PostSocailLinksProps {
	showIcons: Boolean;
	hideIconsClass?: String;
	showIconsClass?: String;
	wrapperClasses: String;
	facebookLink: String;
	instagramLink: String;
	twitterLink: String;
	pinterestLink: String;
	linkedinLink: String;
}

const PostSocailLinks = ({
	showIcons,
	wrapperClasses,
	hideIconsClass,
	showIconsClass,
	facebookLink,
	instagramLink,
	twitterLink,
	pinterestLink,
	linkedinLink,
}: PostSocailLinksProps) => {
	return (
		<div
			className={cn(
				wrapperClasses,
				showIcons ? showIconsClass : hideIconsClass
			)}
		>
			<SocialLinks icon={BiLogoFacebook} link={facebookLink} />
			<SocialLinks icon={BiLogoInstagram} link={instagramLink} />
			<SocialLinks icon={BiLogoTwitter} link={twitterLink} />
			<SocialLinks icon={BiLogoPinterestAlt} link={pinterestLink} />
			<SocialLinks icon={BiLogoLinkedin} link={linkedinLink} />
		</div>
	);
};

export default PostSocailLinks;
