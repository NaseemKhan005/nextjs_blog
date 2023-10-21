"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoPinterestAlt,
	BiLogoLinkedin,
} from "react-icons/bi";

import PublishDate from "./PublishDate";
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

interface PostCardProps {
	link: String;
	imgSrc: String;
}

const PostCard = ({ link, imgSrc }: PostCardProps) => {
	const [showIcons, setShowIcons] = useState(false);

	return (
		<div
			onMouseEnter={() => setShowIcons(true)}
			onMouseLeave={() => setShowIcons(false)}
		>
			<Link href={`${link}`} className="relative block">
				<div className="relative overflow-hidden">
					<Image
						src={`${imgSrc}`}
						alt="latest post"
						width={500}
						height={500}
						className="object-cover w-full h-full rounded-2xl mb-5"
					/>
					<Link
						href={"/category"}
						className="capitalize absolute top-3 left-3 bg-indigo-500/60 hover:bg-indigo-600 border border-indigo-600 text-white rounded-full py-1 px-2 text-xs font-semibold"
					>
						technology
					</Link>

					<div
						className={cn(
							"flex items-center justify-center text-xl gap-5 absolute bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100/20 py-[.7rem] px-7 rounded-full bottom-8 left-1/2 -translate-x-1/2 text-indigo-600 transition-all duration-500",
							showIcons ? "scale-100 opacity-100" : "scale-0 opacity-0"
						)}
					>
						<SocialLinks icon={BiLogoFacebook} link="/" />
						<SocialLinks icon={BiLogoInstagram} link="/" />
						<SocialLinks icon={BiLogoTwitter} link="/" />
						<SocialLinks icon={BiLogoPinterestAlt} link="/" />
						<SocialLinks icon={BiLogoLinkedin} link="/" />
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="text-lg font-semibold leading-tight">
						Take a 3D tour through a Microsoft datacenter?
					</h2>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						totam perspiciatis accusantium nisi quae explicabo a saepe cum.
					</p>
					<PublishDate
						author="Naseem khan"
						date="December 16, 2023"
						additionalClasses="bg-dark-color dark:bg-white w-1"
					/>
				</div>
			</Link>

			<div className="flex items-center justify-between mt-4 select-none">
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-1 hover:text-red-500">
						<AiOutlineHeart className="text-4xl cursor-pointer p-2 bg-muted-foreground/5 hover:bg-red-500/10 rounded-full" />
						<span>1</span>
					</div>
					<Link href="#comment">
						<div className="flex items-center gap-1 hover:text-emerald-500">
							<AiOutlineMessage className="text-4xl p-2 bg-muted-foreground/5 hover:bg-emerald-500/10 rounded-full" />
							<span>1</span>
						</div>
					</Link>
				</div>
				<Link
					href="/"
					className="font-semibold text-sm flex items-start hover:text-indigo-600"
				>
					<span>Read more</span>
					<MdKeyboardArrowRight className="text-xl mt-[2px]" />
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
